

function myOrder(){
  console.log("Button clicked!");
  console.log(orderInfo());
  console.log(choseBurger());

  var infoList = orderInfo();
  document.getElementById("infoDisp").innerHTML = "Order confirmation and your information"
  document.getElementById("nameDisp").innerHTML = "Name: " + infoList[0];
  document.getElementById("mailDisp").innerHTML = "Mail: " + infoList[1];
  document.getElementById("payDisp").innerHTML = "Payment method: " + infoList[2];
  document.getElementById("genderDisp").innerHTML = "Gender: " + infoList[3];



  document.getElementById("infoBurger").innerHTML = "Your order: " + choseBurger();
}

function orderInfo(){
  var fullName = document.getElementById("fullname");
  var email = document.getElementById("mail");
  //var street = document.getElementById("street");
  //var house = document.getElementById("number");

  var paymentList = document.getElementById("payment");
  var payment = paymentList.options[paymentList.selectedIndex].text;

  var genderList = document.getElementsByName('gender');
  for (i=0; i < genderList.length; i++){
    if (genderList[i].checked)
      var gender = genderList[i];
    }
  var orderList = [];

  //orderList.push(info);
  orderList.push(fullName.value);
  orderList.push(email.value);
  //orderList.push(street.value);
  //orderList.push(house.value);
  orderList.push(payment);
  orderList.push(gender.value);

  return orderList;
}

function choseBurger(){
  var burgerList= [];
  var valdaBurg = document.getElementsByName("burgare");

  for (i=0; i < valdaBurg.length; i++){
    if (valdaBurg[i].checked){
       burgerList.push(valdaBurg[i].value);
    }
  }
  return burgerList;
}






//function myOrder() {
  //console.log("Button clicked.");
   //document.getElementById("order").innerHTML = "Button clicked!";
//}

/*function MenuItem(pn, kcal, glu, lac) {
    this.productName = pn; // The this keyword refers to the object itself
    this.kCal = kcal;
    this.gluten = glu;
    this.lactose = lac;
    this.burger = function() {
        return this.productName + ' ' + this.kCal;
    };
}

// Objects are then instantiated using the new keyword
var ord = new MenuItem('MyBurger', '14', 'Yes', 'Yes');

console.log(ord.burger() ); // Output: Maike Paetzel
*/
/*
function MenuItem(bn, kcal, glu, lac) {
    this.burgerName = bn; // The this keyword refers to the object itself
    //this.kCal = kcal;
    this.gluten = glu;
    this.lactose = lac;
    this.imgURL = img;
    this.burger = function() {

    };
}

// Objects are then instantiated using the new keyword


var burger1 = new MenuItem('El Maco GRANDE ', true, false, "https://www.mcdonalds.com/content/dam/nordic/nfl/nutrition/Items/Regular/mcd-sv-elmaco-big.jpg");
var burger2 = new MenuItem('Deluxe Sandwich', true, true, "https://www.cfacdn.com/img/order/COM/Menu_Refresh/Entree/Entree%20PDP/_0000s_0004_NEWStack6200001CFAPDPDeluxeSandwich1085png.png");
var burger3 = new MenuItem('Halloumiburgare', false, false, "https://www.max.se/contentassets/bd97342be78047eb8f8026452d545538/product_halloumiburgare.png?width=1024&sharpen=5&sigma=1,4&threshold=0");


var burger_list = [burger1, burger2, burger3];

//console.log(burger_list); // Output: Maike Paetzel

var menuBurger = document.getElementById("select");
var i = 0;
for (i; i< burger_list.length; i++){
			var item = burger_list[i];
			var listItem = document.createElement("li");
      if (item.gluten == true || item.lactose == true){
      	var listValue = document.createTextNode(item.burgerName + " contains gluten or/and lactose");
      }

      else{
      	var listValue = document.createTextNode(item.burgerName);

      }
		 listItem.appendChild(listValue);
     menuBurger.appendChild(listItem);
}
*/
