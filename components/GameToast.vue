<template>
  <div :class="['toast', state]">
    {{ text }}
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: {
    text: {
      type: String,
      default: ''
    },
    duration: {
      type: Number,
      default: 1000
    },
    time: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      state: 'idle'
    };
  },
  mounted () {
    if (this.duration > 0) {
      setTimeout(() => {
        this.state = 'disappear';
        setTimeout(() => {
          this.removeToast(this.time);
        }, 500);
      }, this.duration);
    }
  },
  methods: {
    ...mapActions({
      removeToast: 'game/removeToast'
    })
  }
};
</script>

<style scoped>

.toast {
  flex: 0 0 auto;
  width: auto;
  padding: 15px;
  border-radius: 5px;
  font-size: 1.1em;
  background: var(--color-text);
  color: var(--color-background);
}

.toast.disappear {
  animation: disappear 500ms forwards;
}

@keyframes disappear {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}
</style>
