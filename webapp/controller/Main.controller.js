sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
], (Controller,
	MessageBox) => {
    "use strict";

    return Controller.extend("mentoria.fiori.ka.zkanoteapp242.controller.Main", {
        onInit() {
        },

        goToTarefas: function (params) {
            this.getOwnerComponent().getRouter().navTo("Task", {layout: "TwoColumnsMidExpanded"})
        },

        onAlunoRemove: function (oEvent) {
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

        },

        onPress: function (oEvent) {
            var oLine = oEvent.getSource().getBindingContext().getObject();
            this.getOwnerComponent().getRouter().navTo(oLine.Idaluno, {layout: "TwoColumnsMidExpanded"});
        }
    });
});