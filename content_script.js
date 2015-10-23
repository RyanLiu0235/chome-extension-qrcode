// var _img = document.createElement('img');
// var _src = document.createAttribute('src');
// _src.value = 'http://g.hiphotos.baidu.com/image/pic/item/d788d43f8794a4c2dbfafb2a0cf41bd5ac6e39d1.jpg';
// _img.setAttributeNode(_src);
// document.body.appendChild(_img)
var url = window.location.href;
chrome.runtime.sendMessage({url: url})
