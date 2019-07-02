
c=document.getElementById("g");
w=c.getContext("2d");
document.addEventListener("keydown",p);
setInterval(g,66);
D=A=10;
T=C=20;
X=Y=15;
V=B=0;
U=[];
t = 5;
function g() {
	D+=V;
	A+=B;
	if(D<0) {
		D= C-1;
	}
	if(D>C-1) {
		D= 0;
	}
	if(A<0) {
		A= C-1;
	}
	if(A>C-1) {
		A= 0;
	}
	w.fillStyle="green";
	w.fillRect(0,0,400,400);
	w.fillStyle="red";
	for(var i=0;i<U.length;i++) {
		w.fillRect(U[i].x*T,U[i].y*T,T-2,T-2);
		if(U[i].x==D && U[i].y==A) {
			t = 5;
		}
	}
	U.push({x:D,y:A});
	while(U.length>t) {
		U.shift();
	}
	if(X==D && Y==A) {
		t++;
		X=Math.floor(Math.random()*C);
		Y=Math.floor(Math.random()*C);
	}
	w.fillStyle="#fff";
	w.fillRect(X*T,Y*T,T-2,T-2);
}
function p(e) {
	var k = e.keyCode;
	if (k === 37) {
		V=-1;B=0;
	} else if(k === 38) {
		V=0;B=-1;
	} else if (k === 39) {
		V=1;B=0;
	} else if (k === 40) {
		V=0;B=1;
	}
}