<template>
  <div />
</template>

<script>
import { createHash } from 'crypto';
import dayjs from 'dayjs';
import { mapActions, mapGetters } from 'vuex';

import getSfx from '@/assets/audioClips';

import words from '@/assets/words.json';
const salt = 'wBB9pw39j7kEWy3o7ubhJ6xmYfRf5d8RjTmjaAjZb2NJj2GChMC7C4vwdRQAPYfQsZWPcGgW4DWcZhpuKaCEB7kZNwXvdftXYWkM3rLAEBjtnSzjWLX4hvNwPXaFVceu';

const WORDLE_EPOCH = dayjs('June 19, 2021');

export default {
  computed: {
    ...mapGetters({
      gameMode: 'game/gameMode',
      currentGame: 'game/getCurrentGame',
      gameOver: 'game/gameOver',
      gameWon: 'game/gameWon',
      settings: 'settings/settings'
    })
  },
  watch: {
    gameMode () {
      this.checkWordRefresh();
    },
    async gameOver () {
      if (!this.gameOver) {
        return;
      }
      const tries = this.currentGame.currentRow - 1;

      if (this.gameWon) {
        this.addGame(tries);
      } else {
        this.addGame('fail');
      }
      await this.sleep(250 * 5);
      let words = ['Genius', 'Magnificent', 'Impressive', 'Splendid', 'Great', 'Phew'];
      if (this.settings.golf) {
        words = ['Hole In One', 'Double Eagle', 'Eagle', 'Birdie', 'Par', 'Nice'];
      }
      if (this.settings.golf && this.settings.niceCock) {
        words[0] = 'Nice Cock';
      }

      if (this.gameWon) {
        setTimeout(() => {
          this.addToast({
            text: words[tries].toUpperCase(),
            duration: 5000
          });
        }, 250);
      }

      if (this.settings.golf) {
        let fanfare = getSfx('ffNiceShot');
        const voices = [
          'holeInOne',
          'doubleEagle',
          'eagle',
          'birdie',
          'par',
          'sixthTry'
        ];
        let voice = getSfx(voices[tries]);
        if (!this.gameWon) {
          voice = getSfx('tryAgain');
        }
        if (this.settings.niceCock && tries === 0) {
          fanfare = getSfx('ffStrike');
          voice = getSfx('niceCockReverb');
        }
        if (tries >= 3) {
          fanfare = getSfx('ffPoint');
        }

        const voiceAudio = new Audio(voice);
        const fanfareAudio = new Audio(fanfare);
        if (!this.settings.niceCock || tries !== 0) {
          voiceAudio.volume = 0.7;
        }
        if (!this.gameWon) {
          const aww = new Audio(getSfx('aww'));
          const miss = new Audio(getSfx('miss'));
          miss.play();
          await this.sleep(200);
          aww.play();
          // await this.sleep(90);
          // voiceAudio.play();
        } else {
          fanfareAudio.play();
          await this.sleep(800);
          voiceAudio.play();
        }
      }

      await this.sleep(3000);
      this.$root.$emit('open:stats');
    }
  },
  mounted () {
    this.checkWordRefresh();
  },
  methods: {
    ...mapActions({
      reset: 'game/reset',
      setWord: 'game/setWord',
      addToast: 'game/addToast',
      addGame: 'statistics/addGame'
    }),
    sleep (time) {
      return new Promise(resolve => setTimeout(resolve, time));
    },
    getDayNumber (date) {
      const diff = dayjs.duration(date.diff(WORDLE_EPOCH));

      return Math.floor(diff.asDays());
    },
    checkWordRefresh () {
      const today = this.getDayNumber(dayjs());
      const gameDay = this.getDayNumber(dayjs(this.currentGame.date));

      if (today !== gameDay) {
        this.reset();
      }
      const word = this.getTodaysWord(today);
      this.setWord({ word, day: today });
    },
    getTodaysWord (day) {
      console.log(day);
      switch (this.gameMode) {
        case 'wordle':
          return words[day];
        case 'hash':
          return this.getHashWord();
        default:
          return 'penis';
      }
    },
    getHashWord () {
      const hash = createHash('sha256');
      const string = dayjs().format('DD-MM-YYYY') + '-' + salt;
      hash.update(string);
      const hex = hash.digest('hex');
      const input = parseInt(hex.substring(0, 7), 16);
      const word = words[input % words.length];
      return word;
    }
  }
};
</script>
