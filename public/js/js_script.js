

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
  var paymentList = document.getElementById("payment");
  var payment = paymentList.options[paymentList.selectedIndex].text;

  var genderList = document.getElementsByName('gender');
  for (i=0; i < genderList.length; i++){
    if (genderList[i].checked)
      var gender = genderList[i];
    }
  var orderList = [];

  orderList.push(fullName.value);
  orderList.push(email.value);
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
