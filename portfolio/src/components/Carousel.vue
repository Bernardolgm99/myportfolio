<template>
    <v-carousel cycle hide-delimiters :show-arrows="false" class="my-14">
        <v-carousel-item src="./src/assets/game-developed-0.gif" cover></v-carousel-item>

        <v-carousel-item src="./src/assets/game-developed-1.gif" cover></v-carousel-item>

        <v-carousel-item src="./src/assets/game-developed-2.gif" cover></v-carousel-item>
    </v-carousel>
</template>

<style scoped>
.v-carousel {
    max-width: 1500px !important;
    width: 100vw !important;
    height: 700px !important;
}

</style>
<script>
export default {
    data() {
        return {
            colors: [
                'indigo',
                'warning',
                'pink darken-2',
                'red lighten-1',
                'deep-purple accent-4',
            ],
            slides: [
                'First',
                'Second',
                'Third',
                'Fourth',
                'Fifth',
            ],
        }
    },
}
</script>