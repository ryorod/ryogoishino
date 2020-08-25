<template>
    <div>
        <h1 class="content-title">Works</h1>
        
        <div class="works">
          <a href="https://medium.com/computational-creativity-lab-at-keio-sfc/cc-lab-20%E6%98%A5-the-dawn-of-x-magic-an-audiovisual-instrument-for-magical-performances-8bc7ae5b481e" target="_blank">
            <img class="works-img" src="../assets/work/x-magic.png" alt="">
          </a>
          <img class="works-img" src="../assets/work/crossfader.png" alt="">
          <img class="works-img" src="../assets/work/lyrics-generator.png" alt="">
          <a href="http://web.sfc.keio.ac.jp/~t18063ri/info2/final/DRUM_PAD_Mk3_3x3.html" target="_blank">
            <img class="works-img" src="../assets/work/drum-pad.png" alt="">
          </a>
          <img class="works-img" src="../assets/work/somnio.png" alt="">
          <img class="works-img" src="../assets/work/portfolio.png" alt="">
        </div>
    </div>
</template>




<style>
.works{
  padding-left: 12%;
}

.works-img{
  margin-right: 10px;
  margin-bottom: 10px;
  width: 500px;
  height: 300px;
}



@media screen and (max-width: 768px){
  .works{
      padding-left: 0;
      padding-right: 0;
      display: block;
  }

  .works-img{
      margin-right: 0;
      margin-bottom: 10px;
      width: 100%;
      height: auto;
  }

}

</style>