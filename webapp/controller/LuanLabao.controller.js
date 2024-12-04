sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment",
    "sap/ui/model/json/JSONModel",
], (Controller, Fragment, JSONModel) => {
    "use strict";

    return Controller.extend("mentoria.fiori.ka.zkanoteapp242.controller.LuanLabao", {
        onInit() {
            var oCadastro = new JSONModel({
                Idaluno: '',
                Name: '',
                Photo:''
            })

            var oApp = new JSONModel({
                richValue: ''
            })

            var oResposta = new JSONModel({
				IdTarefa :'',
				IdAluno:'',
                RespostaBody: ''
            })
            
            this.getView().setModel(oCadastro,"oCadastro");    
            this.getView().setModel(oApp,"app");  
            this.getView().setModel(oResposta,"oResposta");                  

        },
        
        onCadAluno: function () {
            var oModel = this.getOwnerComponent().getModel();
            var oCadastro = this.getView().getModel("oCadastro");
            
            console.log("Idaluno:" + oCadastro.oData.Idaluno);
            console.log("Name:" + oCadastro.oData.Name);
            console.log("Photo:" + oCadastro.oData.Photo);

            oModel.create("/ZC_KAUI5_ALUNO ", oCadastro.oData, {
                success: function (oReturn) {
                    console.log(oReturn)
                },
                error: function (oReturn) {
                    console.log(oReturn)
                }
            })
        },
        onMostraResposta: function (oEvent){
            var oTable = this.getView().byId("listTableAtividade");
            var oWidth = oTable.getWidth();
            var oApp = this.getView().getModel("app");
            var oRespostaApp = this.getView().getModel("oResposta");


            if(oWidth == '700px') {
                oTable.setWidth('100%') 
                oApp.setProperty("/richValue", "");
           }else{
                oTable.setWidth('700px') 

                var oItem = oEvent.getSource().getBindingContext().getObject(),
                sIdTarefa = oItem.Idtarefa,
                sId       = 'THVhbkxhYmFv',
                oModel = this.getOwnerComponent().getModel();

                var sId_ = atob(sId);

                oModel.read("/ZC_KAUI5_RESPOSTAS(IdTarefa='" + sIdTarefa + "',IdAluno='"+ sId_ +"')", {
                    success: function (oReturn) {
                        console.log(oReturn)
                        oTable.setBusy(false);
    
                        oApp.setProperty("/richValue", oReturn.RespostaBody);
                        oRespostaApp.setProperty("/IdTarefa", sIdTarefa);
                        oRespostaApp.setProperty("/IdAluno", sId_);
                        oRespostaApp.setProperty("/RespostaBody", 'true');
                        
                    },
                    error: function (oReturn) {
                        console.log(oReturn)
                        oTable.setBusy(false);
                        oRespostaApp.setProperty("/IdTarefa", sIdTarefa);
                        oRespostaApp.setProperty("/IdAluno", sId_);                        
                    }
                })   
           }
        },

		onSalvaResposta:function(oEvent){

            var oModel = this.getOwnerComponent().getModel();
            var oApp = this.getView().getModel("app");
            var oRespostaApp = this.getView().getModel("oResposta");

			var oEntry = {
				IdTarefa :oRespostaApp.oData.IdTarefa,
				IdAluno:oRespostaApp.oData.IdAluno,
                RespostaBody: oApp.oData.richValue
			}

			var sParameter = {
				sucessess: this._handleSuccess,
				error: this._handleError,
			}

            if(oRespostaApp.oData.RespostaBody == 'true'){
                oModel.update("/ZC_KAUI5_RESPOSTAS(IdTarefa='"+ oRespostaApp.oData.IdTarefa +"',IdAluno='"+ oRespostaApp.oData.IdAluno +"')", oEntry, sParameter)
            }else{
                oModel.create("/ZC_KAUI5_RESPOSTAS", oEntry, sParameter)
            }

		},
		_handleSuccess:function(oData){
			console.log(oData);
		},
		_handleError:function(oError){
			var errorMsg = JSON.parse(oError.responseText)
			console.log(errorMsg);
		},
        myRichStatus: function (sText) {
            return sText.length > 0 ? true : false;
        }
    });
});