function loaddatetime(){
    s=setInterval(ldt,1);
}
function ldt(){
    var d=new Date();
    
    var dd=document.getElementById("date");
    dd.innerHTML="Date: "+d.toDateString();
    dd.style.marginLeft="5%";


    var tt=document.getElementById("time");
    tt.innerHTML="Time: "+d.toLocaleTimeString();
    tt.style.marginRight="1%";
}

