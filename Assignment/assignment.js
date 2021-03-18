function calculateExercise() {
    var exerciseTime = document.getElementsByClassName("exercise");
    var exerciseTotal = 0;

    for (var i = 0; i < exerciseTime.length; i++) {
        console.log(exerciseTotal)
        if (parseInt(exerciseTime[i].value) % 1 === 0) {
            exerciseTotal += parseInt(exerciseTime[i].value)
        }
    }
    var outputElement = document.getElementById("outputexercise");
    outputElement.innerHTML = exerciseTotal;
}

function calculateFast() {
    var fastTime = document.getElementsByClassName("fast");
    var fastTotal = 0;

    for (var i = 0; i < fastTime.length; i++) {
        console.log(fastTotal)
        if (parseInt(fastTime[i].value) % 1 === 0) {
            fastTotal += parseInt(fastTime[i].value)
        }
    }
    var outputElement = document.getElementById("outputfast");
    outputElement.innerHTML = fastTotal;
}

function calculateRead() {
    var readTime = document.getElementsByClassName("read");
    var readTotal = 0;

    for (var i = 0; i < readTime.length; i++) {
        console.log(readTotal)
        if (parseInt(readTime[i].value) % 1 === 0) {
            readTotal += parseInt(readTime[i].value)
        }
    }
    var outputElement = document.getElementById("outputread");
    outputElement.innerHTML = readTotal;
}

function calculateMeditate() {
    var meditateTime = document.getElementsByClassName("meditate");
    var meditateTotal = 0;

    for (var i = 0; i < meditateTime.length; i++) {
        console.log(meditateTotal)
        if (parseInt(meditateTime[i].value) % 1 === 0) {
            meditateTotal += parseInt(meditateTime[i].value)
        }
    }
    var outputElement = document.getElementById("outputmeditate");
    outputElement.innerHTML = meditateTotal;
}