import"./assets/styles-e33a6f3a.js";import{f as i,i as l}from"./assets/vendor-651d7991.js";const m=document.querySelector("#datetime-picker"),o=document.querySelector("button"),h=document.querySelector("[data-days]"),f=document.querySelector("[data-hours]"),y=document.querySelector("[data-minutes]"),p=document.querySelector("[data-seconds]");let r;o.disabled=!0;const S={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){e[0]<new Date?(o.disabled=!0,l.show({message:"Please choose a date in the future",position:"topRight",color:"red"})):(o.disabled=!1,r=e[0].getTime())}};i(m,S);o.addEventListener("click",()=>{let e=setInterval(()=>{let n=r-new Date().getTime(),t=b(n);h.textContent=`${s(t.days)}`,f.textContent=`${s(t.hours)}`,y.textContent=`${s(t.minutes)}`,p.textContent=`${s(t.seconds)}`,n-=1e3,n<=0&&(clearInterval(e),o.disabled=!1)},1e3)});function b(e){const a=Math.floor(e/864e5),c=Math.floor(e%864e5/36e5),d=Math.floor(e%864e5%36e5/6e4),u=Math.floor(e%864e5%36e5%6e4/1e3);return{days:a,hours:c,minutes:d,seconds:u}}function s(e){return e.toString().padStart(2,"0")}
//# sourceMappingURL=commonHelpers.js.map
