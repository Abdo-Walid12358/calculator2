var result_element = document.querySelector(".result"),
btns = document.querySelectorAll(".body button");
var isResult = false;

btns.forEach(btn => {
    btn.onclick = function(){
        if(isResult){
            result_element.innerHTML = '';
            isResult = false;
        }
        if(btn.innerHTML == "Del"){
            result_element.innerHTML = result_element.innerHTML.substring(0, result_element.innerHTML.length - 1);
        }
        else if(btn.innerHTML == "C"){
            result_element.innerHTML = '';
        }
        else if(btn.innerHTML == "="){
            if(result_element.innerHTML.trim() != ''){
                try{
                    var result = eval(result_element.innerHTML);
                    result_element.innerHTML = result;
                    isResult = true;
                }catch(err){
                    window.alert("Wrong!");
                    result_element.innerHTML = '';
                }
            }
        }
        else{
            result_element.innerHTML += btn.innerHTML;
        }
    }
})