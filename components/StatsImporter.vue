<template>
  <div :class="['modal', active ? 'active' : '']">
    <div class="modal-contents">
      <h1>Stats Importer</h1>
      <p>
        Use this to import your statistics
        from Wordle.
      </p>
      <p>
        You can find your stats by going to Wordle,
        opening console (ctrl+shift+i), and typing:
      </p>
      <pre><code>console.log(localStorage.getItem('nyt-wordle-statistics'))</code></pre>
      <img src="import.png" alt="Instructions on how to copy your statistics.">
      <p>Copy this and paste it into the below box and click "import", or click "export" to get your Freedle stats.</p>
      <textarea v-model="stats" class="textbox full" />
      <div class="group">
        <button class="button" @click.prevent="performImport">
          Import
        </button>
        <button class="button correct" @click.prevent="performExport">
          Export
        </button>
      </div>

      <div class="close-button" @click.prevent="openListener">
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
          <path fill="var(--color-text)" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data () {
    return {
      active: false,
      boundOpenListener: null,
      stats: ''
    };
  },
  computed: {
    ...mapGetters({
      currentStats: 'statistics/stats'
    }),
    stringifiedStats () {
      return JSON.stringify(this.currentStats);
    }
  },
  mounted () {
    this.boundOpenListener = this.openListener.bind(this);
    this.$root.$on('open:stats-importer', this.boundOpenListener);
  },
  destroyed () {
    this.$root.$off('open:stats-importer', this.boundOpenListener);
  },
  methods: {
    ...mapActions({
      importStats: 'statistics/importStats'
    }),
    openListener () {
      this.active = !this.active;
    },
    performImport () {
      const stats = JSON.parse(this.stats);
      this.importStats(stats);
    },
    performExport () {
      this.stats = this.stringifiedStats;
    }
  }
};
</script>

<style scoped lang="scss">
.modal-contents {
  height: 500px !important;

  img {
    width: 100%;
  }

  .textbox {
    height: 60px;
  }

  .group {
    display: flex;
    justify-content: space-between;
  }
}
</style>
