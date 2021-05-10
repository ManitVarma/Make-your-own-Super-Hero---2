var canvas = new fabric.Canvas("myCanvas")

var player_X = 50;
var player_Y = 50;

var player_object = "";
var block_object = "";

var block_img_width = 30;
var block_img_hegiht = 30;

function player_update(){
    fabric.Image.fromURL("player.png", function(img){
        player_object = img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_Y,
            left:player_X
        })
        canvas.add(player_object);
    })
}

function new_image(get_image){
    fabric.Image.fromURL(get_image, function(img){
        block_object = img;

        block_object.scaleToWidth(block_img_width);
        block_object.scaleToHeight(block_img_hegiht);
        block_object.set({
            top:player_Y,
            left:player_X
        })
        canvas.add(block_object);
    })
}

window.addEventListener("keydown" , my_keydown);

function my_keydown(e){
    keyPressed = e.keyCode;

    if(e.shiftKey == true && keyPressed == '80'){
        block_img_hegiht = block_img_hegiht + 10;
        block_img_width = block_img_width + 10;
        document.getElementById("current_width").innerHTML = block_img_width;
        document.getElementById("current_hegiht").innerHTML = block_img_hegiht;
    }
    if(e.shiftKey == true && keyPressed == '77'){
        block_img_hegiht = block_img_hegiht - 10;
        block_img_width = block_img_width - 10;
        document.getElementById("current_width").innerHTML = block_img_width;
        document.getElementById("current_hegiht").innerHTML = block_img_hegiht;
    }
    

    if(keyPressed == '38'){
        up()
        console.log("up")
    }
    if(keyPressed == '40'){
        down()
        console.log("down")
    }
    if(keyPressed == '37'){
        left()
        console.log("left")
    }
    if(keyPressed == '39'){
        right()
        console.log("rigth")
    }

    if(keyPressed == '72'){
        console.log("h")
        new_image("hulk_legs.png")
    }
    if(keyPressed == '73'){
        console.log("i");
        new_image("ironman_face.png")
    }
    if(keyPressed == '83'){
        console.log("s");
        new_image("spiderman_body.png")
    }
    if(keyPressed == '84'){
        console.log("t");
        new_image("thor_right_hand.png")
    }
    if(keyPressed == '65'){
        console.log("c");
        new_image("captain_america_left_hand.png")
    }


}

function up(){
    if(player_Y > 0){
        player_Y = player_Y - block_img_hegiht;
        canvas.remove(player_object);
        player_update()
    }
}
function down(){
    if(player_Y < 600){
        player_Y = player_Y + block_img_hegiht;
        canvas.remove(player_object);
        player_update()
    }
}
function left(){
    if(player_X > 0){
        player_X = player_X - block_img_width;
        canvas.remove(player_object);
        player_update()
    }
}
function right(){
    if(player_X < 800){
        player_X = player_X + block_img_width;
        canvas.remove(player_object);
        player_update()
    }
}