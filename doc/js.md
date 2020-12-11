1. 高度
document.documentElement.clientHeight   // html 可见高度
document.body.clientHeight              // body 可见高度
document.documentElement.scrollHeight   // html 总高度
document.body.scrollHeight              // body 总高度

1.//元素顶端到可见区域顶端的距离
var obj2 = $('.index-tips')[0];
var top2 = obj2.getBoundingClientRect().top; 

1. Array indexOf
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(beasts.indexOf('bison')); // 1

1. ceratejs
var loader = new createjs.LoadQueue(true);
// loader.installPlugin(createjs.Sound);
var imgArray = [];
loader.addEventListener("complete", handleComplete);
loader.addEventListener("progress", handleProgress);
loader.addEventListener("fileload", handleFileLoad);
imgArray = mainLoading().concat(indextiploading());
imgArray.push({ src: cdn_url+"sound/intro.mp3", "id": "intro_sound", "is_loop": false });
imgArray.push({ src: cdn_url+"sound/main.mp3", "id": "main_sound", "is_loop": true });
imgArray.push({ src: cdn_url+"sound/coin.mp3", "id": "coin_sound", "is_loop": false });
for (var k = 1; k < 6; k++) {
    imgArray.push({ src: cdn_url+"sound/" + k + ".mp3", "id": "jie" + k + "_sound", "is_loop": true });
}
loader.loadManifest(imgArray);

1. krpanoSWFObject 


