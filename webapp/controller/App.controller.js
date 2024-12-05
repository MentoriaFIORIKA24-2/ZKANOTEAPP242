sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel",
  'sap/f/library'
], (Controller, JSONModel, fioriLibrary) => {
  "use strict";

  return Controller.extend("mentoria.fiori.ka.zkanoteapp242.controller.App", {
    onInit() {

      this.getView().setModel(new JSONModel({
        richValue: "",
        layout: fioriLibrary.LayoutType.OneColumn,
      }), "app")

      // this.getOwnerComponent().getRouter().attachBeforeRouteMatched(this.onBeforeRouteMatched, this)

      this.oRouter = this.getOwnerComponent().getRouter();
      this.oRouter.attachRouteMatched(this.onRouteMatched, this);

    },

    onRouteMatched: function (oEvent) {
      var sRouteName = oEvent.getParameter("name"),
        oArguments = oEvent.getParameter("arguments");

      // Save the current route name
      this.currentRouteName = sRouteName;

      if (!oArguments.layout) {
        oArguments.layout = fioriLibrary.LayoutType.OneColumn;
      }

      this.getView().getModel("app").setProperty("/layout", oArguments.layout);
    },
  });
});