window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0)
})

function fn1()
{
    var a = document.getElementById("text-input").value;
    var b = parseInt(a);
    var count = 0;
    var changeValue = document.querySelector("#countInput"); 
    for(i=0; i<a; i++){
        count = count + b ;
    }
    changeValue.textContent = count
}

function fn2(){
    var changeValue = document.querySelector("#countInput");
    document.getElementById("text-input").value='0';
    changeValue.textContent = '0';
}