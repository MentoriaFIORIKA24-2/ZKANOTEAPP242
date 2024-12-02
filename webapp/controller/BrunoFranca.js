sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment",
    "sap/ui/model/json/JSONModel",
], (Controller, Fragment, JSONModel) => {
    "use strict";

    return Controller.extend("mentoria.fiori.ka.zkanoteapp242.controller.BrunoFranca", {
        onInit() {
            var oAluno = new JSONModel({
                "Idaluno": '',
                "Name": '',
                "Photo":''
            })
            
            this.getView().setModel(oAluno,"oAluno");   
        },

        onSaveRegister: function(){
            var oModel = this.getOwnerComponent().getModel();
            var oAluno = this.getView().getModel("oAluno");
            
            console.log(oAluno.oData.Idaluno);
            console.log(oAluno.oData.Name);
            console.log(oAluno.oData.Photo);

            oModel.create("/ZC_KAUI5_ALUNO ", oAluno.oData, {
                success: function (oReturn) {
                    console.log(oReturn)
                },
                error: function (oReturn) {
                    console.log(oReturn)
                }
            })            
        }
   
    });
});