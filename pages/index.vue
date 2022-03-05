<template>
  <div>
    <AppHeader />
    <game-toaster />
    <game-app />
    <game-settings />
    <game-manager />
    <game-info />
    <game-keyboard />
    <game-stats />
  </div>
</template>

<script>
import '@/assets/variables.scss';
import '@/assets/main.scss';

import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

import GameApp from '../components/GameApp.vue';
import AppHeader from '../components/AppHeader.vue';
import GameSettings from '../components/GameSettings.vue';
import GameManager from '../components/GameManager.vue';
import GameToaster from '../components/GameToaster.vue';
import GameInfo from '../components/GameInfo.vue';
import GameKeyboard from '../components/GameKeyboard.vue';
import GameStats from '../components/GameStats.vue';

dayjs.extend(duration);

export default {
  name: 'IndexPage',
  components: { GameApp, AppHeader, GameSettings, GameManager, GameToaster, GameInfo, GameKeyboard, GameStats }
};
</script>
,
    GameKeyboard
