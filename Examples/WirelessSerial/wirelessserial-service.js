var util = require('util');

var bleno = require('bleno');
var BlenoPrimaryService = bleno.PrimaryService;

var WsCharacteristic = require('./wirelessserial-characteristic');

function WsService() {
  WsService.super_.call(this, {
    uuid: '01010101010101010101010101010101',
    characteristics: [
      new WsCharacteristic()]
  });
}

util.inherits(WsService, BlenoPrimaryService);

module.exports = WsService;
