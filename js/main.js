

function changeData(){

var doller = document.getElementById("Doller").value ;
var result = document.getElementById("result");

if(isNaN(doller)){
    result.innerHTML = "Enter The Number Not Text" ;
    return false ;
}else if(doller <= 0){
    result.innerHTML = "Enter The Positve Number" ;
    return false ;
}else{
    result.innerHTML = doller * 50 + "Egyption Bound";
    return false ;
}

}



var counter = 0 ;
function incNumber(){
    counter = counter + 1 ;
    document.getElementById("demo").innerHTML= counter ;
}

function decNumber(){
    counter = counter - 1 ;
    document.getElementById("demo").innerHTML= counter ;
}