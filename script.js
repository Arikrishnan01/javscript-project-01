// // const newYeaar=new Date();
// // alert(newYeaar);
// const currentYear=new Date().getFullYear();
// // console.log(currentYear+1);
// const newYear=new Date(`Jan 1 ${currentYear+1}`);
// // console.log(newYear);
// const curentDate=new Date();
// // console.log(newYear-curentDate);
// const diff=newYear-curentDate;
// const d=Math.floor(diff/1000/60/60/24);
// // console.log(d);
// const h=Math.floor((diff/1000/60/60)%24);
// // console.log(h);
// const m=Math.floor((diff/1000/60)%60);
// // console.log(m);
// const s=Math.floor((diff/1000)%60);
// // console.log(s);
// console.log(`${d} ${h} ${m} ${s}`);

const days=document.querySelector("#days");
const hours=document.querySelector("#hours");
const minutes=document.querySelector("#minutes");
const seconds=document.querySelector("#seconds");
function UppdateTime(){
    const currentYear=new Date().getFullYear();
    const newYear=new Date(`Jan 1 ${currentYear+1}`);
    const curentDate=new Date();
    const diff=newYear-curentDate;
    const d=Math.floor(diff/1000/60/60/24);
    const h=Math.floor((diff/1000/60/60)%24);
    const m=Math.floor((diff/1000/60)%60);
    const s=Math.floor((diff/1000)%60);
    days.innerHTML=d<10?"0"+d:d;
    hours.innerHTML=h<10?"0"+h:h;
    minutes.innerHTML=m<10?"0"+m:m;
    seconds.innerHTML=s<10?"0"+s:s;
} 
setInterval(()=>{
    UppdateTime()
},1000); 
 

