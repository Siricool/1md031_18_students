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
var socket = io();

var v = new Vue({
      el: '#lalala',
      data: {
        burger_list:burgers,
        ordLocation: {details: {x:0, y:0 }}


      },
      methods:{
          displayOrder: function (event){
            var offset = {x: event.currentTarget.getBoundingClientRect().left,
                        y: event.currentTarget.getBoundingClientRect().top};
          this.ordLocation = {details: { x: event.clientX - 10 - offset.x,
                                   y: event.clientY - 10 - offset.y },
                                      }
                                    },
          getNext: function () {
            var lastOrder = orderInfo();
            var orderer = lastOrder[0];
            return orderer;
          },
          addOrder: function (event) {
                    socket.emit("addOrder", { orderId: this.getNext(),
                                              details: {x: this.ordLocation.details.x,
                                                        y: this.ordLocation.details.y},
                                              orderItems: choseBurger(),
                                              customerInfo: orderInfo()
                                            });
                                    }
              }
    });

    var myButton = document.getElementById("orderb");
    myButton.addEventListener("click", myOrder);
