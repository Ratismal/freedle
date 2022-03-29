import words from '@/assets/words.json';
import dumbWords from '@/assets/dumb-words.json';

function getBlankRows () {
  const rows = [];
  for (let i = 0; i < 6; i++) {
    rows.push([]);
    for (let j = 0; j < 5; j++) {
      rows[i].push({
        guess: '',
        score: ''
      });
    }
  }
  return rows;
}

function getFreshGame (word = '') {
  return {
    rows: getBlankRows(),
    currentRow: 0,
    word,
    date: Date.now()
  };
}

export const state = () => ({
  wordle: getFreshGame(),
  hash: getFreshGame(),
  gameMode: 'wordle',
  toast: []
});

export const actions = {
  setGameMode ({ commit }, mode) {
    commit('setGameMode', mode);
  },
  setWord ({ commit }, word) {
    commit('setWord', word);
  },
  enterLetter ({ commit, state, getters }, letter) {
    if (getters.gameOver) {
      return;
    }
    const game = getters.getCurrentGame;
    const row = game.rows[game.currentRow];
    for (let i = 0; i < 5; i++) {
      const tile = row[i];
      if (tile.guess === '') {
        return commit('setTile', {
          row: game.currentRow,
          column: i,
          guess: letter
        });
      }
    }
  },
  deleteLetter ({ commit, state, getters }) {
    if (getters.gameOver) {
      return;
    }
    const game = getters.getCurrentGame;
    const row = game.rows[game.currentRow];
    for (let i = 1; i < 6; i++) {
      const tile = row[i];
      if (i === 5 || tile.guess === '') {
        return commit('setTile', {
          column: i - 1,
          guess: ''
        });
      }
    }
  },
  performGuess ({ commit, state, getters, rootState }) {
    if (getters.gameOver) {
      return;
    }
    const game = getters.getCurrentGame;
    const letters = game.rows[game.currentRow].map(t => t.guess);
    const word = letters.join('');
    if (words.includes(word) || dumbWords.includes(word)) {
      const cLetters = game.word.split('');
      if (rootState.settings.settings.hardMode) {
        for (let i = 0; i < game.currentRow; i++) {
          const c = [...letters];
          for (let j = 0; j < 5; j++) {
            let letter = null;
            const guess = game.rows[i][j];
            if (guess.score === 'correct') {
              if (c[j] === guess.guess) {
                c[j] = '';
              } else {
                const types = ['st', 'nd', 'rd', 'th', 'th'];
                letter = (j + 1) + types[j] + ' letter must be ' + guess.guess.toUpperCase();
              }
            } else if (guess.score === 'present') {
              if (c.includes(guess.guess)) {
                let index = 0;
                while (true) {
                  index = c.indexOf(guess.guess, index);
                  if (c[index] === game.rows[i][index].guess) {
                    index++;
                    continue;
                  } else {
                    c[index] = '';
                    break;
                  }
                }
              } else {
                letter = 'Guess must contain ' + guess.guess.toUpperCase();
              }
            }

            if (letter) {
              commit('addToast', {
                text: letter
              });
              return;
            }
          }
        }
      }
      const gradedPositions = [false, false, false, false, false];
      for (let i = 0; i < 5; i++) {
        if (letters[i] === cLetters[i]) {
          cLetters[i] = '';
          commit('setTileScore', { column: i, score: 'correct' });
          gradedPositions[i] = true;
        }
      }
      for (let i = 0; i < 5; i++) {
        if (!gradedPositions[i]) {
          if (cLetters.includes(letters[i])) {
            cLetters[cLetters.indexOf(letters[i])] = '';
            commit('setTileScore', { column: i, score: 'present' });
            gradedPositions[i] = true;
          } else {
            commit('setTileScore', { column: i, score: 'absent' });
          }
        }
      }
      commit('increaseRow');
    } else {
      commit('addToast', {
        text: 'Not in word list.'
      });
    }
  },
  reset ({ commit }) {
    commit('reset');
  },
  addToast ({ commit }, toast) {
    commit('addToast', toast);
  },
  removeToast ({ commit }, key) {
    commit('removeToast', key);
  }
};

export const mutations = {
  setWord (state, { word, day }) {
    const game = state[state.gameMode];
    if (word !== game.word) {
      game.rows = getBlankRows();
      game.word = word;
      game.currentRow = 0;
      game.day = day;
    }
  },
  setTile (state, { column, guess }) {
    const game = state[state.gameMode];
    game.rows[game.currentRow][column] = {
      guess,
      score: ''
    };

    game.rows = JSON.parse(JSON.stringify(game.rows));
  },
  setTileScore (state, { column, score }) {
    const game = state[state.gameMode];
    game.rows[game.currentRow][column].score = score;

    game.rows = JSON.parse(JSON.stringify(game.rows));
  },
  increaseRow (state) {
    state[state.gameMode].currentRow++;
  },
  reset (state) {
    const oldGame = state[state.gameMode];
    state[state.gameMode] = getFreshGame();
    state[state.gameMode].word = oldGame.word;
    state[state.gameMode].day = oldGame.day;
  },
  addToast (state, toast) {
    state.toast.push({
      text: toast.text,
      duration: toast.duration || 1000,
      time: Date.now()
    });
  },
  removeToast (state, key) {
    state.toast = state.toast.filter(t => t.time !== key);
  }
};

export const getters = {
  getTileByPosition (state, getters) {
    return (row, column) => {
      return getters.getCurrentGame.rows[row][column];
    };
  },
  getCurrentRow (state, getters) {
    return getters.getCurrentGame.currentRow;
  },
  getCurrentGame (state) {
    return state[state.gameMode];
  },
  gameMode (state) {
    return state.gameMode;
  },
  gameWon (state, getters) {
    const game = getters.getCurrentGame;
    if (game.currentRow !== 0) {
      return game.rows[game.currentRow - 1].every(row => row.score === 'correct');
    }

    return false;
  },
  gameOver (state, getters) {
    const game = getters.getCurrentGame;
    if (game.currentRow > 0 && getters.gameWon) {
      return true;
    } else if (game.currentRow >= 6) {
      return true;
    }

    return false;
  },
  getToast (state) {
    return state.toast;
  }
};
