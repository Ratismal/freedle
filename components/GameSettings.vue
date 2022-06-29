<template>
  <div :class="['settings', active ? 'active' : '']">
    <h1 class="center">
      Settings
    </h1>
    <div class="close-button" @click.prevent="openListener">
      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
        <path fill="var(--color-text)" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
      </svg>
    </div>
    <div class="settings-wrapper">
      <div class="settings-group">
        <div>
          <span class="title">Hard Mode</span>
          <span class="subtitle">Any revealed hints must be used in subsequent guesses</span>
        </div>
        <label>
          <input
            v-model="settings.hardMode"
            class="input"
            type="checkbox"
            :disabled="inGame"
          >
          <div class="toggle-wrapper"><span class="selector" /></div>
        </label>
      </div>
      <div class="settings-group">
        <div>
          <span class="title">Light Theme</span>
        </div>
        <label>
          <input v-model="settings.lightTheme" class="input" type="checkbox">
          <div class="toggle-wrapper"><span class="selector" /></div>
        </label>
      </div>
      <div class="settings-group">
        <div>
          <span class="title">Present Color</span>
          <span class="subtitle">When the guess is in the word, but the wrong place</span>
        </div>
        <select v-model="settings.presentColor">
          <option v-for="color, key in colors" :key="key" :value="key">
            {{ color }} {{ key }}
          </option>
        </select>
      </div>
      <div class="settings-group">
        <div>
          <span class="title">Correct Color</span>
          <span class="subtitle">When the guess is in the word, and in the right place</span>
        </div>
        <select v-model="settings.correctColor">
          <option v-for="color, key in colors" :key="key" :value="key">
            {{ color }} {{ key }}
          </option>
        </select>
      </div>
      <div class="settings-group">
        <div>
          <span class="title">Repeated Color</span>
          <span class="subtitle">When the guess isn't in the word, and has already been guessed</span>
        </div>
        <select v-model="settings.repeatedColor">
          <option :value="null">
            Blank
          </option>
          <option v-for="color, key in colors" :key="key" :value="key">
            {{ color }} {{ key }}
          </option>
        </select>
      </div>
      <div class="settings-group">
        <div>
          <span class="title">Mention Freedle</span>
          <span class="subtitle">When on, mentions Freedle in the shared results instead of Wordle</span>
        </div>
        <label>
          <input v-model="settings.mentionFreedle" class="input" type="checkbox">
          <div class="toggle-wrapper"><span class="selector" /></div>
        </label>
      </div>
      <div class="settings-group">
        <div>
          <span class="title">Megathrob</span>
        </div>
        <label>
          <input v-model="settings.megathrob" class="input" type="checkbox">
          <div class="toggle-wrapper"><span class="selector" /></div>
        </label>
      </div>
      <div class="settings-group">
        <div>
          <span class="title">Flip Style</span>
        </div>
        <select v-model="settings.flipStyle">
          <option v-for="style, key in flipStyles" :key="key" :value="key">
            {{ style }}
          </option>
        </select>
      </div>
      <div class="settings-group">
        <div>
          <span class="title">Golf Mode</span>
        </div>
        <label>
          <input v-model="settings.golf" class="input" type="checkbox">
          <div class="toggle-wrapper"><span class="selector" /></div>
        </label>
      </div>
      <div v-if="settings.golf" class="settings-group">
        <div>
          <span class="title">Nice Cock!</span>
        </div>
        <label>
          <input v-model="settings.niceCock" class="input" type="checkbox">
          <div class="toggle-wrapper"><span class="selector" /></div>
        </label>
      </div>
      <div class="settings-group">
        <div>
          <span class="title">Invert Results Theme</span>
          <span class="subtitle">When copying results, gives you black squares when on light theme, and vice&nbsp;versa</span>
        </div>
        <label>
          <input v-model="settings.invertResultsTheme" class="input" type="checkbox">
          <div class="toggle-wrapper"><span class="selector" /></div>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import { colors } from '@/assets/constants';

export default {
  data () {
    return {
      settings: {
        ...this.$store.state.settings.settings
      },
      flipStyles: {
        default: 'Default',
        sideways: 'Sideways',
        diagonal: 'Diagonal',
        rotate: 'Rotate',
        fade: 'Fade',
        shrink: 'Shrink',
        bounce: 'Bounce',
        warp: 'Warp',
        zoom: 'Zoom',
        crazy: 'Crazy'
      },
      colors,
      active: false,
      boundOpenListener: null
    };
  },
  computed: {
    ...mapGetters({
      gameOver: 'game/gameOver',
      game: 'game/getCurrentGame'
    }),
    inGame () {
      return !this.gameOver && this.game.currentRow !== 0;
    }
  },
  watch: {
    settings: {
      deep: true,
      handler () {
        this.save();
      }
    }
  },
  mounted () {
    this.settings = {
      ...this.$store.state.settings.settings
    };
    this.boundOpenListener = this.openListener.bind(this);
    this.$root.$on('open:settings', this.boundOpenListener);
  },
  destroyed () {
    this.$root.$off('open:settings', this.boundOpenListener);
  },
  methods: {
    ...mapActions({
      reset: 'game/reset',
      saveSettings: 'settings/save'
    }),
    save () {
      this.saveSettings(this.settings);
      this.saveThemeConfig();
    },
    saveThemeConfig () {
      const classes = [];
      if (this.settings.lightTheme) {
        classes.push('light');
      }
      if (this.settings.megathrob) {
        classes.push('megathrob');
      }

      if (this.settings.presentColor !== 'yellow') {
        classes.push('present-' + this.settings.presentColor);
      }
      if (this.settings.correctColor !== 'green') {
        classes.push('correct-' + this.settings.correctColor);
      }
      if (this.settings.repeatedColor !== null) {
        classes.push('repeated-' + this.settings.repeatedColor);
      }

      if (this.settings.flipStyle) {
        classes.push('flip-' + this.settings.flipStyle);
      }

      localStorage.setItem('theme', classes.join(' '));
      window.setTheme();
    },
    openListener () {
      this.active = !this.active;
    }
  }

};
</script>

<style scoped lang="scss">
.settings {
  top: 60px;
  bottom: 0;
  left: 0;
  right: 0;
  max-width: 500px;
  margin: 0 auto;
  z-index: 600;
  padding: 10px;

  position: fixed;
  background: var(--color-background);

  overflow-y: auto;

  &:not(.active) {
    display: none;
  }
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}

.settings-group {
  display: flex;
  height: 70px;
  border-bottom: 1px solid var(--color-border-empty);
  align-items: center;

  div {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;

    .title {
      font-size: 1.3em;
    }
    .subtitle {
      font-size: 0.8em;
      opacity: 0.6;
    }
  }

  label {
    flex: 0 1 auto;
  }

  select {
    flex: 1 1 auto;
  }
}
</style>
