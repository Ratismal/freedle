<template>
  <div :class="['modal', active ? 'active' : '']">
    <div class="modal-contents">
      <h1>STATISTICS</h1>

      <div class="stat-counter">
        <div class="stat">
          <span class="value">{{ stats.gamesPlayed }}</span>
          <span class="label">Played</span>
        </div>
        <div class="stat">
          <span class="value">{{ winPercent }}</span>
          <span class="label">Win %</span>
        </div>
        <div class="stat">
          <span class="value">{{ stats.currentStreak }}</span>
          <span class="label">Current<br>Streak</span>
        </div>
        <div class="stat">
          <span class="value">{{ stats.maxStreak }}</span>
          <span class="label">Max<br>Streak</span>
        </div>
      </div>

      <h1>GUESS DISTRIBUTION</h1>

      <div class="guesses">
        <template v-for="i in 6">
          <div :key="i + '-guess'" class="guess">
            {{ i }}
          </div>
          <div :key="i + '-guess-bar'" :class="getClass(i)" :style="getWidth(i)">
            {{ stats.guesses[i] }}
          </div>
        </template>
      </div>

      <button class="button correct" @click.prevent="copyResults">
        SHARE
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
          <path fill="white" d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
        </svg>
      </button>

      <div class="close-button" @click.prevent="openListener">
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
          <path fill="var(--color-text)" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import { colors, darkSquare, lightSquare } from '@/assets/constants';

export default {
  data () {
    return {
      active: false,
      boundOpenListener: null
    };
  },
  computed: {
    ...mapGetters({
      stats: 'statistics/stats',
      settings: 'settings/settings',
      game: 'game/getCurrentGame'
    }),
    winPercent () {
      return (this.stats.gamesWon / this.stats.gamesPlayed * 100).toFixed(0);
    },
    maxScore () {
      let score = 0;
      for (let i = 1; i <= 6; i++) {
        if (this.stats.guesses[i] > score) {
          score = this.stats.guesses[i];
        }
      }

      return score;
    }
  },
  mounted () {
    this.boundOpenListener = this.openListener.bind(this);
    this.$root.$on('open:stats', this.boundOpenListener);
  },
  destroyed () {
    this.$root.$off('open:stats', this.boundOpenListener);
  },
  methods: {
    openListener () {
      this.active = !this.active;
    },
    getWidth (score) {
      const times = this.stats.guesses[score];
      const perc = Math.round(times / this.maxScore * 100);
      return { width: Math.max(7, perc) + '%' };
    },
    getClass (score) {
      return {
        'guess-bar': true,
        current: this.stats.lastScore === score
      };
    },
    copyResults () {
      const present = colors[this.settings.presentColor];
      const correct = colors[this.settings.correctColor];
      const absent = this.settings.lightTheme ? lightSquare : darkSquare;
      const day = this.game.day;

      const results = [];
      const name = this.settings.mentionFreedle ? 'Freedle' : 'Wordle';

      results.push(`${name} ${day} ${this.stats.lastScore}/6${this.settings.hardMode ? '*' : ''}`);
      results.push('');

      for (const row of this.game.rows) {
        const guesses = [];

        for (const guess of row) {
          if (guess.score === 'correct') {
            guesses.push(correct);
          } else if (guess.score === 'present') {
            guesses.push(present);
          } else {
            guesses.push(absent);
          }
        }

        const line = guesses.join('');
        results.push(line);

        if (line === correct.repeat(5)) {
          break;
        }
      }

      navigator.clipboard.writeText(results.join('\n'));
    }
  }
};
</script>

<style scoped lang="scss">
.modal-contents {
  height: 475px !important;
}
h1 {
  text-align: center;
  font-size: 1.25rem;
  opacity: 0.9;
}

.stat-counter {
  display: flex;
  justify-content: center;
  margin: 5px 0;

  .stat {
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 0 10px;

    .value {
      font-size: 3em;
    }

    .label {
      font-size: 0.8em;
    }
  }
}

.guesses {
  display: grid;
  grid-template-columns: 10px 1fr;
  grid-gap: 5px;
  width: 400px;
  margin: 0 auto;
  align-items: center;

  .guess-bar {
    background: var(--color-absent);
    text-align: right;
    padding: 2px 7px;
    font-weight: bold;

    &.current {
      background: var(--color-correct);
    }
  }
}

.button.correct {
  margin: 20px 0;
}
</style>
