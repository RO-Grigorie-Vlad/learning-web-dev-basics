//colors
var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"
];

//winning color
var pickedColor = colors[3]; 

// add initial colors to squares
var squares = document.getElementsByClassName("square");
for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
}

var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
    squares[i].addEventListener("click", function(){
        //get color of clicked square and compare it to winning color
        var clickedColor = this.style.backgroundColor;
        if(clickedColor === pickedColor){
            alert("Corect!");
        }
        else{
            alert("Wrong!");
        }
    });
}
