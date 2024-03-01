const input = document.getElementById("input");
const ul = document.getElementById("ul");
const li = ul.getElementsByTagName("li");

input.addEventListener ("input", fun)

function fun(){

    const entered = input.value.toUpperCase();

    for ( let i=0;i<li.length;i++){
        const unknown = li[i];
        const list = unknown.textContent.toUpperCase();
        if(list.includes(entered)){
            unknown.style.display="block"
        }else{
            unknown.style.display ="none";
        }
    }
}
