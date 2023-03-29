<template>
    <nav id="menu" v-if="scrollPosition >= sections[0]">
        <v-container class="d-flex flex-column justify-center align-end">
            <span class="my-10"
                :class="{ active: (sections[0] <= scrollPosition + 100 && sections[1] > scrollPosition + 100 ? true : false) }"
                @click="goScroll(0)">
                who am I?
            </span>
            <span class="my-10"
                :class="{ active: (sections[1] <= scrollPosition + 100 && sections[2] > scrollPosition + 100 ? true : false) }"
                @click="goScroll(1)">
                some projects
            </span>
            <span class="my-10"
                :class="{ active: (sections[2] <= scrollPosition + 100 && sections[3] > scrollPosition + 100 ? true : false) }"
                @click="goScroll(2)">
                my hobbies
            </span>
        </v-container>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            scrollPosition: null,
            sections: []
        }
    },

    beforeCreate() {
    },

    mounted() {
        window.addEventListener('scroll', this.updateScroll);
        document.querySelectorAll('.section').forEach((section, i) => { this.sections[i] = section.offsetTop });
    },


    methods: {
        updateScroll() {
            this.scrollPosition = window.scrollY;
            document.querySelectorAll('.section').forEach((section, i) => { this.sections[i] = section.offsetTop });
            //try a watcher to see if the page height has changed
        },
        goScroll(i) {
            scrollTo(0, this.sections[i])
        }
    }

}
</script>

<style scoped>
nav {
    position: fixed;
    height: 100vh;
    width: 0px;
    display: flex;
    top: 0%;
    right: 0%;
    z-index: 1;
    animation-name: fadeIn;
    animation-duration: 1s;
}

span {
    position: absolute;
    white-space: nowrap;
    right: 15px;
    padding: 10px 15px;
    background-color: #000A;
    font-size: 24px;
    font-weight: 300;
    color: #fff7;
    position: relative;
    cursor: pointer;
    -webkit-user-select: none;
    /* Safari */
    -ms-user-select: none;
    /* IE 10 and IE 11 */
    user-select: none;
    /* Standard syntax */
}


.active {
    color: #fff;
}

.active::before {
    content: "•";
    padding: 10px 16px;
    background-color: #000A;
    position: absolute;
    text-align: center;
    top: 0px;
    left: -40px;
}

.active::after {
    content: "■";
    position: absolute;
    animation-name: active;
    animation-iteration-count: infinite;
    animation-duration: 1s;
    text-align: center;
    top: 8px;
    left: -25px;
}

@keyframes active {
    0% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.3);
    }

    100% {
        transform: scale(1);
    }
    /* 0% {
        opacity: 1;
    }

    50% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    } */
}

@keyframes fadeIn {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}</style>