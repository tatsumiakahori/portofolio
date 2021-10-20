var noiseScale = 800;
var canvas;

/*
 * ウィンドウの大きさが変更されたときに背景が再度描画されるように
 * 元々setup()にあった処理をここに移動した
 */
function canvasSetup(){
    background(21, 8, 50);
    for(var i = 0; i < nums; i++){
        particles_a[i] = new Particle(random(0, width),random(0,height));
        particles_b[i] = new Particle(random(0, width),random(0,height));
        particles_c[i] = new Particle(random(0, width),random(0,height));
    }
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
    canvasSetup();
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);//ブラウザのウィンドウサイズに合わせてcanvas作成
    canvas.style('z-index','-1');//canvasを後ろに移動する。

    canvasSetup();
}

function draw() {
    background(230);
    circle(200, 200, 150, 150);
}