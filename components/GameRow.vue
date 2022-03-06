<template>
  <div class="game-row">
    <game-tile :row="row" :column="0" />
    <game-tile :row="row" :column="1" />
    <game-tile :row="row" :column="2" />
    <game-tile :row="row" :column="3" />
    <game-tile :row="row" :column="4" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import GameTile from './GameTile.vue';

export default {
  components: { GameTile },
  props: {
    enabled: {
      type: Boolean,
      default: false
    },
    row: {
      type: Number,
      default: 0
    }
  },
  computed: {
    ...mapGetters({
      currentRow: 'game/getCurrentRow'
    }),
    current () {
      return this.row === this.currentRow;
    }
  }
};
</script>

<style scoped>
.game-row {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 5px;
  margin-bottom: 5px;
}
</style>
