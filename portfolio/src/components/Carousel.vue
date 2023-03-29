<template>
    <v-carousel hide-delimiters class="my-14">
        <v-carousel-item src="./src/assets/game-developed-0.gif" cover class="project">
            <div class="description">
                <h4 class="mb-4">Aframe VR</h4>
                <p> It is a simulator where you can view some room with different interactions (additional experience wearing headset VR). You can view more <a
                        href="https://github.com/Bernardolgm99/a-frame_experimental">HERE</a> in my GitHub.</p>
            </div>
        </v-carousel-item>

        <v-carousel-item src="./src/assets/game-developed-1.gif" cover class="project">
            <div class="description">
                <h4 class="mb-4">EcoPlus Game</h4>
                <p>This was a game created with the propose to enjoy and teach kids for the importance of recly and how is
                    supose to do this. You can view more <a
                        href="https://github.com/Bernardolgm99/game-interactive-canvas">HERE</a> in my GitHub.</p>
            </div>
        </v-carousel-item>

        <v-carousel-item src="./src/assets/game-developed-2.gif" cover class="project">
            <div class="description">
                <h4 class="mb-4">Animation Game threejs</h4>
                <p>A project did for practice and improve my and my group habilities with technology THREEJS. In this minigame you will
                    be able to play with Kirby and eat some trashes droped from trees. You can view more <a
                        href="https://github.com/NarizConstipado/animation_game-threejs">HERE</a> in my friend GitHub.</p>
            </div>
        </v-carousel-item>
    </v-carousel>
</template>

<style scoped>
.v-carousel {
    max-width: 1500px !important;
    width: 100vw !important;
    height: 700px !important;
}

.project {
    position: relative;
}

.description {
    width: 100%;
    position: absolute;
    background-color: #000a;
    color: #fff;
    bottom: 0;
    padding: 50px 60px;
}

.description h4 {
    font-size: 30px;
}

.description p {
    font-size: 20px;
}

.description a {
    color: rgb(250, 113, 39);
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