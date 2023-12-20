function reverse(){
    var str= document.getElementById("t1").value;
    var rev = str.split('').reverse().join('');
    str.value = rev;
    
    document.getElementById("p1").innerHTML = rev;
}
