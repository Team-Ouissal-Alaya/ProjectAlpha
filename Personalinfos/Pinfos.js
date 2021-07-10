var gender=localStorage.getItem("gender");
var experience=localStorage.getItem("experience");
var goal=localStorage.getItem("goal");
var name=localStorage.getItem("name");
var lastname=localStorage.getItem("last");
var age=localStorage.getItem("age");
var weight=localStorage.getItem("weight");
var height=localStorage.getItem("height");


$('#infos').ready(function(){
    $('#infos').append ( '<p style="font-weight: bolder;">'+name+' '  +lastname +'</p>')
    
    $('#infos').append (  '<p style="font-weight: bolder;">'+'Age : '+age+'</p>' )

    $('#infos').append (  '<p style="font-weight: bolder;">'+'Your initial weight was : '+localStorage.getItem("weight")+'</p>' )

    
    
   
})


var weight2;



$('#updateweight').click(function (){
    
    weight2= $('#newweight').val();
    localStorage.setItem("weight2", weight2);

    location.reload();
})

$('#currentweight').append (  '<p style="font-weight: bolder;">'+'Your current weight is : '+localStorage.getItem("weight2")+'</p>' )



var BMI = Math.floor(localStorage.getItem("weight2")/((height/100)*(height/100)));

$('#bmi').ready(function(){
    
    $('#bmi').append ( '<p style="font-weight: bolder;">'+'Your current BMI is : '+BMI+'</p>')
})