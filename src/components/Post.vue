<template>
    <div>
        <h1 class="content-title">Posts</h1>
        <div class="post">
            <a href="https://medium.com/computational-creativity-lab-at-keio-sfc/cc-lab-20%E6%98%A5-the-dawn-of-x-magic-an-audiovisual-instrument-for-magical-performances-8bc7ae5b481e" target="_blank">
                <div class="my-posts">
                    <img src="../assets/post/x-magic_post.png" alt="" width="100%" height="100%">
                </div>
            </a>
            <a href="http://createwith.ai/paper/20200204/1700" target="_blank">
                <div class="my-posts">
                    <img class="my-posts" src="../assets/post/timbretron.png" alt="" width="100%" height=100%>
                </div>
            </a>
        </div>
    </div>
</template>

<style>

.post{
    padding-left: 12%;
}

.my-posts{
    margin-right: 10px;
    margin-bottom: 10px;
    width: 500px;
    height: 300px;
    overflow: hidden;
    position: relative;
    display: inline-block;
    transition-duration: 0.5s;
}

.my-posts:hover{
    transform: scale(1.1);
    transition-duration: 0.5s;
}



@media screen and (max-width: 768px){
    .post{
        padding-left: 0;
        padding-right: 0;
        display: block;
    }

    .my-posts{
        margin-right: 0;
        margin-bottom: 10px;
        width: 100%;
        height: auto;
        overflow: hidden;
        position: relative;
        transition-duration: 0.5s;
    }

}
</style>

