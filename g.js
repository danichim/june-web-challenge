function g(){D+=V,A+=B,D<0&&(D=C-1),D>C-1&&(D=0),A<0&&(A=C-1),A>C-1&&(A=0),w.fillStyle="green",w.fillRect(0,0,400,400),w.fillStyle="red";for(var e=0;e<U.length;e++)w.fillRect(U[e].x*T,U[e].y*T,T-2,T-2),U[e].x==D&&U[e].y==A&&(t=5);for(U.push({x:D,y:A});U.length>t;)U.shift();X==D&&Y==A&&(t++,X=Math.floor(Math.random()*C),Y=Math.floor(Math.random()*C)),w.fillStyle="#fff",w.fillRect(X*T,Y*T,T-2,T-2)}function p(t){var e=t.keyCode;37===e?(V=-1,B=0):38===e?(V=0,B=-1):39===e?(V=1,B=0):40===e&&(V=0,B=1)}c=document.getElementById("g"),w=c.getContext("2d"),document.addEventListener("keydown",p),setInterval(g,66),D=A=10,T=C=20,X=Y=15,V=B=0,U=[],t=5;
