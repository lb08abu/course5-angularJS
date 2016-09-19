
(function() {
  'use strict';

  angular.module("RepoApp", [])
  .controller("AssignmentContoller", AssignmentContoller);

  function AssignmentContoller() {
    var self = this;
    var assDir = "assignments/";

    self.assignments = [
      {name: "Assignment 1", title: "Lunch Checker", dir: "assignment1",
       description: "By making use of Angular filters produce a text input for comma separated items and an associated 'Check If Too Much' button. If there are more than 3 items in the text field then an output message of 'Too much!' is displayed. If there are no valid items then the message shows 'Please enter data first'. Otherwise the message is 'Enjoy!'."},
      {name: "Assignment 2", title: "Shopping List Check Off", dir: "assignment2",
       description: "Create a 'check-off' shopping list utilising the .service attribute in Angular. The page shows two lists: a 'to buy' list and a 'bought' list. Next to each item in the to buy list there's a button for 'bought' which upon clicking moves the item into the bought list. I also implemented an 'un-buy' button in the bought list which likewise moves the item back to the 'to buy' list."},
    ];

    self.getAssignmentDir = function(index) {
      return assDir + self.assignments[index].dir + "/index.html";
    }

    console.log(self.getAssignmentDir(0));
  }
}());
