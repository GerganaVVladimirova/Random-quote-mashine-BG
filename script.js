let btn=document.querySelector("#new-quote");
let quote =document.querySelector(".quote");
let person =document.querySelector(".person");

const quotes=[];

function fetchLi() {
    fetch("quotes.json")
      .then(response => response.json())
      .then(data => {
        for (let i = 0; i < data.length; i++) {
          const item = data[i];
          quotes.push(item);
        }
        
      })
  }
  fetchLi();
btn.addEventListener("click",function(){
    let random = Math.floor(Math.random()*quotes.length);
    quote.innerText=`" ${quotes[random].content} "`;
    person.innerText= quotes[random].author;
    console.log()
})





