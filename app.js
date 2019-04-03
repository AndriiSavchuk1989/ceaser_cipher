var fs = require('fs');
var ceaser = require('./index');
var shift = 3;
var plaintext = "wkh txlfn eurzq ira mxpsv ryhu wkh odcb grj";
var encryptedText = ceaser.encrypt(shift, plaintext);
var decryptedText = ceaser.decrypt(shift, plaintext);

fs.writeFileSync('decrypted.txt', decryptedText);
