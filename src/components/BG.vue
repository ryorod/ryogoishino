<template>
    <canvas id="bg"></canvas>
</template>

<script>
export default {
    name: 'App',
    mounted() {
        const script = p5 => {
            var a = 0.7;
            var b = 3.5;
            var c = 0.6;
            var d = 1.0;
            var e = 0.25;
            var f = 0.0;
            var x = 1.0;
            var y = 1.0;
            var z = 1.0;
            var dt = 0.01;
            var scale = 160;
            var bgUpdate = false;
            var points;
            p5.setup = () => {
                var canvas = p5.createCanvas(window.innerWidth, window.innerHeight, p5.WEBGL);
                canvas.parent("bg");
                p5.background(0,7,14);
                p5.blendMode(p5.ADD);
                points = p5.createVector(0,0,0);
            };
            p5.draw = () => {
                if(bgUpdate == true){
                    p5.background(0,7,14);
                    p5.stroke(205,235,255,100);
                }else{
                    p5.stroke(125,155,255,50);
                }
                p5.translate(p5.width/2, p5.height/2, 0);
                p5.rotateX(-p5.mouseY/100);
                p5.rotateY(-p5.mouseX/100);
                var dx = (z-a)*x - b*y;
                var dy = b*x + (z-a)*y;
                var dz = c + d*z - (z*z*z)/3 - (x*x+y*y)*(1+e*z) + f*z*x*x*x;
                x += dx*dt;
                y += dy*dt;
                z += dz*dt;
                var point = p5.createVector(x,y,z);
                points.add(point);
                p5.noFill();
                p5.beginShape();
                for(let p in points){
                    p5.vertex(p.x*scale, p.y*scale, p.z*scale);
                }
                p5.endShape();
            };
        }
        const P5 = require('p5');
        new P5(script);
    },
}
</script>

<style>
#bg {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: -1;
}
</style>