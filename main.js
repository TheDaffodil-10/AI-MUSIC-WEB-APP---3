peter_pan_song = "";
harry_potter_song = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function preload(){
   peter_pan_song = loadSound("peter.mp3");
   harry_potter_song =  loadSound("harry.mp3")
}

function setup(){
        canvas = createCanvas(600, 500);
        canvas.center(); 
    
        video = createCapture(VIDEO);
        video.hide();

        poseNet = ml5.poseNet(video, modelLoaded);
        poseNet.on('pose', gotPoses); 
}

function draw(){
    image(video, 0, 0, 600, 500);
}

function modelLoaded() {
    console.log("poseNet Is initialized");
}

function gotPoses () 
{ 
   if(results.length > 0)
   {
    console.log(results);
    leftWristX = results[0].pose.leftWrist.x ; 
    leftWristY = results[0].pose.leftWrist.y ; 
    rightWristX = results[0].pose.rightwrist.x ;
    rightWristY = results[0].pose.rightWrist.y ; 
    console.log("leftWristX = " + leftWristX, "leftWristY = " + leftWristY, "rightWristX = " + rightWristX, "rightWristY = " + rightWristY);
   }
}
