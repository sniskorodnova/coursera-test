(function () {
'use strict';

var shoppingList = [
  { name: "cookies", quantity: 10 },
  { name: "apples", quantity: 5},
  { name: "tomatos", quantity: 3},
  { name: "eggs", quantity: 12},
  { name: "coffee", quantity: 1}
];

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var tobuylist = this;

  tobuylist.items = ShoppingListCheckOffService.showTobuyList();
  tobuylist.buyItem = function (itemIndex) {
      ShoppingListCheckOffService.buyItem(itemIndex);
  }
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var alreadyboughtlist = this;

  alreadyboughtlist.items = ShoppingListCheckOffService.showAlreadyboughtList();
}

function ShoppingListCheckOffService() {
  var service = this;

  var tobuy = shoppingList;
  var bought = [];

  service.buyItem = function (itemIndex) {
    var item = {
      name: tobuy[itemIndex].name,
      quantity: tobuy[itemIndex].quantity
    };
    bought.push(item);

    tobuy.splice(itemIndex, 1);
  };

  service.showTobuyList = function() {
    return tobuy;
  };

  service.showAlreadyboughtList = function() {
    return bought;
  };
}
})();
