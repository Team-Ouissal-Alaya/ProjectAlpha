var bmale = false;
var bfemale = false;
var bbeginner = false;
var bintermediate = false;
var badvanced = false;
var bfat = false;
var bmuscle = false;

$('#male').click(function () {

    bmale = true
    bfemale = false
    $(this).css('background-color', 'lightcoral');
    $('#female').css('background-color', '');
    $('#level').css('display', 'block')
    localStorage.setItem("gender", "male");

})
$('#female').click(function () {
    bfemale = true
    bmale = false
    $(this).css('background-color', 'lightcoral');
    $('#male').css('background-color', '');
    $('#level').css('display', 'block')
    localStorage.setItem("gender", "female");

})
$('#beginner').click(function () {
    bbeginner = true
    bintermediate = false;
    badvanced = false;
    $(this).css('background-color', 'lightcoral');
    $('#intermediate').css('background-color', '');
    $('#advanced').css('background-color', '');
    $('#exercicegoal').css('display', 'block')
    localStorage.setItem("experience", "beginner");

})
$('#intermediate').click(function () {
    bintermediate = true;
    bbeginner = false;
    badvanced = false
    $(this).css('background-color', 'lightcoral');
    $('#beginner').css('background-color', '');
    $('#advanced').css('background-color', '');
    $('#exercicegoal').css('display', 'block')
    localStorage.setItem("experience", "intermediate");
})
$('#advanced').click(function () {
    badvanced = true;
    bbeginner = false;
    bintermediate = false;
    $(this).css('background-color', 'lightcoral');
    $('#beginner').css('background-color', '');
    $('#intermediate').css('background-color', '');
    $('#exercicegoal').css('display', 'block')
    localStorage.setItem("experience", "advanced");
})
$('#fat').click(function () {
    bfat = true;
    bmuscle = false;
    $(this).css('background-color', 'lightcoral');
    $('#muscle').css('background-color', '');
    localStorage.setItem("goal", "fat");
    
})
$('#muscle').click(function () {
    bmuscle = true;
    bfat = false;
    $(this).css('background-color', 'lightcoral');
    $('#fat').css('background-color', '');
    localStorage.setItem("goal", "muscle");

})

function workplan() {
    if (bmale === true && bbeginner === true && bfat === true) {
        window.location.href = ""
    }

    if (bmale === true && bbeginner === true && bmuscle === true) {
        window.location.href = ""
    }

    if (bmale === true && bintermediate === true && bfat === true) {
        window.location.href = ""
    }
    if (bmale === true && bintermediate === true && bmuscle === true) {
        window.location.href = ""
    }
    if (bmale === true && badvanced === true && bfat === true) {
        window.location.href = ""
    }
    if (bmale === true && badvanced === true && bmuscle === true) {
        window.location.href = ""
    }

    if (bfemale === true && bbeginner === true && bfat === true) {
        window.location.href = ""
    }

    if (bfemale === true && bbeginner === true && bmuscle === true) {
        window.location.href = ""
    }

    if (bfemale === true && bintermediate === true && bfat === true) {
        window.location.href = ""
    }
    if (bfemale === true && bintermediate === true && bmuscle === true) {
        window.location.href = ""
    }
    if (bfemale === true && badvanced === true && bfat === true) {
        window.location.href = ""
    }
    if (bfemale === true && badvanced === true && bmuscle === true) {
        window.location.href = ""
    }

}