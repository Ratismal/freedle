<template>
  <div class="game">
    <game-row :row="0" />
    <game-row :row="1" />
    <game-row :row="2" />
    <game-row :row="3" />
    <game-row :row="4" />
    <game-row :row="5" />
    <button v-if="dev" class="button" @click.prevent="reset">
      Reset Today's Wordle
    </button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import GameRow from './GameRow.vue';

export default {
  components: { GameRow },
  data () {
    return {
      boundKeyUp: this.keyUp.bind(this),
      boundKeyDown: this.keyDown.bind(this),
      keysDown: {}
    };
  },
  computed: {
    dev () {
      if (localStorage.getItem('dev') === 'true') {
        return true;
      }

      return false;
    }
  },
  mounted () {
    if (this.$store.state.settings.firstTime !== false) {
      setTimeout(() => {
        this.$root.$emit('open:info');
      }, 100);
      this.$store.dispatch('settings/setFirstTime');
    }
    document.addEventListener('keyup', this.boundKeyUp);
    document.addEventListener('keydown', this.boundKeyDown);
  },
  destroyed () {
    document.removeEventListener('keyup', this.boundKeyUp);
    document.removeEventListener('keydown', this.boundKeyDown);
  },
  methods: {
    ...mapActions({
      setWord: 'game/setWord',
      enterLetter: 'game/enterLetter',
      deleteLetter: 'game/deleteLetter',
      performGuess: 'game/performGuess',
      reset: 'game/reset'
    }),
    keyUp (event) {
      this.keysDown[event.key] = false;
    },
    keyDown (event) {
      if (event.shiftKey || event.ctrlKey || event.altKey) {
        return;
      }
      if (this.keysDown[event.key] && /^(Enter|Backspace|[a-z])$/i.test(event.key)) {
        event.preventDefault();
        return false;
      }
      this.keysDown[event.key] = true;
      if (event.key === 'Backspace') {
        event.preventDefault();
        this.deleteLetter();
      } else if (event.key === 'Enter') {
        event.preventDefault();
        this.performGuess();
      } else if (/^[a-z]$/i.test(event.key)) {
        event.preventDefault();
        this.enterLetter(event.key);
      }
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

.game {
  width: 330px;
  margin: 0 auto;
}
</style>
