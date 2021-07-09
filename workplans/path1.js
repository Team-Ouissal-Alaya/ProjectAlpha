
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

$('#start').click(function () {
    $('#inputs').css('display', 'block')
})


$('#confirm').click(function () {
    window.open('C:/Users/Dream Team/Desktop/ProjectAlpha/Personalinfos/pinfos.html')

    const name = $("#name").val()
    const last = $("#lastname").val()
    const age = $('#age').val()
    const weight = $('#weight').val()
    const height = $('#height').val()

    
    localStorage.setItem("name", name)
    localStorage.setItem("last", last)
    localStorage.setItem("age", age)
    localStorage.setItem("weight", weight)
    localStorage.setItem("height", height)

})
