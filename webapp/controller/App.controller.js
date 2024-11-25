sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel"
], (Controller,
  JSONModel) => {
  "use strict";

  return Controller.extend("mentoria.fiori.ka.zkanoteapp242.controller.App", {
    onInit() {
      this.getView().setModel(new JSONModel({
        richValue: ""
      }), "app")
    }
  });
});