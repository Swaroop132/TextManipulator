difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = Math.floor(leftWristX - rightWristX);

        console.log("leftWristX = " + leftWristX + " rightWristX = " + rightWristX + " difference = " + difference);
    }
}

function modelLoaded() {
    console.log('PoseNet is Initialized!');
}

function draw() {
    background('#ffd997');
    document.getElementById("squareSide").innerHTML = "Font size of the text will be " + difference + "px";
    textSize(difference);
    fill("#fc5a03")
    text("Manipulate This!", 50, 400);
}