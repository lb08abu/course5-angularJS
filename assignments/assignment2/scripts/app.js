(function() {
  'use strict';
  angular.module("ShoppingListApp", [])
  .controller("ToBuyShoppingController", ToBuyShoppingController)
  .controller("AlreadyBoughtShoppingController", AlreadyBoughtShoppingController)
  .service("ShoppingListCheckOffService", ShoppingListCheckOffService);

  ToBuyShoppingController.$inject = ["ShoppingListCheckOffService"];
  function ToBuyShoppingController(ShoppingListCheckOffService) {
    var self = this;
    self.toBuy = ShoppingListCheckOffService.toBuy;
    self.bought = ShoppingListCheckOffService.bought;

    self.buyItem = function(index) {
      ShoppingListCheckOffService.moveItem(self.toBuy, self.bought, index);
    }
  }

  AlreadyBoughtShoppingController.$inject = ["ShoppingListCheckOffService"];
  function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
    var self = this;
    self.toBuy = ShoppingListCheckOffService.toBuy;
    self.bought = ShoppingListCheckOffService.bought;

    self.unBuyItem = function(index) {
      ShoppingListCheckOffService.moveItem(self.bought, self.toBuy, index);
    }
  }

  function ShoppingListCheckOffService() {
    var self = this;
    self.toBuy = [
      {quantity: 10, item: "Cookies"},
      {quantity: 4, item: "Piglets"},
      {quantity: 2, item: "Buckets"},
      {quantity: 9, item: "Quantum dots"},
      {quantity: 33, item: "Banners"}
    ];
    self.bought = [];

    self.moveItem = function(frm, to, index) {
      var item = frm[index];
      frm.splice(index, 1);
      to.push(item);
    }

  }
}());
