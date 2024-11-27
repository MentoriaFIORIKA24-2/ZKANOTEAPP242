sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment",
    "sap/ui/model/json/JSONModel",
], (Controller, Fragment, JSONModel) => {
    "use strict";

    return Controller.extend("mentoria.fiori.ka.zkanoteapp242.controller.LuanLabao", {
        onInit() {
            var oCadastro = new JSONModel({
                "Idaluno": '',
                "Name": '',
                "Photo":''
            })
            
            this.getView().setModel(oCadastro,"oCadastro");            
            //let sPath= "/FlightSet(Carrid='AA',Connid='0017',Fldate=datetime'2024-05-23T00%3A00%3A00')";
            //this.getView().bindElement(sPath);
            //this.byId("IdFormCreate").bindElement(oCadastro);
        },
        
        onSave: function () {
            var oModel = this.getOwnerComponent().getModel();
            var oCadastro = this.getView().getModel("oCadastro");
            
            console.log(oCadastro.oData.Idaluno);
            console.log(oCadastro.oData.Name);
            console.log(oCadastro.oData.Photo);

            oModel.create("/ZC_KAUI5_ALUNO ", oCadastro.oData, {
                success: function (oReturn) {
                    console.log(oReturn)
                },
                error: function (oReturn) {
                    console.log(oReturn)
                }
            })

          /*  var oData = {
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
            })*/

        },

		onPressBook:function(oEvent){
			var oDataLine = oEvent.getSource();
            var connid = oEvent.getSource().data("Connid");
            var fldate = oEvent.getSource().data("Fldate");

			var oDataModel = this.getOwnerComponent().getModel();

			var oEntry = {
				Carrid:oDataLine.Carrid,
				Connid:oDataLine.Connid,
				Fldate:oDataLine.Fldate,
                Seatsmax:333,
                Seatsocc:333
			}

			var sParameter = {
				sucessess: this._handleSuccess,
				error: this._handleError,
			}

			oDataModel.create("/UX_C_Booking_TP", oEntry, sParameter)
		},
		_handleSuccess:function(oData){
			console.log(oData.Carrid);
		},
		_handleError:function(oError){
			var errorMsg = JSON.parse(oError.responseText)
			console.log(errorMsg);
		}
    });
});