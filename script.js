
let qrText = document.getElementById("inputbox");
let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImg");
function getQr(){
 
    qrImage.src= "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+qrText.value;
}