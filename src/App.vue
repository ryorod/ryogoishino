<template>
  <div id="app">
    <Header id="header"></Header>
    <div class="res"><h1 class="res-title">Ryogo Ishino</h1></div>
    <div class="nav-res">
        <a href="#" class="link-content" @click="clickSmoothScroll('#app')">
          
          <p class="comment">Top</p>
        </a>
        <a href="#" class="link-content" @click="clickSmoothScroll('#about')">
          
          <p class="comment">About</p>
        </a>
        <a href="#" class="link-content" @click="clickSmoothScroll('#skill')">
          
          <p class="comment">Skills</p>
        </a>
        <a href="#" class="link-content" @click="clickSmoothScroll('#work')">
          
          <p class="comment">Works</p>
        </a>
        <a href="#" class="link-content" @click="clickSmoothScroll('#post')">
          
          <p class="comment">Posts</p>
        </a>
        <a href="#" class="link-content" @click="clickSmoothScroll('#contact')">
          
          <p class="comment">Contact</p>
        </a>
    </div>

    <div id="top">
      <div id="main">
      <vue-typer :text="['Welcome. \r\n\r\nMAJOR UPGRADE \r\nCOMING SOON']" class="top-text" :repeat='0'
      :preTypeDelay="1000" :typeDelay="120" :preEraseDelay="5000" :eraseDelay="2000"></vue-typer>
    </div>
    
    </div>
    
    <About id="about"></About>
    <Skill id="skill"></Skill>
    <Work id="work"></Work>
    <Post id="post"></Post>
    <Contact id="contact"></Contact>

    <Footer></Footer>
  </div>
</template>



<script>

import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import About from './components/About.vue'
import Skill from './components/Skill.vue'
import Work from './components/Work.vue'
import Post from './components/Post.vue'
import Contact from './components/Contact.vue'



import 'normalize.css'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    About,
    Skill,
    Work,
    Post,
    Contact
  },
  methods:{
    clickSmoothScroll (x) {
      event.preventDefault()
      this.$SmoothScroll(
        document.querySelector(x),
        800,
        null,
        null,
        'y'
      )
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Oxygen&family=Raleway&display=swap');


#app{
  font-family:'Raleway', 'Oxygen', Helvetica, sans-serif;
  color: whitesmoke;
  background-color: #00070e;
}

#top{
  position: relative;
  background-color: #00070e;
  background-size: cover;
  height: 100vh;
}

#main{
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
}

.res{
  display: none;
  background-color: #00070e;
}

.res-title{
  background-color:#00070e;
  padding: 10px;
  margin: 0;
  color: whitesmoke;
}

.vue-typer .custom.char{
  color: aliceblue;
}



.nav-res{
  display: none;
}

.comment{
  margin:5px 0;
  font-weight: 500;
  color: whitesmoke;
}

.link-content{
  color: whitesmoke;
  text-decoration: none;
  min-width: 8%;
  font-size: 10px;
  text-align: center;
}


.top-text{
  color: whitesmoke;
  font-size: 70px;
  white-space: pre;
}




.text{
    font-weight: 500;
}

.content-title {
  padding: 120px 0 3px 0;
  margin: 50px 20% 10px 10%;
  position: relative;
  font-size: 2em;
  text-decoration: underline;
  text-decoration-color: rgba(192,192,192,0.3);
}

@media screen and (max-width: 1200px) {
  .top-text{
    font-size: 50px;
  }
}

@media screen and (max-width: 768px){
  .top-text{
    font-size: 35px;
  }
  #header{
    display: none;
  }

  .res{
    display: contents;
    background-color: #00070e;
  }


  .nav-res{
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  z-index: 1;
  background-color: #00070e;
  padding: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  }

}


@media screen and (max-width: 450px) {
  .top-text{
    font-size: 15px;
  }
}




</style>
