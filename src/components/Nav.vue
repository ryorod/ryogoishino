<template>
  <div>
    <a href="#" class="nav-button" @click="clickSmoothScroll('#app')">Top</a>
    <a href="#" class="nav-button" @click="clickSmoothScroll('#about')">About</a>
    <a href="#" class="nav-button" @click="clickSmoothScroll('#skill')">Skills</a>
    <a href="#" class="nav-button" @click="clickSmoothScroll('#work')">Works</a>
    <a href="#" class="nav-button" @click="clickSmoothScroll('#post')">Posts</a>
    <a href="#" class="nav-button" @click="clickSmoothScroll('#contact')">Contact</a>
  </div>
</template>


<script>
export default {
  methods: {
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

.nav-button{
  padding:10px;
  text-decoration: none;
  border-radius: 5px;
  margin-right:10px;
  margin-left: 10px;
  outline: none;
  color: whitesmoke;
}
</style>