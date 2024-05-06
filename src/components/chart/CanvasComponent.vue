<script setup>
import { ref, onMounted, watch, defineProps, getCurrentInstance } from 'vue';

// Define props
const props = defineProps({
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
});

const canvas = ref(null);

const drawLine = () => {
    console.log("Drawing")
    const ctx = canvas.value.getContext('2d');
    const lineWidth = 10;
    const totalLabels = 10;
    const interval = props.canvasWidth / totalLabels;
    const padding = 15;

    ctx.clearRect(0, 0, canvas.value.width, canvas.value.height);

    ctx.lineWidth = lineWidth;
    props.eventData.forEach(event => {
        const startParts = event.start.split(":");
        const startHours = parseInt(startParts[0]);
        const startMinutes = parseInt(startParts[1]);

        const endParts = event.end.split(":");
        const endHours = parseInt(endParts[0]);
        const endMinutes = parseInt(endParts[1]);

        const startX = interval * (startHours - 9) + (interval / 60) * startMinutes;
        const endX = interval * (endHours - 9) + (interval / 60) * endMinutes;
        const yPos = event.yPos;

        ctx.strokeStyle = event.color;
        ctx.beginPath();
        ctx.moveTo(startX, yPos);
        ctx.lineTo(endX, yPos);
        ctx.stroke();
    });

    ctx.fillStyle = 'black';
    ctx.font = '12px Times New Roman';
    ctx.textAlign = 'center';
    const timeLabels = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'];
    timeLabels.forEach((label, index) => {
        const xPos = padding + interval * index;
        ctx.fillText(label, xPos, 60);
    });
}

onMounted(() => {
    // console.log("mount")
    if (canvas.value) {
        // console.log(canvas.value)
        drawLine();
    }
});

watch(() => props.eventData, () => {
    if (canvas.value) {
        const instance = getCurrentInstance();
        drawLine();
        instance.proxy.$forceUpdate();
    }
});
</script>

<template>
    <div class="canvasChart ">
        <canvas ref="canvas" id="cnv" class="mx-auto" :width="props.canvasWidth" :height="props.canvasHeight"></canvas>
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
