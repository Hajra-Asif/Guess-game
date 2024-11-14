
function level(difficulty) {

    levelInput = difficulty;
    if (difficulty === "easy") {
        console.log("meow");

        document.getElementById("difficulty-heading").innerHTML = "Guess Number between 1 - 10";
        document.getElementById("difficulty-heading").style.cssText = "font-family : sans-serif ; font-size : 25px";
        document.getElementById("input").style.display = "flex";
        document.getElementById("button-addon3").style.display = "none";
        document.getElementById("button-addon4").style.display = "none";


        var buttons = document.getElementsByClassName("button");
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].style.display = "none";
        }

    }
    else if (difficulty === "medium") {
        document.getElementById("difficulty-heading").innerHTML = "Guess Number between 1 - 100";
        document.getElementById("difficulty-heading").style.cssText = "font-family : sans-serif ; font-size : 25px";
        document.getElementById("input").style.display = "flex";
        document.getElementById("button-addon2").style.display = "none";
        document.getElementById("button-addon4").style.display = "none";

        var buttons = document.getElementsByClassName("button");
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].style.display = "none";
        }
    }
    else if (difficulty === "hard") {
        document.getElementById("difficulty-heading").innerHTML = "Guess Number between 1 - 1000";
        document.getElementById("difficulty-heading").style.cssText = "font-family : sans-serif ; font-size :25px";
        document.getElementById("input").style.display = "flex";
        document.getElementById("button-addon3").style.display = "none";
        document.getElementById("button-addon2").style.display = "none";

        var buttons = document.getElementsByClassName("button");
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].style.display = "none";
        }
    }
}

function easycheck() {
    var userinput = parseInt(document.getElementById("number-input").value);
    var random = (Math.random() * 10);
    var guess = Math.round(random + 1);


    if (userinput === guess - 1 || userinput === guess + 1) {
        document.getElementById("message").style.cssText = "display : block ; font-size : 24px; text-align : center";
        document.getElementById("message").innerHTML = "Too Close, Try Again :) <br> System Guess = " + guess + "<br> Your Guess : " + userinput;
        document.getElementById("img").src = "assets/loss.png"
        document.getElementById("button").style.cssText = "display : block ; margin : 0 auto ;"

    }

    else if (userinput > 0 && userinput <= 10 && userinput !== guess) {
        document.getElementById("message").style.cssText = "display : block ; font-size : 24px; text-align : center";
        document.getElementById("message").innerHTML = "Too High, Try Again :) <br> System Guess = " + guess + "<br> Your Guess : " + userinput;
        document.getElementById("img").src = "assets/loss.png"
        document.getElementById("button").style.cssText = "display : block ; margin : 0 auto ;"
            ;

    }
    else if (userinput === guess) {
        document.getElementById("message").style.cssText = "display : block ; font-size : 24px; text-align : center";
        document.getElementById("message").innerHTML = "System Guess = " + guess + "<br> Your Guess : " + userinput;
        document.getElementById("img").src = "assets/win.png"
    }
    else {
        alert("please enter valid number");

    }
}












function mediumcheck() {

    var userinput = parseInt(document.getElementById("number-input").value);
    var random = (Math.random() * 100);
    var guess = Math.round(random + 1);

    if (userinput === guess - 1 || userinput === guess + 1) {
        document.getElementById("message").style.cssText = "display : block ; font-size : 24px; text-align : center";
        document.getElementById("message").innerHTML = "Too Close, Try Again :) <br> System Guess = " + guess + "<br> Your Guess : " + userinput;
        document.getElementById("img").src = "assets/loss.png"
        document.getElementById("button").style.cssText = "display : block ; margin : 0 auto ;"
    }

    else if (userinput > 0 && userinput <= 100 && userinput !== guess) {
        document.getElementById("message").style.cssText = "display : block ; font-size : 24px; text-align : center";
        document.getElementById("message").innerHTML = "Too High, Try Again :) <br> System Guess = " + guess + "<br> Your Guess : " + userinput;
        document.getElementById("img").src = "assets/loss.png"
        document.getElementById("button").style.cssText = "display : block ; margin : 0 auto ;"
            ;

    }
    else if (userinput === guess) {
        document.getElementById("message").style.cssText = "display : block ; font-size : 24px; text-align : center";
        document.getElementById("message").innerHTML = "System Guess = " + guess + "<br> Your Guess : " + userinput;
        document.getElementById("img").src = "assets/win.png"
    }
    else {
        alert("please enter valid number");

    }
}



function hardcheck() {

    var userinput = parseInt(document.getElementById("number-input").value);
    var random = (Math.random() * 1000);
    var guess = Math.round(random + 1);

    if (userinput === guess - 1 || userinput === guess + 1) {
        document.getElementById("message").style.cssText = "display : block ; font-size : 24px; text-align : center";
        document.getElementById("message").innerHTML = "Too Close, Try Again :) <br> System Guess = " + guess + "<br> Your Guess : " + userinput;
        document.getElementById("img").src = "assets/loss.png"
        document.getElementById("button").style.cssText = "display : block ; margin : 0 auto ;"
    }

    else if (userinput > 0 && userinput <= 1000 && userinput !== guess) {
        document.getElementById("message").style.cssText = "display : block ; font-size : 24px; text-align : center";
        document.getElementById("message").innerHTML = "Too High, Try Again :) <br> System Guess = " + guess + "<br> Your Guess : " + userinput;
        document.getElementById("img").src = "assets/loss.png"
        document.getElementById("button").style.cssText = "display : block ; margin : 0 auto ;"

    }
    else if (userinput === guess) {
        document.getElementById("message").style.cssText = "display : block ; font-size : 24px; text-align : center";
        document.getElementById("message").innerHTML = "System Guess = " + guess + "<br> Your Guess : " + userinput;
        document.getElementById("img").src = "assets/win.png"
    }
    else {
        alert("please enter valid number");

    }
}


var levelInput;

function handleHeadingValue() {

    if (levelInput === 'medium') {
        return document.getElementById("difficulty-heading").innerHTML = "Guess Number between 1 - 100";
    }

    if (levelInput === 'easy') {
        return document.getElementById("difficulty-heading").innerHTML = "Guess Number between 1 - 10";
    }
    if (levelInput === 'hard') {
        return document.getElementById("difficulty-heading").innerHTML = "Guess Number between 1 - 1000";
    }
}
function retry() {
    console.log("whatever");
    document.getElementById("difficulty-heading").style.cssText = "font-family : sans-serif ; font-size : 30px";
    document.getElementById("input").style.display = "flex";
    document.getElementById("button").style.display = "none";
    document.getElementById("message").style.display = "none";
    document.getElementById("number-input").value = ""
    handleHeadingValue()

    var buttons = document.getElementsByClassName("button");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.display = "none";
    }

}