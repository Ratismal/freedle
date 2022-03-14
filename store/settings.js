export const state = () => ({
  settings: {
    megathrob: false,
    lightTheme: false,
    presentColor: 'yellow',
    correctColor: 'green',
    hardMode: false,
    golf: false,
    niceCock: false,
    mentionFreedle: true,
    invertResultsTheme: false,
    flipStyle: 'default'
  },
  firstTime: true
});

export const actions = {
  save ({ commit }, config) {
    commit('save', config);
  },
  setFirstTime ({ commit }) {
    commit('setFirstTime');
  }
};

export const mutations = {
  save (state, config) {
    state.settings = {
      ...config
    };
  },
  setFirstTime (state) {
    state.firstTime = false;
  }
};

export const getters = {
  settings (state) {
    return {
      ...state.settings
    };
  }
};
