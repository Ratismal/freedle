<template>
  <div class="toast-wrapper">
    <template v-if="game.currentRow >= 6">
      <GameToast
        :time="0"
        :text="game.word.toUpperCase()"
        :duration="-1"
      />
    </template>
    <GameToast
      v-for="toast in toaster"
      :key="toast.time"
      :time="toast.time"
      :text="toast.text"
      :duration="toast.duration"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import GameToast from './GameToast.vue';

export default {
  components: {
    GameToast
  },
  computed: {
    ...mapGetters({
      toaster: 'game/getToast',
      game: 'game/getCurrentGame'
    })
  }
};
</script>

<style scoped>
.toast-wrapper {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  align-items: center;
  top: 70px;
  left: 0;
  right: 0;
  gap: 10px;
}
</style>
