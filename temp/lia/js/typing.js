  //1.增加div
function addChild(top,snowShape) {
    var div = document.createElement("div");
    div.innerHTML = snowShape;
    div.className = "flake";
    div.style.position = 'absolute';
    div.style.color = 'white';
    div.style.opacity = 0.9;
    div.style.left = parseInt(Math.random() * window.innerWidth) + 'px';
    div.style.top = top + 'px';
    div.style.fontSize = parseInt(Math.random() * 50) + 'px';
    document.body.appendChild(div);
};
//2.雪花自动降落
function autoWipe(snowSpeed,snowShape) {
    var flake = document.getElementsByClassName('flake');
    var timer = setInterval(function () {
        for (var i = 0; i < flake.length; i++) {
            var opacity = flake[i].style.opacity;
            var offsetTop = Number((flake[i].style.top).replace('px',''));
            if (offsetTop < window.innerHeight) {
                offsetTop = offsetTop + snowSpeed;
                opacity = opacity - 0.003;
                flake[i].style.top = offsetTop + 'px';
                flake[i].style.opacity = opacity;
            } else {
                document.body.removeChild(flake[i]);
                addChild(0,snowShape);
            }
        }
    }, 100);
};
//3.形成最后效果
function final(bigSnowParam,snowShape) {
    for (var i = 0; i < bigSnowParam.snowNum; i++) {
        addChild(parseInt(Math.random() * window.innerHeight),snowShape);
    }
    autoWipe(bigSnowParam.snowSpeed,snowShape);
};

//自定义雪参考值
var selfSnowParam = {
    snowNum:100,//值为number
    snowSpeed:5//值为number
};
var selfSnowParam1 = {
    snowNum:100,//值为number
    snowSpeed:8//值为number
};
//5.调用
final(selfSnowParam,'.');
  
  
  
  //打字机效果输出
  let divTyping = document.getElementById('textmain');
  /*
  document.getElementById('textmain').style.color="white";
  document.getElementById('textmain').style.fontSize="25px";
  document.getElementById('textmain').style.whiteSpace="pre";
  document.getElementById('textmain').style.marginLeft = '25px';
  */
  //以上样式代码转至css/style.css,此处留作备份
  
  let i = 0,
    timer = 0,
	//输出文字
    str = 			"Querita Lía"
			+"\n"+	"	Nos hemos conocido por dos semanas"
			+"\n"+	"	Y tengo algo que decirte："
			+"\n"+	"	Realmente,ME GUSTAS TÚ por mucho tiempo"
			+"\n"+	"	Pero,creo que no hablemos más"
			+"\n"+	"	Por que" +"\n";
	strl=			"	我有点尿急要去上个厕所"
			+"\n"+	"	哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈"
			+"\n"+	"	哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈";
  function typing () 
  {
    if (i <= str.length) {
		divTyping.innerHTML = str.slice(0, i++) + '_';//添加光标
		timer = setTimeout(typing, 300);//间隔时间
    }
    else 
	{
		divTyping.innerHTML = str+strl;
		setTimeout(final(selfSnowParam1,'Ja'),1000);
		setTimeout(fool, 2000);//间隔时间
		clearTimeout(timer);
    }
  }
  function fool()
  {
	  while(1==1)
		{
			alert('¡¡¡¡¡Feliz Fool´s day!!!!!jajajajajajajajajajajajajajajajajaja\nBy:万昕睿');
		}
  }

  typing();
  
