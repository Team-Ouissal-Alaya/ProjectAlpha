var mbf = ['plan1']
var mbm = ['plan2']
var mif = ['plan3']
var mim = ['plan4']
var maf = ['plan5']
var mam = ['plan6']
var fbf = ['plan7']
var fbm = ['plan8']
var fif = ['plan9']
var fim = ['plan10']
var faf = ['plan11']
var fam = ['plan12']

var bmale = false;
var bfemale = false;
var bbeginner=false;
var bintermediate=false;
var badvanced=false;
var bfat=false;
var bmuscle=false;

$('#male').click(function () {
   
    bmale = true
    bfemale=false
    $(this).css('background-color','red');
    $('#female').css('background-color','');
    $('#level').css('display','block')
   

})
$('#female').click(function () {
    bfemale = true
    bmale=false
    $(this).css('background-color','red');
    $('#male').css('background-color','');
    $('#level').css('display','block')
   
})
$('#beginner').click(function () {
    bbeginner = true
    bintermediate=false;
    badvanced=false;
    $(this).css('background-color','red');
    $('#intermediate').css('background-color','');
    $('#advanced').css('background-color','');
    $('#exercicegoal').css('display','block')

})
$('#intermediate').click(function () {
    bintermediate = true;
    bbeginner=false;
    badvanced=false
    $(this).css('background-color','red');
    $('#beginner').css('background-color','');
    $('#advanced').css('background-color','');
    $('#exercicegoal').css('display','block')
})
$('#advanced').click(function () {
    badvanced = true;
    bbeginner=false;
    bintermediate=false;
    $(this).css('background-color','red');
    $('#beginner').css('background-color','');
    $('#intermediate').css('background-color','');
    $('#exercicegoal').css('display','block')
})
$('#fat').click(function () {
    bfat = true;
    bmuscle=false;
    $(this).css('background-color','red');
    $('#muscle').css('background-color','');
})
$('#muscle').click(function () {
    bmuscle = true;
    bfat=false;
    $(this).css('background-color','red');
    $('#fat').css('background-color','');
    
})
