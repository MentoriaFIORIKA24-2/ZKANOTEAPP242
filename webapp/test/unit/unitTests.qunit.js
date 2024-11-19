/* global QUnit */
// https://api.qunitjs.com/config/autostart/
QUnit.config.autostart = false;

sap.ui.require([
	"mentoriafiorika/zkanoteapp242/test/unit/AllTests"
], function (Controller) {
	"use strict";
	QUnit.start();
});