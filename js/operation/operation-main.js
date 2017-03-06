$(function(){
    var fuzhi=$('.application');
    var content=$('#content');

    for(var i=0;i<17;i++){
        content.append(fuzhi.clone(true));
    }

    var applicationTop=document.getElementsByClassName('application-top');
    var applicationTopArr=['景区视频监控系统','智能公共广播系统','停车场管理系统','游客智能分析系统','车船可视化调度系统','智能接警系统','WIFI覆盖系统','检票售票系统','互联网WEB门户',
    '移动端WEB门户','移动端APP','移动端微信公众号','舆情分析系统','景区720°全景漫游系统','景区VR沉浸式交互系统','旅游综合信息发布系统','自然环境监测预警系统','智能防火预警系统'];

    for(var i=0;i<applicationTop.length;i++){
        applicationTop[i].style.background='url(../../img/'+(i+1)+'.png) center 20px no-repeat';
        applicationTop[i].style.backgroundColor='#f1f1f1';
        applicationTop[i].innerHTML=applicationTopArr[i];
    }

    var signimptIn=document.querySelectorAll('.signimpt-in');
    var signimptWord=document.querySelectorAll('.signimpt-word');
    for(var i=0;i<signimptIn.length;i++){
        var randomSign =Math.floor(Math.random()*(3-1+1)+1);
        switch (randomSign) {
            case 1:
                signimptIn[i].classList.add('green-sign');
                signimptWord[i].innerHTML='运行正常';
                break;
            case 2:
                signimptIn[i].classList.add('yellow-sign');
                signimptWord[i].innerHTML='运行缓慢';
                break;
            case 3:
                signimptIn[i].classList.add('red-sign');
                signimptWord[i].innerHTML='系统故障';
                break;
        }
    }
})
