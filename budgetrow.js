// JavaScript Document

var budgetRow = function (budgetRowName,editable) {
	var self = this;
	self.amount = ko.observable(0);
	self.name = budgetRowName;
	self.editable = editable;
	
};