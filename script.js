const apurl="https://api.quotable.io/random";
const q=document.getElementById("q1");
const a1=document.getElementById("a");
async function quote(url){
    const res=await fetch(url);
    var data=await res.json();
    q.innerHTML=data.content;
    a1.innerHTML=data.author;
}
quote(apurl);
function twit(){
    window.open("https://twitter.com/intent/tweet?text= "+ q.innerHTML+"-----by"+a1.innerHTML,"TWITTER WINDOW","width=400px,height=400px");
}