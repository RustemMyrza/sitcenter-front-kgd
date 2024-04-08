<!-- MyComponent.vue -->
<template>
  <div>
    <div>{{ message }}</div>
    <button @click="updateMessage">Update Message</button>
    <button @click="destroyAndRerender">Destroy and Rerender</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Initial message'
    };
  },
  methods: {
    updateMessage() {
      this.message = 'New message';
    },
    destroyAndRerender() {
      // Destroy component and rerender
      this.$destroy();
      this.$options.template = '<div>New component content</div>';
      this.$mount();
    }
  }
};
</script>
