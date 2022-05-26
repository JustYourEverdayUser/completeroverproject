var spaceimages = ["image1.jpg","image2.jpg","image3_.jpg","image_4.jpg","image5.jpg"];
var rngnumber = Math.floor(Math.random()*5);
canvas = document.getElementById("my_canvas");
ctx = canvas.getContext("2d");
var rover_width = 100;
var rover_height = 90;
var rover_x = 10;
var rover_y = 10;
background_image = spaceimages[rngnumber];
rover_image = "rover.png";
function add(){
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadRover;
    rover_imgTag.src = rover_image;
}
function uploadBackground(){
    ctx.drawImage(background_imgTag, 0,0,canvas.width,canvas.height);
}
function uploadRover(){
    ctx.drawImage(rover_imgTag,rover_x,rover_y, rover_width,rover_height);
}
window.addEventListener("keydown",my_keyDown);
function my_keyDown(e){
    keyPress = e.keyCode;
    console.log(keyPress);
    if(keyPress == 37){
        left();
        console.log("left");
    }
    if(keyPress == 38){
        up();
        console.log("up");
    }
    if(keyPress == 39){
        right();
        console.log("right");
    }
    if(keyPress == 40){
        down();
        console.log("down");
    }
}

function left(){
    if(rover_x >=0){
        rover_x = rover_x-10;
        console.log("when left is pressed, x = "+rover_x+"and y is equal to"+rover_y);
        uploadBackground();
        uploadRover();
    }
}
function right(){
    if(rover_x<=700){
        rover_x = rover_x+10;
        console.log("when right is pressed, x = "+rover_x+"and y is equal to"+rover_y);
        uploadBackground();
        uploadRover();
    }
}
function up(){
    if(rover_y >=0){
        rover_y = rover_y-10;
        console.log("when up is pressed, x = "+rover_x+"and y is equal to"+rover_y);
        uploadBackground();
        uploadRover();
    }
}
function down(){
    if(rover_y <=500){
        rover_y = rover_y+10;
        console.log("when down is pressed, x = "+rover_x+"and y is equal to"+rover_y);
        uploadBackground();
        uploadRover();
    }
}
//above is the arrow key functions