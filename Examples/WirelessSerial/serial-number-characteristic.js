var util = require('util');

var bleno = require('bleno');

var BlenoCharacteristic = bleno.Characteristic;
var BlenoDescriptor = bleno.Descriptor;

function SerialNumberCharacteristic() {
  SerialNumberCharacteristic.super_.call(this, {
    uuid: '2a25',
    properties: ['read'],
    value: '0001',
    descriptors: [
      new BlenoDescriptor({
        uuid: '2901',
        value: 'ws(1) serial number'
      })
    ]
  });
}

util.inherits(SerialNumberCharacteristic, BlenoCharacteristic);

module.exports = SerialNumberCharacteristic;
