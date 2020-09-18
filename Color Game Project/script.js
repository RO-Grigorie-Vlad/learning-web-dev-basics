var squares = document.getElementsByClassName("square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");

var resetButton = document.getElementById("resetButton");
var easyDiffButton = document.getElementById("easyDiffButton");
var hardDiffButton = document.getElementById("hardDiffButton");

//difficulty 
    //6 for hard
    // 3 for easy
var mod = 6;
//set up colors
var colors;
//winning color
var pickedColor;

//set everything up
setUp(mod);

//reset button
resetButton.addEventListener("click", function(){
    reset(mod);
});

//select dificulty - one button for each (it also generates new colors)
easyDiffButton.addEventListener("click", function(){
    mod = 3;
    for(var i = 3; i<6; i++){
        squares[i].style.backgroundColor = "#232323";
        squares[i].style.pointerEvents = "none";
    }
    setUp(mod);

    this.classList.add("selected");
    hardDiffButton.classList.remove("selected");

});
hardDiffButton.addEventListener("click", function(){
    mod = 6;
    for(var i = 3; i<6; i++){
        if(squares[i].style.pointerEvents === "none"){
            squares[i].style.pointerEvents = "auto";
        }
    }
    setUp(mod);

    this.classList.add("selected");
    easyDiffButton.classList.remove("selected");

})

//addEventListener to the squares
//  check winning condition
//  take coresponding action
for(var i = 0; i < squares.length; i++){
    squares[i].addEventListener("click", function(){
        //get color of clicked square and compare it to winning color
        var clickedColor = this.style.backgroundColor;
        console.log("Square clicked")
        this.style.pointerEvents = "none"
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Corect!"
            changeColors(pickedColor);
            resetButton.textContent = "Play again?"
            h1.style.background = clickedColor;
        }
        else{
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again!"
        }
    });
}

function setUp(mod){
    //set up colors
    colors = generateRandomColors(mod);
    //winning color
    pickedColor = pickColor();
    // add initial colors to squares
    for(var i = 0; i < mod; i++){
        squares[i].style.backgroundColor = colors[i];
        //show color code at the top
        colorDisplay.textContent = pickedColor;
        messageDisplay.textContent = ""
    }
    makeThemClickableAgain();
}

function reset(mod){
    setUp(mod);
    h1.style.backgroundColor = "steelblue"
    resetButton.textContent = "New Colors";
}

function makeThemClickableAgain(){
    for(var i = 0; i<mod; i++){
        if(squares[i].style.pointerEvents === "none"){
            squares[i].style.pointerEvents = "auto";
        }
    }
}

function changeColors(color){
    //change colors of the squares to match the correct color
    for(var i = 0; i < mod; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var randomNumber = Math.floor(Math.random() * colors.length);
    return colors[randomNumber];
}

function generateRandomColors(mod){
    var colors = [];
    for(var i = 0;  i< mod ; i++){
        var colorGenerated = randomColor();
        console.log(colorGenerated);
        colors.push(colorGenerated);
    }
    return colors;
}

function randomColor(){
    var randomNumber1 = Math.floor(Math.random() * 256);
        var randomNumber2 = Math.floor(Math.random() * 256);
        var randomNumber3 = Math.floor(Math.random() * 256);
        var colorGenerated = "rgb(" + randomNumber1 + ", " + randomNumber2 + ", " + randomNumber3 + ")";
        return colorGenerated;
}
