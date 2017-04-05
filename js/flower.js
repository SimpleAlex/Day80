var canvas = document.getElementsByTagName('canvas')[0];
var ctx = canvas.getContext('2d');
canvas.width=400;
canvas.height=500;
has();
function has(){
    var a,b,c,d,e,r,r2,x,y,yp,yp2,max,kz,bai,tim,han,mai,tx,ty;
    ctx.globalCompositeOperation = "source-over";
    ctx.fillStyle="rgb(29, 29, 29)";
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.globalCompositeOperation = "lighter";
    tim=new Date().getTime()/30;
    ctx.strokeStyle="hsl(158, 59%, 60%)";
    a=0.3+Math.sin(tim/37)*0.8;
    yp=Math.sin(a);
    yp2=Math.cos(a);
    bai=(Math.sin(tim/31)+0.5)*2;
    r=tim/31;
    mai=18;
    b=Math.pow(1.1,bai);
    c=Math.sin(tim/53);
    tx=Math.sin(tim/41)*50*b*c+200;
    ty=Math.cos(tim/41)*50*b*c+200;
    ctx.beginPath();
    ctx.strokeStyle=ctx.fillStyle="hsla("+((tim/3|0)%360)+",60%,60%,0.4)";
    for(d=0;d<mai;d++){
        kz=((1.3-d/mai)*90)|0;
        for(a=0;a<kz;a++){
            b=a/kz*Math.PI;
            c=Math.sin(a/kz*Math.PI);
            max=(c*6+2)|0;
            pr=c/(max-1);
            r2=r-c/2;
            z=a/kz*(1-d/mai*1.2)*250*yp2-80;
            han=(0.00+Math.sin(b*(1-d/mai*0.9)))*100*(1+d/mai);
            for(b=0;b<max;b++){
                x=Math.cos(r2)*han;
                y=Math.sin(r2)*han;
                c=y*yp2+z*yp;
                c=Math.pow(1.1,c/20+bai);
                y=y*c*yp-z*c;
                x*=c;
                ctx.lineTo(x+tx,y+ty);
                r2+=pr;
            }
        }
        r+=1;
    }
    ctx.stroke();
    requestAnimationFrame(has);
}
