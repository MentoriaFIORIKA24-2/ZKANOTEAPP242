sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("mentoria.fiori.ka.zkanoteapp242.controller.Task", {
        onInit() {
        },

        onListUpdate: function (oEvent) {
            this.lastIdtarefa = oEvent.getParameter("total");

        },

        onSave: function () {
            var oModel = this.getOwnerComponent().getModel();

            var oData = {
                Idturma: "FIORI_24_2",
                Idtarefa: (this.lastIdtarefa + 1).toString(),
                Title: this.byId("titleAtividade").getValue()
            }

            oModel.create("/ZC_KAUI5_ATIVIDADES", oData, {
                success: function (oReturn) {
                    alert("OK")
                },
                error: function (oReturn) {
                    alert("Erro")
                }
            })

        }
    });
});