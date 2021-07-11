
$('#warmup').click(function () {

    $('#warmuptext').toggle();
})


$('#day1').click(function () {


    $('#plan1day1').toggle();
})


$('#day2').click(function () {


    $('#plan1day2').toggle();
})

$('#day3').click(function () {


    $('#plan1day3').toggle();
})

$('#day4').click(function () {


    $('#plan1day4').toggle();
})

$('#day5').click(function () {


    $('#plan1day5').toggle();
})

$('#day6').click(function () {


    $('#plan1day6').toggle();
})

$('#day7').click(function () {


    $('#plan1day7').toggle();
})
$(document).ready(function(){
$('#start').click(function () {
    $('#overlay').fadeIn(300);
})
$('#close').click(function() {
    $('#overlay').fadeOut(500);
 });
})

$('#confirm').click(function () {
   

    const name = $("#name").val()
    const last = $("#lastname").val()
    const age = $('#age').val()
    const weight = $('#weight').val()
    const height = $('#height').val()
    var check=false;
if (!name||!last||!age||!weight||!height){
    check=true;
    alert ('Please fill all fields')
}
 if(check===false)   {
    localStorage.setItem("name", name)
    localStorage.setItem("last", last)
    localStorage.setItem("age", age)
    localStorage.setItem("weight", weight)
    localStorage.setItem("height", height)
    window.open('C:/Users/Dream Team/Desktop/ProjectAlpha/Personalinfos/pinfos.html')
 }
})

var textWrapper = document.querySelector('.ml3');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml3 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i+1)
  }).add({
    targets: '.ml3',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });