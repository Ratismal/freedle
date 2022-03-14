<template>
  <div :class="['tile', displayedTile.score, state, displayedTile.guess ? 'filled' : '']">
    {{ displayedTile.guess }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
const ANIMATION_DURATION = 250;

export default {
  props: {
    row: {
      type: Number,
      default: 0
    },
    column: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      displayedTile: {
        guess: '',
        score: ''
      },
      state: 'idle',
      animating: false
    };
  },
  computed: {
    ...mapGetters({
      currentRow: 'game/getCurrentRow',
      gameWon: 'game/gameWon'
    }),
    tile () {
      return this.$store.getters['game/getTileByPosition'](this.row, this.column);
    },
    current () {
      return this.row === this.currentRow;
    }
  },
  watch: {
    tile: {
      deep: true,
      async handler (newValue) {
        if (this.animating) {
          return;
        }
        this.animating = true;
        if (this.currentRow === this.row + 1 && newValue.score !== this.displayedTile.score) {
          if (this.column !== 0) {
            await this.sleep(ANIMATION_DURATION * this.column);
          }
          this.state = 'disappear';
          await this.sleep(ANIMATION_DURATION);
          this.displayedTile = {
            ...this.tile
          };
          this.state = 'appear';
          await this.sleep(ANIMATION_DURATION);
          this.state = 'idle';

          if (this.gameWon) {
            await this.sleep(ANIMATION_DURATION * (5 - this.column));

            await this.sleep(ANIMATION_DURATION / 2 * this.column);

            this.state = 'jump';
          }
        } else {
          this.displayedTile = {
            ...this.tile
          };
        }
        this.animating = false;
      }
    }
  },
  mounted () {
    this.displayedTile = {
      ...this.tile
    };
  },
  methods: {
    sleep (time) {
      return new Promise(resolve => setTimeout(resolve, time));
    }
  }

};
</script>
