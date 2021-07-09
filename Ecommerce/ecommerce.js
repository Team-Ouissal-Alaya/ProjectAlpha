

var price1 = 35
var price2 = 37 
var price3 = 50
var price4 = 10
var price5 = 15
var price6 = 25
var price7 = 35
var price8 = 65
var price9 = 5
var tittle1 ='Optimum Gold Standard 100% Whey Protein ' ;
var tittle2 = 'Dymatize Elite Whey Protein';
var tittle3 = 'MuscleTech Nitro Tech Performance Series';
var tittle4 = 'BlenderBottle Classic V2 Shaker Cup - 20 oz.';
var tittle5 = 'Essential Studio Yoga Mat | Ink 4mm';
var tittle6 = 'Structured 3.0 Training Belt';
var tittle7 = 'Fitness World Exercise Dumbbells 4 KG';
var tittle8 = 'Basics Cast Iron Kettlebell';
var tittle9 = 'Lean Moblie Phone Armband';












 var cartprice = []

 var nameitem=[]

$("#buy1").click(function(){
cartprice.push(price1)
nameitem.push(tittle1)


})




$("#buy2").click(function(){
    cartprice.push(price2)
    nameitem.push(tittle2)
    
    })



$("#buy3").click(function(){
    cartprice.push(price3)
    nameitem.push(tittle3)
    
    })


$("#buy4").click(function(){
    cartprice.push(price4)
    nameitem.push(tittle4)
    
    })


$("#buy5").click(function(){
    cartprice.push(price5)
    
    nameitem.push(tittle5)
    })




$("#buy6").click(function(){
    cartprice.push(price6)
    nameitem.push(tittle6)
    
    })




$("#buy7").click(function(){
    cartprice.push(price7)
    nameitem.push(tittle7)
    
    })



$("#buy8").click(function(){
    cartprice.push(price8)
    
    nameitem.push(tittle8)
    })



$("#buy9").click(function(){
    cartprice.push(price9)
    nameitem.push(tittle9)
    
    })


    var total =0
  $("#viewcart").click(function(){
for( var i= 0; i<cartprice.length;i++){
$("#finalcart").append("<p>"+ " Item : " + nameitem[i] + " . price : "+ cartprice[i]+"</p>" )
$("#finalcart").toggle()
 

total= total +cartprice[i]
  
}
 


  $("#finalcart").append("<p>"+ "Total price : " + total + " $ " +"</p>")

  

  })
