var canvas = new fabric.Canvas("myCanvas");
var block_width = 30;
var block_height = 30;
player_x = 10;
player_y = 10;
var player_image = "";
var block_image = "";

function playerupdate() {
    fabric.Image.fromURL("player.png", function (img){
        player_image = img;
        player_image.scaleToWidth(150);
        player_image.scaleToHeight(140);
        player_image.set({top:player_y, left:player_x});
        canvas.add(player_image);
    });
}

function newImage(get_image) {
        fabric.Image.fromURL(get_image, function (img){
            block_image = img;
            block_image.scaleToWidth(block_width);
            block_image.scaleToHeight(block_height);
            block_image.set({top:player_y, left:player_x});
            canvas.add(block_image);

        });
}  

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if (keyPressed == '70') {
        newImage('ironman_face.png');
        console.log('f');       
    } 

    if(keyPressed == '66') {
        newImage('spiderman_body.png');
        console.log('b');
    }

    if (keyPressed == "76") {
        newImage('hulk_legs.png');
        console.log('l');
    }

    if (keyPressed == '82') {
        newImage('thor_right_hand.png');
        console.log('r');
    }

    if (keyPressed == '72') {
        newImage('captain_america_left_hand.png');
        console.log('h');
    }
 
    if (keyPressed == '38') {
        up();
        console.log('up');
    }

    if (keyPressed == '40') {
        down();
        console.log('down');
    }

    if (keyPressed == '39') {
        right();
        console.log('right');
    }

    if (keyPressed == '37') {
        left();
        console.log('left');
    }

    if (e.shiftKey == true && keyPressed == '80') {
        console.log("p and shift pressed together");
        block_width = block_width + 10;
        block_height = block_height + 10;
        document.getElementById("current_width").innerHTML = block_width;
        document.getElementById("current_height").innerHTML = block_height;
    }

    if(e.shiftKey == true && keyPressed == '77') {
        console.log("m and shift pressed together");
        block_height = block_height - 10;
        block_width = block_width - 10;
        document.getElementById("current_width").innerHTML = block_width;
        document.getElementById("current_height").innerHTML = block_height;
    }
}


function up() {
    if (player_y >=0) {
         player_y = player_y - block_height;
         console.log("When up arrow key is pressed x = " + player_x + "y = " + player_y);
         console.log("block_height" + block_height);
         canvas.remove(player_image);
         playerupdate();
    }
}

function down() {
    if (player_y <=550) {
         player_y = player_y + block_height;
         console.log("When down arrow key is pressed x = " + player_x + "y = " + player_y);
         console.log("block_height" + block_height);
         canvas.remove(player_image);
         playerupdate();
    }
}

function left() {
    if (player_x >= 0) {
         player_x = player_x - block_width;
         console.log("When left arrow key is pressed x = " + player_x + "y = " + player_y);
         console.log("block_height" + block_height);
         canvas.remove(player_image);
         playerupdate();
    }
}

function right() {
    if (player_x <=1000) {
         player_x = player_x + block_width;
         console.log("When right arrow key is pressed x = " + player_x + "y = " + player_y);
         console.log("block_height" + block_height);
         canvas.remove(player_image);
         playerupdate();
    }
}