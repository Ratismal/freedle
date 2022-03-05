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

<style scoped>
.tile {
  width: 62px;
  height: 62px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2em;
  text-transform: uppercase;
  font-weight: bold;
  border: 2px solid var(--color-border-empty);
  animation-duration: var(--flip-duration);
  animation-timing-function: linear;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  background: var(--color-empty);
  color: var(--color-text-pre-guess);
}

.tile.filled {
  border: 2px solid var(--color-border-filled);
}

.tile.filled:not(.absent):not(.present):not(.correct):not(.appear):not(.disappear) {
  animation: throb var(--throb-duration);
}

.tile.absent, .tile.present, .tile.correct {
  color: var(--color-text-post-guess);
  border: none;
}

.tile.absent {
  background: var(--color-absent);
}

.tile.present {
  background: var(--color-present);
}

.tile.correct {
  background: var(--color-correct);
}

.tile.disappear {
  animation-name: disappear;
}
.tile.appear {
  animation-name: appear;
}

.tile.jump {
  animation-name: jump;
  animation-duration: 1s;
}

@keyframes disappear {
  from {
    transform: rotate3d(0);
  }

  to {
    transform: var(--flip-transform-disappear);
  }
}

@keyframes appear {
  from {
    transform: var(--flip-transform-appear);
  }

  to {
    transform: rotate3d(0);
  }
}

@keyframes throb {
  0% {
    transform: scale(1);
  }

  1% {
    transform: scale(var(--throb-scale));
  }

  100% {
    transform: scale(1);
  }
}

@keyframes jump {
  0%, 20% {
    transform: translateY(0);
  }

  40% {
    transform: translateY(-30px);
  }

  50% {
    transform: translateY(5px);
  }

  60% {
    transform: translateY(-15px);
  }

  80% {
    transform: translateY(2px);
  }

  100% {
    transform: translateY(0);
  }
}
</style>
