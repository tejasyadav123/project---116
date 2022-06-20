noseX=0;
noseY=0;

function preload(){
img=loadImage("https://i.postimg.cc/3x3QzSGq/m.png")
}
function setup(){
    canvas = createCanvas(300 , 300)
    canvas.center()
    video = createCapture(VIDEO)
    video.hide()
    video.size(300 , 300)

    posenet=ml5.poseNet(video , modelloaded)
    posenet.on("pose",gotposes)
}

function draw(){
image (video , 0 , 0 , 300 , 300)
image(img, noseX-15, noseY+5, 50, 30)
}

function modelloaded(){
    console.log("poseNetloaded")
}
function gotposes(result){
    if(result.length > 0){
     console.log(result)
     noseX=result[0].pose.nose.x
     noseY=result[0].pose.nose.y
     console.log("nose x =" + result[0].pose.nose.x)
     console.log("nose y =" + result[0].pose.nose.y)
    }
}