<template>
  <div class="keyboard">
    <div class="keyboard-row">
      <game-keyboard-button button="Q" />
      <game-keyboard-button button="W" />
      <game-keyboard-button button="E" />
      <game-keyboard-button button="R" />
      <game-keyboard-button button="T" />
      <game-keyboard-button button="Y" />
      <game-keyboard-button button="U" />
      <game-keyboard-button button="I" />
      <game-keyboard-button button="O" />
      <game-keyboard-button button="P" />
    </div>
    <div class="keyboard-row">
      <div class="half" />
      <game-keyboard-button button="A" />
      <game-keyboard-button button="S" />
      <game-keyboard-button button="D" />
      <game-keyboard-button button="F" />
      <game-keyboard-button button="G" />
      <game-keyboard-button button="H" />
      <game-keyboard-button button="J" />
      <game-keyboard-button button="K" />
      <game-keyboard-button button="L" />
      <div class="half" />
    </div>
    <div class="keyboard-row">
      <game-keyboard-button button="Enter" />
      <game-keyboard-button button="Z" />
      <game-keyboard-button button="X" />
      <game-keyboard-button button="C" />
      <game-keyboard-button button="V" />
      <game-keyboard-button button="B" />
      <game-keyboard-button button="N" />
      <game-keyboard-button button="M" />
      <game-keyboard-button button="Backspace" />
    </div>
  </div>
</template>

<script>
import GameKeyboardButton from './GameKeyboardButton.vue';
export default {
  components: { GameKeyboardButton }
};
</script>

<style lang="scss" scoped>
.keyboard {
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
}

.keyboard-row {
  display: flex;
  margin: 0 0 8px;
}

.half {
  flex: 0.5;
}
</style>
