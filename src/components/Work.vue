<template>
    <div>
        <h1 class="content-title">Works</h1>
        
        <div class="works">
          <a href="https://medium.com/computational-creativity-lab-at-keio-sfc/cc-lab-20%E6%98%A5-the-dawn-of-x-magic-an-audiovisual-instrument-for-magical-performances-8bc7ae5b481e" target="_blank">
            <div class="works-img">
              <img src="../assets/work/x-magic.png" alt="" width="100%" height="100%">
              <div class="mask">
                <div class="caption">x-magic 2020 spring</div>
              </div>
            </div>
          </a>
          <a href="https://github.com/ryorod/closest-image-crossfader" target="_blank">
            <div class="works-img">
              <img src="../assets/work/crossfader.png" alt="" width="100%" height="100%">
              <div class="mask">
                <div class="caption">Closest Image Crossfader</div>
              </div>
            </div>
          </a>
          <a href="https://github.com/ryorod/lyrics-generator" target="_blank">
            <div class="works-img">
              <img src="../assets/work/lyrics-generator.png" alt="" width="100%" height="100%">
              <div class="mask">
                <div class="caption">Lyrics Generator</div>
              </div>
            </div>
          </a>
          <a href="http://web.sfc.keio.ac.jp/~t18063ri/info2/final/DRUM_PAD_Mk3_3x3.html" target="_blank">
            <div class="works-img">
              <img src="../assets/work/drum-pad.png" alt="" width="100%" height="100%">
              <div class="mask">
                <div class="caption">DRUM PAD Mk3 3x3</div>
              </div>
            </div>
          </a>
          <a href="https://www.dropbox.com/s/02yapu4rozh932t/DEMO_MOVIE.mp4?dl=0" target="_blank">
            <div class="works-img">
              <img src="../assets/work/somnio.png" alt="" width="100%" height="100%">
              <div class="mask">
                <div class="caption">SOMNIO</div>
              </div>
            </div>
          </a>
          <a href="https://ryogoishino.netlify.app/">
            <div class="works-img">
              <img src="../assets/work/portfolio.png" alt="" width="100%" height="100%">
              <div class="mask">
                <div class="caption">This Portfolio</div>
              </div>
            </div>
          </a>
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
  overflow: hidden;
  position: relative;
  display: inline-block;
}

.caption{
  font-size: 150%;
  text-align: center;
  padding-top: 130px;
  color: whitesmoke;
}

.mask{
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  background-color: rgba(0,0,0,0.7);
  transition: all 0.3s ease;
}

.works-img:hover .mask{
  opacity: 1;
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
      overflow: hidden;
      position: relative;
  }

}

</style>