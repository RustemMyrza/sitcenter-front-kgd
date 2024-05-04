<template>
  <div class="canvas mx-5">
    <CanvasComponent :canvasWidth="1000" :canvasHeight="100" :eventData="eventData"/>
  </div>
</template>

<script>

import CanvasComponent from '@/components/chart/CanvasComponent.vue';

export default {
  components: { CanvasComponent },
  data() {
    return {
      eventData: [
        { start: "9:00", end: "12:34", yPos: 20, color: "red" },   // Event 1: Starts at 09:00 and ends at 12:00, yPos is the y-position of the line
        // Event 3: Starts at 12:00 and ends at 17:00, yPos is the y-position of the line
      ]
    }
  }

  // Set line colors and widths



  // Draw each event as a horizontal line

};
</script>

