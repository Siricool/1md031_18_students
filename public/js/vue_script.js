/*
function MenuItem(bn, glu, lac, img) {
    this.burgerName = bn; // The this keyword refers to the object itself
    //this.kCal = kcal;
    this.gluten = glu;
    this.lactose = lac;
    this.imgURL = img;

    }
    */
/*
function MyOrder(fn, em, st, hn, pay, gen){
  this.fullName = fn;
  this.email = em;
  this.street = st;
  this.houseNumber = hn;
  this.payMethod = pay;
  this.gender = gen;
}
*/

var v = new Vue({
      el: '#vmenu',
      data: {
        burger_list:burgers,
      },



    })

  var myButton = document.getElementById("orderb");
  myButton.addEventListener("click", myOrder);

/*var ord = new Vue({
      el: '#order',
      data: {
        clicked: "",
        infoOrder:""
      },
      methods: {
        myOrder: function() {
          console.log("Button clicked!");
        }
    }
  })*/




/*function MenuItem(bn, kcal, glu, lac) {
    this.burgerName = bn; // The this keyword refers to the object itself
    //this.kCal = kcal;
    this.gluten = glu;
    this.lactose = lac;
    this.imgURL = img;
    this.burger = function() {

    };

    var burger1 = new MenuItem('El Maco GRANDE ', true, false, "https://www.mcdonalds.com/content/dam/nordic/nfl/nutrition/Items/Regular/mcd-sv-elmaco-big.jpg");
    var burger2 = new MenuItem('Deluxe Sandwich', true, true, "https://www.cfacdn.com/img/order/COM/Menu_Refresh/Entree/Entree%20PDP/_0000s_0004_NEWStack6200001CFAPDPDeluxeSandwich1085png.png");
    var burger3 = new MenuItem('Halloumiburgare', false, false, "https://www.max.se/contentassets/bd97342be78047eb8f8026452d545538/product_halloumiburgare.png?width=1024&sharpen=5&sigma=1,4&threshold=0");

    var burger_list = [burger1, burger2, burger3];

    var v = new Vue({
      el: '#menu',
      data: {
        burger_list: [
        {name: burger1.burgerName, lac: burger1.lactose, glu: burger1.gluten},
        {name: burger2.burgerName, lac: burger2.lactose, glu: burger2.gluten},
        {name: burger3.burgerName, lac: burger3.lactose, glu: burger3.gluten},
        ],
        allergy: "contain gluten and/or lactose",
      }
    }) */

/*
function MenuItem(bn, kcal, glu = false, lac = false) {
    this.burgerName = bn; // The this keyword refers to the object itself
    this.kCal = kcal;
    this.gluten = glu;
    this.lactose = lac;
    this.burger = function() {

    };
}

var burger1 = new MenuItem('MyBurger', '14');
var burger2 = new MenuItem('MyBurger2', '144');
var burger3 = new MenuItem('McFeast', '154');
var burger4 = new MenuItem('Alabama burger', '20', true, true);
var burger5 = new MenuItem('El Maco Grande', '154', true, false);

var burger_list = [burger1, burger2, burger3, burger4, burger5];


/*

var v = new Vue({
  el: '#menu',
  data: {
    burger_list: [
    {name: burger1.burgerName, lac: burger1.lactose, glu: burger1.gluten},
    {name: burger2.burgerName, lac: burger2.lactose, glu: burger2.gluten},
    {name: burger3.burgerName, lac: burger3.lactose, glu: burger3.gluten},
   	{name: burger4.burgerName, lac: burger4.lactose, glu: burger4.gluten},
    {name: burger5.burgerName, lac: burger5.lactose, glu: burger5.gluten}
    ],
    allergy: "contain gluten and/or lactose",
  }
})
/* function MenuItem(bn, kcal, glu = false, lac = false) {
    this.burgerName = bn; // The this keyword refers to the object itself
    this.kCal = kcal;
    this.gluten = glu;
    this.lactose = lac;
    this.burger = function() {

    };
}

var burger1 = new MenuItem('El Maco GRANDE ', '14');
var burger2 = new MenuItem('MyBurger2', '144');
var burger3 = new MenuItem('McFeast', '154');
var burger4 = new MenuItem('Alabama burger', '20', true, true);
var burger5 = new MenuItem('El Maco Grande', '154', true, false);

var burger_list = [burger1, burger2, burger3, burger4, burger5];

var v = new Vue({
  el: '#menu',
  data: {
    burger_list: [
    {name: burger1.burgerName, lac: burger1.lactose, glu: burger1.gluten},
    {name: burger2.burgerName, lac: burger2.lactose, glu: burger2.gluten},
    {name: burger3.burgerName, lac: burger3.lactose, glu: burger3.gluten},
   	{name: burger4.burgerName, lac: burger4.lactose, glu: burger4.gluten},
    {name: burger5.burgerName, lac: burger5.lactose, glu: burger5.gluten}
    ],
    allergy: "contain gluten and/or lactose",
  }
})

/*function MenuItem(bn, kcal, glu, lac) {
    this.burgerName = bn; // The this keyword refers to the object itself
    this.kCal = kcal;
    this.gluten = glu;
    this.lactose = lac;
    this.burger = function() {

    };
}

var burger1 = new MenuItem('MyBurger', '14', true, false);
var burger2 = new MenuItem('MyBurger2', '144', false, false);
var burger3 = new MenuItem('McFeast', '154', false, false);
var burger4 = new MenuItem('Alabama burger', '20', true, true);
var burger5 = new MenuItem('El Maco Grande', '154', true, false);

var burger_list = [burger1, burger2, burger3, burger4, burger5];

var v = new Vue({
  el: '#menu',
  data: {
    burger_list: [
    {message: burger1.burgerName, lac: burger1.lactose, glu: burger1.gluten},
    {message: burger2.burgerName, lac: burger2.lactose, glu: burger2.gluten},
    {message: burger3.burgerName, lac: burger3.lactose, glu: burger3.gluten},
   	{message: burger4.burgerName, lac: burger4.lactose, glu: burger4.gluten},
    {message: burger5.burgerName, lac: burger5.lactose, glu: burger5.gluten}
    ]
    allergy: "contain gluten &/or lactose"
  }
})

//<div id="burgare">
/*  <h2> Välj en burgare</h2>
</div>

<div id="menu">
     <li v-for="burger in burger_list" v-if="burger.lac == true || burger.glu == true">
     {{burger.message}} {{allergy}}
     </li>

      <li v-else>
      {{burger.message}}
     </li>
</div>

*/

/*
var v = new Vue({
  el: '#menu',
  data: {
    burger_list: [
    {message: burger1.burgerName, lac: burger1.lactose, glu: burger1.gluten, allergy: "contain gluten &/or lactose" },
    {message: burger2.burgerName, lac: burger2.lactose, glu: burger2.gluten, allergy: "contain gluten &/or lactose" },
    {message: burger3.burgerName, lac: burger3.lactose, glu: burger3.gluten, allergy: "contain gluten &/or lactose" },
   	{message: burger4.burgerName, lac: burger4.lactose, glu: burger4.gluten, allergy: "contain gluten &/or lactose" },
    {message: burger5.burgerName, lac: burger5.lactose, glu: burger5.gluten, allergy: "contain gluten &/or lactose" }
    ]
  }
})
*/
