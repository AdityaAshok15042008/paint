canvas =document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

var last_position_of_x, last_position_of_y;
var mouseEvent ="empty";
var color;
var darius;
var thicc;
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
 color=document.getElementById("colour").value;
 darius=document.getElementById("radius").value;
 thicc=document.getElementById("breadth").value;
 mouseEvent ="mouseDown";  
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
 mouseEvent ="mouseUP";  
}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if(mouseEvent == "mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle= color;
        ctx.lineWidth= thicc;
        ctx.arc(current_position_of_mouse_x,current_position_of_mouse_y,darius,0,2*Math.PI);
        ctx.stroke();
    }
}


canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
 mouseEvent ="mouseleave";  
}

function clrscr(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}


