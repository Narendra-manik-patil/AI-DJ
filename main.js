song = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function preload() {
    song = loadSound("music.mp3");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPose);
}
function draw() {
    image(video, 0, 0, 600, 500);
}
function modelLoaded() {
    console.log('poseNet Is Initalized')
}
function play() {
    song.play();
    song.setVolume(1);
    song.rate(1);
}
function gotPose(result) {
    if (result.length > 0) {
        console.log(result);
        leftWristX = result[0].pose.leftWrist.x;
        leftWristY = result[0].pose.leftWrist.y;
        console.log("leftWrist = " + leftWristX + "leftWristyY" + leftWristY);

        rightWristX = result[0].pose.leftWrist.x;
        rightWristY = result[0].pose.leftWrist.y;
        console.log("rightWrist = " + leftWristX + "rightWristyY" + leftWristY);

    }

}