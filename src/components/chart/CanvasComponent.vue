<script>
export default {
    props: {
        eventData: {
            type: Array,
            required: true
        },
        canvasWidth: {
            type: Number,
            required: true,
        },
        canvasHeight: {
            type: Number,
            required: true,
        },
    },
    mounted() {
        this.drawLine();
    },
    methods: {
        drawLine() {
            const canvas = this.$refs.myCanvas;
            const ctx = canvas.getContext('2d');

            // Set line colors and widths
            const lineWidth = 40;

            // Calculate interval between labels based on canvas width and total labels
            const totalLabels = 10; // Assuming 10 labels from 09:00 to 18:00
            const interval = this.canvasWidth / totalLabels;

            // Define padding value
            const padding = 15; // Adjust as needed

            // Draw each event as a horizontal line
            ctx.lineWidth = lineWidth;
            this.eventData.forEach(event => {
                // Parse start time
                const startParts = event.start.split(":");
                const startHours = parseInt(startParts[0]);
                const startMinutes = parseInt(startParts[1]);

                // Parse end time
                const endParts = event.end.split(":");
                const endHours = parseInt(endParts[0]);
                const endMinutes = parseInt(endParts[1]);

                const startX = interval * (startHours - 9) + (interval / 60) * startMinutes; // Adjust start time to match label positions
                const endX = interval * (endHours - 9) + (interval / 60) * endMinutes; // Adjust end time to match label positions
                const yPos = event.yPos;
                ctx.strokeStyle = event.color;
                ctx.beginPath();
                ctx.moveTo(startX, yPos);
                ctx.lineTo(endX, yPos); // Draw horizontal line from start to end
                ctx.stroke();
            });

            // Add time labels
            ctx.fillStyle = 'black';
            ctx.font = '12px Times New Roman';
            ctx.textAlign = 'center';
            const timeLabels = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'];
            timeLabels.forEach((label, index) => {
                const xPos = padding + interval * index; // Adjust the spacing between labels dynamically and add padding
                ctx.fillText(label, xPos, 60); // Label position adjusted for horizontal lines
            });
        }
    }

};
</script>


<template>
    <div class="canvasChart">
        <canvas ref="myCanvas" :width="canvasWidth" :height="canvasHeight"></canvas>
    </div>
</template>

<style>
.canvasChart {
    width: 100%;
    height: 100%;
}

.canvasChart canvas {
    width: 95%;
    height: 100%;
}
</style>
