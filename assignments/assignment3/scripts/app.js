(function() {
  'use strict';

  angular.module("NarrowItDownApp", [])
  .controller("NarrowItDownController", NarrowItDownController)
  .service("MenuSearchService", MenuSearchService)
  .directive("foundItems", FoundItemsDirective)
  .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

  NarrowItDownController.$inject = ["MenuSearchService"];
  function NarrowItDownController(MenuSearchService) {
    var self = this;
    self.found = [];
    self.searchTerm = "";
    self.badQuery = "";
    self.error = false;

    self.getMatchedMenuItems = function() {
      if (!self.searchTerm) {
        self.error = true;
        return;
      }
      var foundPromise = MenuSearchService.getMatchedMenuItems(self.searchTerm);
      foundPromise.then(
        function callbackSuccess(res) {
          self.found = res;
          if (self.found.length > 0) {
            self.badQuery = "";
            self.error = false;
          } else {
            self.badQuery = self.searchTerm;
            self.error = true;
          }
        },
        function callbackFail(res) {
          console.log("Callback failed...");
        })
    };

    self.onRemove = function(index) {
      self.found.splice(index, 1);
    }
  }

  MenuSearchService.$inject = ["$http", "ApiBasePath"];
  function MenuSearchService($http, ApiBasePath) {
    var self = this;

    self.getMatchedMenuItems = function(searchTerm) {
      return $http(
        {method: "GET",
         url: (ApiBasePath + "/menu_items.json")})
        .then(
          function successCallback(res) {
            var found = [];
            var dishes = res.data.menu_items;
            // use 'name' and 'description'
            for (var i in dishes) {
              if (dishes[i].description.toLowerCase().includes(searchTerm.toLowerCase())) {
                found.push(dishes[i]);
              }
            }
            return found;
          },
          function failureCallback(res) {
            console.log("Error getting data from API...");
          })
    };
  }

  function FoundItemsDirective() {
    var ddo = {
      templateUrl: 'foundItems.html',
      scope: {
        found: '<',
        onRemove: '&',
        badQuery: '<',
        error: '<'
      }
    };
    return ddo;
  }

}());
