<template>
    <div class="container">
        <div class="bubbles">
            <span style="--i:11"></span>
            <span style="--i:12"></span>
            <span style="--i:24"></span>
            <span style="--i:10"></span>
            <span style="--i:14"></span>
            <span style="--i:23"></span>
            <span style="--i:18"></span>
            <span style="--i:16"></span>
            <span style="--i:19"></span>
            <span style="--i:20"></span>
            <span style="--i:22"></span>
            <span style="--i:25"></span>
            <span style="--i:18"></span>
            <span style="--i:21"></span>
            <span style="--i:15"></span>
            <span style="--i:13"></span>
            <span style="--i:26"></span>
            <span style="--i:17"></span>
            <span style="--i:13"></span>
            <span style="--i:28"></span>
            <span style="--i:11"></span>
            <span style="--i:12"></span>
            <span style="--i:24"></span>
            <span style="--i:10"></span>
            <span style="--i:14"></span>
            <span style="--i:23"></span>
            <span style="--i:18"></span>
            <span style="--i:16"></span>
            <span style="--i:19"></span>
            <span style="--i:20"></span>
            <span style="--i:22"></span>
            <span style="--i:25"></span>
            <span style="--i:18"></span>
            <span style="--i:21"></span>
            <span style="--i:15"></span>
            <span style="--i:13"></span>
            <span style="--i:26"></span>
            <span style="--i:17"></span>
            <span style="--i:13"></span>
            <span style="--i:28"></span>
        </div>
    </div>
</template>

<style scoped>
.container {
    height: 100vh;
    width: 100vw;
    position: fixed;
    background-color: #582FFF;
    background-color: #111;
    z-index: -1;
}

.bubbles {
    position: relative;
    display: flex;
    justify-content: center;
}

.bubbles span {
    position: relative;
    width: 30px;
    min-width: 30px;
    height: 30px;
    background-color: #EF6221;
    margin: 0 4px;
    border-radius: 50%;
    box-shadow: 0 0 0 10px #EF622144,
    0 0 50px #f5804a,
    0 0 100px #f39265;
    animation: animate 15s linear infinite;
    animation-duration: calc(125s / var(--i))
}

.bubbles span:nth-child(even){
    background: #D467E4;
    box-shadow: 0 0 0 10px #D467E444,
    0 0 50px #e094ec,
    0 0 100px #e09aea;

}

@keyframes animate {
    0%
    {
        transform: translateY(100vh) scale(0);
    }
    100%
    {
        transform: translateY(-10vh) scale(1);
    }
}

</style>