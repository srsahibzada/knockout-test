// JavaScript Document

var budgetViewModel = function () {
	var self = this;
	self.spendingCategories = ko.observableArray([]);
	/*hard coded for mockup purposes*/
	self.income = ko.observable(0);
	
	//self.categories.push(self.initialAmount());
	//self.spendingCategories().push(ko.observable(new budgetRow("Income",true)));
	self.spendingCategories().push(ko.observable(new budgetRow("Utilities",true)));
	self.spendingCategories().push(ko.observable(new budgetRow("Cable",true)));
	self.spendingCategories().push(ko.observable(new budgetRow("Rent",true)));
	self.spendingCategories().push(ko.observable(new budgetRow("Car", true)));
	

	self.totalSpent = ko.computed(function() {
		var sum = 0;
		for (var i = 0; i < self.spendingCategories().length; i++) {
			//console.log(self.spendingCategories()[i]());
			sum += Number(self.spendingCategories()[i]().amount());
		}
		return sum;
	},this);
};

