<template>
  <div :class="['modal', active ? 'active' : '']">
    <div class="modal-contents">
      <h1>What is Freedle?</h1>
      <p>
        Yeah, I'm not gonna bullshit you.
        This is just Wordle. You know, that word guessing game.
        I'm not gonna bother explaining the rules,
        I'm sure you already know. 'Cuz this is just Wordle.
      </p>

      <p>
        ...but it's also Wordle that's been rewritten from scratch,
        <a href="https://github.com/ratismal/freedle" target="_blank">open-sourced</a>,
        guaranteed to always be free, never paywalled,
        with absolutely no analytics or tracking.
        With a bunch of new features jammed in that I thought
        were neat.
      </p>

      <p>
        I'm making this for myself. You're welcome to use it too. Have fun.
      </p>

      <p>To restore your statistics from Wordle, copy the "statistics" localStorage property, and run this on Freedle:</p>
      <pre><code>const state = JSON.parse(localStorage.getItem('vuex'))
const stats = { /* PASTE YOUR WORDLE STATISTICS OBJECT HERE */ }

state.statistics = { ...stats, lastScore: 0, lastGame: Date.now() }
localStorage.setItem('vuex', JSON.stringify(state))</code></pre>

      <h2>Have an issue?</h2>

      <p>
        Try making an issue <a href="https://github.com/ratismal/freedle/issues" target="_blank">here</a>.
        I may or may not get to it, depending on if I feel like it.
      </p>

      <h2>Attribution</h2>
      <ul>
        <li>
          <a href="https://dailywordle.com" target="_blank">Wordle</a> (<a href="https://www.powerlanguage.co.uk" target="_blank">Josh/powerlanguage</a>, New York Times)
        </li>
        <li>
          Wii Sports audio clips (Nintendo, Josh Millman)
        </li>
        <li>
          "Nice Cock" generated using <a href="https://uberduck.ai" target="_blank">uberduck.ai</a>
        </li>
      </ul>
      <div class="close-button" @click.prevent="openListener">
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
          <path fill="var(--color-text)" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: false,
      boundOpenListener: null
    };
  },
  mounted () {
    this.boundOpenListener = this.openListener.bind(this);
    this.$root.$on('open:info', this.boundOpenListener);
  },
  destroyed () {
    this.$root.$off('open:info', this.boundOpenListener);
  },
  methods: {
    openListener () {
      this.active = !this.active;
    }
  }
};
</script>

<style scoped lang="scss">
.modal-contents {
  height: 500px !important;
}
</style>
