<script setup>
import NavBar from '../components/NavBar.vue'
import Carousel from '../components/Carousel.vue'
import Background from '../components/Background.vue'
</script>

<template>
  <Background />
  <header id="header">
    <v-container class="d-flex flex-column align-center">
      <span>‘’</span>
      <h1>If you don’t take risks, you can’t create a future.</h1>
      <a href="#section1" class="material-symbols-outlined icon-size"> expand_more </a>
    </v-container>
  </header>
  <NavBar />
  <section id="section1" class="bg-white section">
    <div class="py-0">
      <v-row class="my-0">
        <v-col>
          <div class="text-who-am-i d-flex flex-column align-center mx-auto px-3">
            <h2 class="mt-12">
              Who am I?
            </h2>
            <p class="mt-9"><span>Hi, I’m Bernardo</span> a brazilian student of programming and designing for web.</p>
            <p class="my-5">I started my knowledge at programming in “The Federal Center for Technological Education”, in
              portuguese “O
              Centro Federal de Educacao Tecnologica”, a famous institute on Rio de Janeiro (CEFET-RJ) from 2015 to 2019.
              After it, I had the opportunity to moved to Portugal, and I had to leave my mother’s house to start living
              with my uncles. In the beginning I knew it’s gone be hard, but it was good to me take that risk. About 1
              year after, I joined IPP - ESMAD where I study until today. The name of my course is “Web Information
              Systems and Technologies”, in portuguese “Tecnologia de Sistemas de Informacao para a Web”, occasionally is
              difficult to remember, so is always easier to call “TSIW”!</p>
            <h3 class="my-5">Spending my time</h3>
            <p class="mb-5">I like to spend my time learning more about programming, and sometimes I like to take a break
              to play one
              of my favorite games , Overwatch, where I can mitigate my competitive spirit, or just go play a Indie game.
              I have another hobby who is photograph. I really love to do it. I don’t know, if I’m good on it, but you can
              check some of my photos <a href="#my-photos">HERE</a>.</p>
            <p class="mb-5">Another thing I like to do, is spend my time with my family and friends, is always good stay
              with them and
              take a rest of the world... and they often have some good story to tell me.</p>
            <hr class="my-6">
            <p class="my-5"><span>Do you have a good story?</span> If you have one, please, could you tell me? I would
              like to read.</p>
            <textarea class="mb-10 input-history" :class="{ activedTextArea: inputActive }" @click="inputActive = true"
              placeholder="Insert you story here..."></textarea>
            <button class="mb-10 btn" v-if="inputActive">Send</button>
          </div>
        </v-col>
        <v-col class="my-image">
        </v-col>
      </v-row>
    </div>
  </section>
  <section id="section2" class="section">
    <div class="d-flex flex-column align-center py-14">
      <h2 class="my-14">Projects I did</h2>
      <div class="d-flex justify-center flex-wrap pt-14">
        <div class="div-main-rotate-images">
          <div class="div-rotate-images">
            <div class="pivot-images">
              <span class="face-image">
                <div>
                  <h4>KOWD</h4>
                  <p>A website created to teach javascript with a interectve method using Gamification. Take a look <a
                          href="https://github.com/Bernardolgm99/kowd">HERE</a> on my GitHub.</p>
                </div>
                <img src="../assets/project0.png">
              </span>
              <span class="face-image2">
                <div>
                  <h4>ECOPLUS<br>LANDINGPAGE</h4>
                  <p>A design and developement of a landingpage for a EcoEscolas project website. Take a look <a
                          href="https://github.com/Bernardolgm99/ecoplus">HERE</a> on my GitHub.</p>
                </div>
                <img src="../assets/project1.png">
              </span>
            </div>
          </div>
          <div class="mt-16 div-rotate-images">
            <div class="mt-16 pivot-images">
              <span class="face-image">
                <div>
                  <h4>ECOPLUS<br>SOCIAL MEDIA</h4>
                  <p>Social media created for group EcoEscolas with the propose to attract students for activities made for EcoEscolas and some more. Take a look <a
                          href="https://github.com/Bernardolgm99/ecoplus">HERE</a> on my GitHub.</p>
                </div>
                <img src="../assets/project2.png">
              </span>
              <span class="face-image2">
                <div>
                  <h4>MANGER.PT</h4>
                  <p>My first professional job, made for a professional chef. Take a look <a
                          href="manger.pt">HERE</a> on manger.pt.</p>
                </div>
                <img src="../assets/project3.png">
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="my-14">
        <Carousel />
      </div>
    </div>
  </section>
  <section id="section3" class="d-flex flex-column align-center section">
    <h2 class="my-16">My hobbies</h2>
    <h3 class="mb-12">MY FAVORITE PHOTOS</h3>
    <div class="my-photos w-100">
      <div style="background-image: url('./src/assets/photo2.png');"></div>
      <div style="background-image: url('./src/assets/photo0.JPG');"></div>
      <div style="background-image: url('./src/assets/photo1.png');"></div>
      <div style="background-image: url('./src/assets/photo7.jpeg');"></div>
      <div style="background-image: url('./src/assets/photo5.png');"></div>
      <div style="background-image: url('./src/assets/photo3.png');"></div>
      <div style="background-image: url('./src/assets/photo4.png');"></div>
      <div style="background-image: url('./src/assets/photo6.png');"></div>
    </div>
    <h3 class="mt-16">MY FAVORITE GAMES</h3>
    <div class="my-games my-12">
      <div class="number3" style="background-image: url('./src/assets/game3.png');"></div>
      <div class="number2" style="background-image: url('./src/assets/game2.jpg');"></div>
      <div class="number1" style="background-image: url('./src/assets/game1.webp');"></div>
    </div>
  </section>
  <section class="bg-black section">
    <div class="final-text d-flex align-center justify-center"><span class="big">AND THIS IS ME</span></div>
    <div class="final-text d-flex align-center justify-center"><span class="mid">THANK YOU TO VISIT MY WEBSITE</span>
    </div>
    <div class="final-text d-flex align-center justify-center"><span class="big">I HOPE THAT YOU ENJOYED</span></div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      inputActive: false
    }
  },
}
</script>

<style scopped>
header {
  position: relative;
  height: 100vh;
}

header h1 {
  margin-top: 220px;
}

header span {
  position: absolute;
  font-family: 'Bigilla', sans-serif;
  font-size: 328px;
  color: #fff;
}

header .icon-size {
  font-size: 100px;
  color: #fff;
  position: relative;
  animation-name: sinalize;
  animation-iteration-count: infinite;
  animation-duration: 1s;
}

header a {
  text-decoration: none;
}

@keyframes sinalize {
  0% {
    top: 0px;
  }

  50% {
    top: 10px;
  }

  100% {
    top: 0px;
  }
}

.material-symbols-outlined {
  font-variation-settings:
    'FILL' 0,
    'wght' 500,
    'GRAD' 0,
    'opsz' 1
}


.text-who-am-i {
  max-width: 600px;
}

.text-who-am-i h2 {
  color: #000;
}

.text-who-am-i p {
  font-size: 24px;
  font-weight: 200;
  text-align: justify;
  text-justify: inter-word;
}

.text-who-am-i span {
  font-weight: 500;
}

.text-who-am-i h3 {
  align-self: start;
  color: #000;
}

.text-who-am-i a {
  color: #582FFF;
  font-weight: 400;
}

.my-image {
  background-image: url('./src/assets/me.jpg');
  background-position: left center;
  background-size: cover;
}

textarea {
  padding: 5px 10px 5px 10px;
  width: 100%;
  height: 36px;
  border-radius: 8px;
  resize: none !important;
}

.activedTextArea {
  border-style: solid !important;
  border: 1px solid #582FFF;
  animation-name: expandInput;
  animation-duration: 1s;
  height: 200px;
}

@keyframes expandInput {
  0% {
    height: 36px;
  }

  100% {
    height: 200px;
  }
}

textarea:focus {
  outline: none !important;
}

.div-main-rotate-images {
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.div-rotate-images {
  width: 740px;
}

.pivot-images {
  width: 0px;
  margin: auto;
  position: relative;
  height: 1420px;
  transform-style: preserve-3d;
  animation: animate 15s linear infinite;
}

.face-image p, .face-image2 p{
  color: #fff;
  font-size: 20px;
  font-weight: 200;
}

.face-image h4, .face-image2 h4{  
  font-size: 30px;
  margin-bottom: 20px;
  font-family: 'Fraunces', serif;
  font-weight: 300;
}

.face-image div, .face-image2 div{
  background-color: #000a;
  padding: 40px 140px 0 60px;
  height: 350px;
}

.face-image a, .face-image2 a {
  color: rgb(250, 113, 39);
}

.face-image {
  position: absolute;
  transform-origin: center;
  transform-style: preserve-3d;
  translate: -270px 0 270px;
}

.face-image2 {
  position: absolute;
  transform-origin: center;
  transform-style: preserve-3d;
  transform: rotateY(90deg);
  margin-right: -540px;
}



@keyframes animate {
  0% {
    transform: rotateY(0deg);
  }

  5% {
    transform: rotateY(-45deg) scaleX(.8) scaleZ(.9);
  }

  10% {
    transform: rotateY(-90deg);
  }

  50% {
    transform: rotateY(-90deg);
  }

  55% {
    transform: rotateY(-45deg) scaleX(.9) scaleZ(.8);
  }

  60% {
    transform: rotateY(0deg);
  }

  100% {
    transform: rotateY(0deg);
  }
}

.my-photos {
  display: flex;
  flex-wrap: wrap;
}

.my-photos div {
  height: 400px;
  flex: 1 1 400px;
  min-width: 100px;
  background-position: center;
  background-size: cover;
}

.my-games div {
  height: 300px;
  width: 300px;
  position: relative;
  background-size: cover;
}

.my-games div::before {
  font-size: 128px;
  position: absolute;
  top: 40px;
  left: -150px;
  color: white;
}

.my-games .number1::before {
  content: "1";
}

.my-games .number2::before {
  content: "2";
}

.my-games .number3::before {
  content: "3";
}

.final-text {
  height: 50vw;
  text-align: center;
  ;
}

.final-text .big {
  font-size: 96px;
}

.final-text .mid {
  font-size: 64px;
}</style>
