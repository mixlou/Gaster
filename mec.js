
var slideB=false; 
var slideMax=210;



function StartMain(){
	NavBlc=document.getElementById("elemsC")
	for (i=0;i<NavMenu.length;i++)  
		NavBlc.innerHTML+='<div class="elem"><div class ="elemT tGui" >'+NavMenu[i].name+'</div></div>' ;
	for (i=0;i<TaskTab.length;i++)  //for Event Man
		drawTask (TaskTab[i]);
	
}


function promBlock(mes){
	
}

function mkTag(tagN="div",Parn,inner=null,classLst=[],ido=null){
	dv = document.createElement(tagN);
	if(classLst.length>0)
		for (i=0;classLst.length;i++) dv.classList.add(classLst[i]);
	if(ido!=null)
		dv.id = ido;
	if(inner!=null)
		dv.innerHTML = inner;
	Parn.appendChild(dv);
	return dv;
}

function reDim(elem,w=null,h=null){
	if(h!=null) elem.style.Height = h+"px"; 
	if(w!=null) elem.style.width = w+"px"; 
	
}
function withNav(st,Lm1,Lm2){
		elem = document.getElementById(st);
	if (slideB==false){
		elem.style.left=Lm1+"px";
	}
	else {
	elem.style.left=Lm2+"px";}
}
function slide (){
	elem = document.getElementById("slide");
	if (slideB==false){
		slideB=true;
		reDim(elem, 0);
	}
	else {
		slideB=false;
		reDim(elem, slideMax);
	}
}

function  task(name,start,end){
	this.name=name;
	this.time.start=start;
	this.time.end=end;
}
function drawTask (task){
	elT = [];
	mainT = document.createElement("div"); mainT.classList.add("task");
	mainT.appendChild(document.getElementById("outer").childNodes[0].cloneNode());
	cn1 = document.createElement("pre"); cn1.classList.add("tCont"); cn1.innerHTML=task.name; mainT.appendChild(cn1);
	cn2 = document.createElement("p");  cn2.classList.add("tCont"); cn2.innerHTML="&#9716 "+task.time.start+" - "+task.time.end; mainT.appendChild(cn2);
	document.getElementById("mainC").appendChild(mainT);
	
	/*cn0 = mkTag ("img",cn); cn0.src="res\ico\edit.png";
	cn1 = mkTag ("pre",cn,null,["tCont"],task.name);
	cn2 = mkTag ("p",cn,null,["tCont"],"&#9716 "+task.time.start+" - "+task.time.start);
	*/
}
