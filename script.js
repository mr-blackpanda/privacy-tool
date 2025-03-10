// Function to handle AES Encryption
function encryptText() {
    let secretKey = document.getElementById('secretKeyEncrypt').value;
    let inputText = document.getElementById('inputTextEncrypt').value;

    if (!secretKey || secretKey.length !== 16) {
        alert('Please enter a valid 16-character secret key!');
        return;
    }

    // Encrypt using AES
    let encrypted = CryptoJS.AES.encrypt(inputText, secretKey).toString();

    // Display the full encrypted result
    document.getElementById('outputTextEncrypt').value = encrypted;
}

// Function to handle AES Decryption
function decryptText() {
    let secretKey = document.getElementById('secretKeyDecrypt').value;
    let inputText = document.getElementById('inputTextDecrypt').value;

    if (!secretKey || secretKey.length !== 16) {
        alert('Please enter a valid 16-character secret key!');
        return;
    }

    // Decrypt using AES
    let decrypted = CryptoJS.AES.decrypt(inputText, secretKey).toString(CryptoJS.enc.Utf8);

    // Display the result in the output field
    if (decrypted === "") {
        alert("Decryption failed. Please check the input text and key.");
    } else {
        document.getElementById('outputTextDecrypt').value = decrypted;
    }
}

// Function to copy the output to clipboard
function copyToClipboard(outputId) {
    let outputText = document.getElementById(outputId);
    outputText.select();
    document.execCommand('copy');
    alert('Copied to clipboard!');
}
