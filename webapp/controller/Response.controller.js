sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
  ], (Controller, JSONModel) => {
    "use strict";
  
    return Controller.extend("mentoria.fiori.ka.zkanoteapp242.controller.Response", {
      onInit() {

      },

      /**
       * @override
       */
      onAfterRendering: function() {
        
        var response = this.getView().getModel("app").getProperty("/richValue");
        alert(response);
      
      }
  

    });
  });