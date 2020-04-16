sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
], function(JSONModel, Device) {
	"use strict";
	return {

		deviceModel: function() {
			var oModel = new JSONModel(Device);
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		},
		createBusyModel: function() {
			var oModel = new JSONModel({
				busy: true
			});
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		},
		covidModel: function(sUrl) {
			var oModel = new sap.ui.model.json.JSONModel(sUrl);
			return oModel;

		}

	};
});