let search_srk;
window.onload=function(){
	addSearchBtn();
	changyongwz();
}
const search_icon=[
		"https://cn.bing.com/favicon.ico","https://cn.bing.com/search?qs=HS&sc=3-0&cvid=F447744AB046481D9F53872DB22DDC59&FORM=QBLH&sp=1&q="
		,"https://www.baidu.com/favicon.ico","https://www.baidu.com/s?tn=request_25_pg&word="
		,"https://www.sogou.com/favicon.ico","https://www.sogou.com/tx?hdq=sogou-site-706608cfdbcc1886&ekv=3&ie=utf8&query="
		,"http://www.google.cn/favicon.ico","https://www.google.com.hk/search?gws_rd=ssl&q="];
//添加搜索引擎的按钮
function addSearchBtn(){

	search_srk=document.getElementById("search_ipt");
	let sb=document.getElementById("search_bg");
	for(let i=0;i<search_icon.length;i+=2){
		let btn=document.createElement("div");
		let img=document.createElement("img");
		img.src=search_icon[i];
		img.className="ssyqicon";
		btn.className="search_btn";
		btn.appendChild(img);
		btn.onclick=function(){
			window.open(search_icon[i+1]+search_srk.value,"_blank");
		};
		sb.appendChild(btn);
		
	}
}

function changyongwz(){
	const iconurl="favicon.ico"
	const urls=[[
		"GitHub","https://github.com/","",
		//"Android开发工具","https://www.androiddevtools.cn/","https://www.androiddevtools.cn/static/image/favicon.ico",
		"Gradle Distributions","https://services.gradle.org/distributions/","https://services.gradle.org/favicon.ico",
		"CSDN","https://www.csdn.net/","",
		"简书","https://www.jianshu.com/",""
	],[
		"哔哩哔哩","https://www.bilibili.com/","",
		"腾讯视频","https://v.qq.com/","",
		"头条-头条号","https://mp.toutiao.com/","",
		"皮皮虾官网","https://mp.pipix.com/","https://s3a.pstatp.com/toutiao/static/media/favicon.9cfbabbf.ico"
	],[
		"百度贴吧","https://tieba.baidu.com/","",
		"百度文库","https://wenku.baidu.com/","",
		"驾考宝典","https://www.jiakaobaodian.com/",""
	],[
		"爱给网","http://www.aigei.com/","",
		"T站-3D模型下载","https://www.thingiverse.com/","",
		"200种渐变配色方案","https://www.sj520.cn/tools/jianbian/","https://www.sj520.cn/favicon.ico",
		"几百种渐变配色方案","https://uigradients.com/#CoolSky","https://uigradients.com/static/images/favicon-32x32.png"
	]];
	let table=document.getElementById("table");
	for(let i=0;i<urls.length;i++){
		let us=urls[i];
		let item=document.createElement("div");
		item.className="item";
		for(let j=0;j<us.length;j+=3){
			let child=document.createElement("div");
			child.className="child";
			child.title=us[j];
			child.onclick=function(){
				window.open(us[j+1],"_blank");
			}
			let img=document.createElement("img");
			img.className="cicon";
			if(us[j+2]!=""){
				img.src=us[j+2];
			}else{
				img.src=us[j+1]+iconurl;
			}
			child.appendChild(img);
			item.appendChild(child);
		}
		table.appendChild(item);
	}
}


function onKeyPress(e) {
    var keyCode = null;
    if(e.which){
        keyCode = e.which;
    }else if(e.keyCode){
        keyCode = e.keyCode;
	}
    if(keyCode == 13){
        window.open(search_icon[3]+search_srk.value,"_blank");
        return false;
    }
    return true;
}