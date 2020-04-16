sap.ui.define([
		"sap/ui/core/UIComponent",
		// "sap/ui/Device",
		"covid/19/model/models"
	],
	function(UIComponent, models) {
		"use strict";
		return UIComponent.extend("covid.19.Component", {

			metadata: {
				manifest: "json"
			},

			init: function() {
				//Initialize Base Component of the app
				UIComponent.prototype.init.apply(this, arguments);

				//Initialising router
				// this.getRouter().initialize();

				//set device model
				this.setModel(models.deviceModel(), "device");
				
				//set busy model
				//create busy model
			this.setModel(models.createBusyModel(), "busy");

				//model for country wise data
				var sUrl = "https://corona.lmao.ninja/countries";
				this.setModel(models.covidModel(sUrl), "covid");

				//model for worlwide data
				var sUrlAll = "https://corona.lmao.ninja/all";
				this.setModel(models.covidModel(sUrlAll), "covidAll");

			}

		});
	});