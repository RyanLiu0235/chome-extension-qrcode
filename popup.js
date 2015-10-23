document.addEventListener('DOMContentLoaded', function() {

    var text = document.querySelector('.text');
    var code = document.querySelector('.code');
    var tabUrl = chrome.extension.getBackgroundPage().tabUrl;
    text.innerHTML = tabUrl;


    var qrcode = new QRCode(code, {
        width: 210, //设置宽高
        height: 210
    });
    qrcode.makeCode(tabUrl);
});
