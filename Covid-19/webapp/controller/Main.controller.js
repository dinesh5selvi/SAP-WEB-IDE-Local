sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"covid/19/formatter/formatter",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function(Controller, formatter, Filter, FilterOperator) {
	"use strict";
	return Controller.extend("covid.19.controller.Main", {
		formatter: formatter,

		onInit: function() {
			//set table state to busy until data is loaded in the model
			var oDataLoading = this.getView().getModel("covid").dataLoaded();
			oDataLoading.then(function() {
				this.getView().getModel("busy").setProperty("/busy", false);
			}.bind(this));

		},

		onSearch: function(oEvent) {
			var oSearch = oEvent.getParameter("newValue");
			var oFilter = new Filter("country", FilterOperator.Contains, oSearch);
			var aFilter = [oFilter];
			var oTable = this.getView().byId("idTable");
			oTable.getBinding("items").filter(aFilter);
		}
	});

});