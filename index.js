module.exports = {
    encrypt: function encrypt(shift, plaintext) {
        return ceaserCipher(shift, plaintext);
    }
    ,
    decrypt: function decrypt(shift, encryptedText) {
        return ceaserCipher((26 - shift) % 26, encryptedText);
    }
}

function ceaserCipher(shift, input) {
    var output = '';
    var length = input.length;

    for (var i = 0; i < length; i++) {

        var c = input.charCodeAt(i);

        if (c == 231)
            c = 99;
        if (c == 199)
            c = 67;

        if (c >= 65 && c <=  90) {
            //uppercase
            output += String.fromCharCode((c - 65 + shift) % 26 + 65)
        }
        else if (c >= 97 && c <= 122) {
            //lowercase
            output += String.fromCharCode((c - 97 + shift) % 26 + 97)
        }
        else {
            output += input.charAt(i)
        }

    }
    return output
}

