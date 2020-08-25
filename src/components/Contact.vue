<template>
    <div>
        <h1 class="content-title">Contact</h1>
        <div class="link">
            <a href="mailto:t18063ri@sfc.keio.ac.jp" class="link-icon"><font-awesome-icon icon="envelope" class="web-icon mail"/></a>
        </div>
    </div>
</template>

<style>


.link{
    display:inline-flex;
    width: 30%;
    justify-content: center;
}

.link-icon{
    margin: 20px 10px;
}

.web-icon{
    font-size: 2em;
    background-color: white;
    padding:0.3em;
    border-radius: 50%;
}

.web-icon:hover{
    color: white;
}



.mail{
    color: #00070e;
}
.mail:hover{
    background-color: #00070e;
}



@media screen and (max-width: 768px){
    .web-icon{
        color: #00070e;
    }

    .mail{
        background-color: white;
    }
}
</style>

