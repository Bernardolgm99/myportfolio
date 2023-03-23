<template>
    <nav id="menu">
        <v-container class="d-flex flex-column justify-center align-end">
            <span class="py-10">
                hom I am
            </span>
            <span class="py-10">
                some projects
            </span>
            <span class="py-10">
                my hobbies
            </span>
        </v-container>
    </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
nav {
/*     background-color: #d9d9d9;   */
/*     width: 100vw; */
position: fixed;
height: 100vh;
display: flex;
top: 0%;
right: 0%;
z-index: 1;
}

span {
    font-size: 24px;
    font-weight: 300;
    color: #fff ;
}
</style>