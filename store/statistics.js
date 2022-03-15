import dayjs from 'dayjs';

export const state = () => ({
  gamesPlayed: 0,
  gamesWon: 0,
  currentStreak: 0,
  maxStreak: 0,
  guesses: {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    fail: 0
  },
  lastScore: 0,
  lastGame: 0
});

export const actions = {
  addGame ({ commit }, score) {
    commit('addGame', score);
  },
  importStats ({ commit }, stats) {
    commit('importStats', stats);
  }
};

export const mutations = {
  addGame (state, score) {
    state.guesses[score + 1]++;

    const win = score !== 'fail';

    if (win) {
      state.lastScore = score + 1;
    } else {
      state.lastScore = 'X';
    }

    const lastGame = dayjs(state.lastGame).startOf('day');
    const today = dayjs().startOf('day');
    const diff = dayjs.duration(today.diff(lastGame));
    if (diff.asDays() <= 1 && win) {
      state.currentStreak++;
    } else if (!win) {
      state.currentStreak = 0;
    } else {
      state.currentStreak = 1;
    }
    if (state.currentStreak > state.maxStreak) {
      state.maxStreak = state.currentStreak;
    }

    state.gamesPlayed++;
    if (win) {
      state.gamesWon++;
    }

    state.lastGame = Date.now();
  },
  importStats (state, stats) {
    state.gamesPlayed = stats.gamesPlayed;
    state.gamesWon = stats.gamesWon;
    state.currentStreak = stats.currentStreak;
    state.maxStreak = stats.maxStreak;
    state.guesses = { ...stats.guesses };
    state.lastScore = 0;
    state.lastGame = 0;
  }
};

export const getters = {
  stats (state) {
    return {
      ...state,
      guesses: {
        ...state.guesses
      }
    };
  }
};
