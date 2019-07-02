
c=document.getElementById("g");
w=c.getContext("2d");
document.addEventListener("keydown",p);
setInterval(g,66);
px=py=10;
gs=tc=20;
ax=ay=15;
xv=yv=0;
tr=[];
t = 5;
function g() {
	px+=xv;
	py+=yv;
	if(px<0) {
		px= tc-1;
	}
	if(px>tc-1) {
		px= 0;
	}
	if(py<0) {
		py= tc-1;
	}
	if(py>tc-1) {
		py= 0;
	}
	w.fillStyle="green";
	w.fillRect(0,0,400,400);
	w.fillStyle="red";
	for(var i=0;i<tr.length;i++) {
		w.fillRect(tr[i].x*gs,tr[i].y*gs,gs-2,gs-2);
		if(tr[i].x==px && tr[i].y==py) {
			t = 5;
		}
	}
	tr.push({x:px,y:py});
	while(tr.length>t) {
		tr.shift();
	}
	if(ax==px && ay==py) {
		t++;
		ax=Math.floor(Math.random()*tc);
		ay=Math.floor(Math.random()*tc);
	}
	w.fillStyle="#fff";
	w.fillRect(ax*gs,ay*gs,gs-2,gs-2);
}
function p(e) {
	var t = e.keyCode;
	if (t === 37) {
		xv=-1;yv=0;
	} else if(t === 38) {
		xv=0;yv=-1;
	} else if (t === 39) {
		xv=1;yv=0;
	} else if (t === 40) {
		xv=0;yv=1;
	}
}