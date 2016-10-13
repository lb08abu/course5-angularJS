
(function() {
  'use strict';

  angular.module("RepoApp", [])
  .controller("AssignmentContoller", AssignmentContoller)
  .component("assignments", {
    templateURL: "assignments.html",
    bindings: {
      assignments: "<"
    }
  });

  function AssignmentContoller() {
    var self = this;
    var assDir = "assignments/";

    self.assignments = [
      {name: "Assignment 1", title: "Lunch Checker", dir: "assignment1",
       description: "By making use of Angular filters produce a text input for comma separated items and an associated 'Check If Too Much' button. If there are more than 3 items in the text field then an output message of 'Too much!' is displayed. If there are no valid items then the message shows 'Please enter data first'. Otherwise the message is 'Enjoy!'."},
      {name: "Assignment 2", title: "Shopping List Check Off", dir: "assignment2",
       description: "Create a 'check-off' shopping list utilising the .service attribute in Angular. The page shows two lists: a 'to buy' list and a 'bought' list. Next to each item in the to buy list there's a button for 'bought' which upon clicking moves the item into the bought list. I also implemented an 'un-buy' button in the bought list which likewise moves the item back to the 'to buy' list."},
      {name: "Assignment 3", title: "Narrow Down Menu Choice", dir: "assignment3",
       description: "In this assignment we use a custom directive to display a list of items from a menu that contain a given search term. The custom directive has an isolate scope and we pass in values and functions via various data binding methods. We use promises to fetch a JSON file from a RESTFUL API and the search term is then used to filter for entries that contain the given term. If no such entries are found or if the user does not enter a term then an error message is displayed and all the list HTML is hidden using ng-if."},
    ];

    for (var i in self.assignments) {
      self.assignments[i].assignmentPath = getAssignmentPath(i);
      self.assignments[i].imagePath = getImagePath(i);
    }

    function getAssignmentPath(index) {
      return assDir + self.assignments[index].dir + "/index.html";
    }

    function getImagePath(index) {
      return "img/" + self.assignments[index].dir + "-screenshot.png"
    }

    console.log(self.assignments);
  }
}());
