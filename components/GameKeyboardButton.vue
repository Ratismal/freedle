<template>
  <button class="keyboard-button" :class="className" @click.prevent="click">
    <template v-if="button === 'Backspace'">
      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
        <path fill="white" d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z" />
      </svg>
    </template>
    <template v-else>
      {{ button }}
    </template>
  </button>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  props: {
    button: {
      type: String,
      default: 'A'
    }
  },
  computed: {
    ...mapGetters({
      game: 'game/getCurrentGame'
    }),
    lowered () {
      return this.button.toLowerCase();
    },
    state () {
      let present = false;
      for (const row of this.game.rows) {
        for (const guess of row) {
          if (guess.guess === this.lowered) {
            switch (guess.score) {
              case 'absent':
                return 'absent';
              case 'correct':
                return 'correct';
              case 'present':
                present = true;
            }
          }
        }
      }
      if (present) {
        return 'present';
      }
      return 'idle';
    },
    className () {
      return {
        backspace: this.button === 'Backspace',
        enter: this.button === 'Enter',
        [this.state]: true
      };
    }
  },
  methods: {
    ...mapActions({
      setWord: 'game/setWord',
      enterLetter: 'game/enterLetter',
      deleteLetter: 'game/deleteLetter',
      performGuess: 'game/performGuess',
      reset: 'game/reset'
    }),
    click () {
      if (this.button === 'Enter') {
        this.performGuess();
      } else if (this.button === 'Backspace') {
        this.deleteLetter();
      } else {
        this.enterLetter(this.button.toLowerCase());
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.keyboard-button {
  background: var(--color-key);
  text-align: center;
  outline: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 58px;
  flex: 1;
  color: white;
  border-radius: 5px;
  margin: 0 6px 0 0;
  text-transform: uppercase;
  cursor: pointer;

  &.present {
    background: var(--color-present);
  }
  &.correct {
    background: var(--color-correct);
  }
  &.absent {
    background: var(--color-absent);
  }
}

.enter, .backspace {
  flex: 1.5;
}
</style>
