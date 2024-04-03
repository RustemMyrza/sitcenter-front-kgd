<template>
  <div class="container">
    <div class="zoom-container" :style="{ transform: `scale(${zoom})` }">
      <!-- Content that you want to zoom -->
      <div class="content-to-zoom">
        <!-- Content to be zoomed -->
        <img src="../assets/avatar.png" alt="Your Image">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      zoom: 1, // Initial zoom level
    };
  },
  methods: {
    // Function to increase the zoom level
    zoomIn() {
      this.zoom += 0.1;
    },
    // Function to decrease the zoom level
    zoomOut() {
      if (this.zoom > 0.2) { // Limit zoom-out to prevent negative scaling
        this.zoom -= 0.1;
      }
    },
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.zoom-container {
  overflow: hidden;
}

.content-to-zoom {
  transition: transform 0.5s ease;
}
</style>
