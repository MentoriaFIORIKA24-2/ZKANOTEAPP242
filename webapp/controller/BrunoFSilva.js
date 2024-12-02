sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment",
    "sap/ui/model/json/JSONModel",
], (Controller) => {
    "use strict";

    return Controller.extend("mentoria.fiori.ka.zkanoteapp242.controller.BrunoFSilva", {
        onInit() {

            //var oAluno = new JSONModel({
            // "IdAluno": '',
            // "Name": '',
            // "Photo": ''
            // })

            var oAluno = this.getOwnerComponent().getModel();

            this.getView().setModel(oAluno);

            var sPath = "ZSRVB_KAUI5_CAD_TURMA";
            var oParameters = {
                "$orderby": "Idaluno desc",
                "$top": 1
            };

            try {
                const oData = oAluno.read(sPath, oParameters);

                const oView = this.getView();
                const oInput = oView.byId("IdAluno");

                if (oData && oData.results && oData.results.length > 0) {
                    var lastValue = oData.results[0].Idaluno;
                    oInput.setValue(lastValue);
                }
            } catch (oError) {
                console.error("Erro na consulta:", oError);
            }

        },

        onSaveReg: function () {
            var oModel = this.getOwnerComponent().getModel();
            var oAluno = this.getView().getModel("oAluno");

            console.log(oAluno.oData.IdAluno);
            console.log(oAluno.oData.Name);
            console.log(oAluno.oData.Photo);

            oModel.create("/ZC_KAUI5_AL NO", oAluno.oData, {
                success: function (oReturn) {
                    console.log(oReturn)
                },
                error: function (oReturn) {
                    console.log(oReturn)
                }
            })
        }


    });
})