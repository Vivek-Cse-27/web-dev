const data=[{name:"Vivek Barnwal",img:''}]
const pers="";

document.querySelector(".people").innerHTML=pers;
const input=document.querySelector('input');
input.addEventListener('input',function(){
    var matching =data.filter(function(e){
       return e.name.startsWith(input.value);
    })
    var newusers="";
    matching.forEach(function(elem){
        newusers+=`<div class="person">
                <div class="img">
                    <img src="${elem.img}" alt="img">
                </div>
                <h4>${elem.name}</h4>
            </div>`
    })
    document.querySelector(".people").innerHTML=newusers;
})