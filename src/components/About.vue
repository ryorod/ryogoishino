<template>
    <div>
        <h1 class="content-title">About</h1>
        <div>
            <div class="about">
              <h3>Hello, I'm Ryogo Ishino.</h3>
              <img class="my-photo" src="../assets/my-photo/1547372000371.jpg" alt="">
              <img class="my-photo" src="../assets/my-photo/IMG_20200326_020348.jpg" alt="">
              <p>1999</p>
              <p>Born in Koshigaya, Saitama</p>
              <p>Student at Keio University SFC and Computational Creativity Lab</p>
              <div class="education">
                <h4>[Education]</h4>
                <p><span class="edu-current">2019.09 -</span><a href="https://cclab.sfc.keio.ac.jp/" target="_blank">Computational Creativity Lab</a> @ Keio SFC</p>
                <p><span class="edu-unilu">2019.02 - 2019.07</span><a href="https://wwwen.uni.lu/" target="_blank">University of Luxembourg</a></p>
                <p><span class="edu-current">2018.04 -</span><a href="https://www.sfc.keio.ac.jp/" target="_blank">Keio University SFC</a></p>
                <p><span class="edu-kaisei">2014.04 - 2017.03</span><a href="https://kaiseigakuen.jp/" target="_blank">Kaisei High School</a></p>
              </div>
              <div class="interests">
                <h4>[Interests]</h4>
                <p>AI, music, generative art, audiovisual art, HCI, XR, DTM</p>
              </div>
            </div>
        </div>
    </div>
</template>


<style>
.about{
    padding-left: 12%;
    padding-right: 5%;
}

.resent{
  margin-top: 50px;
}

.my-photo{
  margin-right: 60px;
  width: 300px;
  height: 330px;
}

.education{
  margin-top: 60px;
}

.edu-current{
  margin-right: 100px;
}

.edu-unilu{
  margin-right: 41px;
}

.edu-kaisei{
  margin-right: 43px;
}

.interests{
  margin-top: 60px;
}

a:link, a:visited, a:active {
  color: whitesmoke;
  text-decoration: none;
}

a:hover{
  text-decoration: underline;
  text-decoration-color: rgba(192,192,192,0.7);
}


@media screen and (max-width: 768px){
	.my-photo{
    width: 90%;
    height: auto;
    display: block;
  }
}
</style>