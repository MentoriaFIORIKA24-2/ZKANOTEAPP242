sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
], (Controller,
	MessageBox) => {
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

        },

        onTaskRemove: function (oEvent) {
            var sKey = oEvent.getParameter("listItem").getBindingContext().getPath();

            MessageBox.confirm("Confirma a exclusão", {
				onClose: function (sAction) {
					 if(sAction === MessageBox.Action.OK){
                        this.getOwnerComponent().getModel().remove(sKey, {
                            success: function (oReturn) {
                                alert("OK")
                            },
                            error: function (oReturn) {
                                alert("Erro")
                            }
                        })
                     }
				}.bind(this)
            })

        }
    });
});