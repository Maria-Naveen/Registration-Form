function validate(){
    let fname = document.getElementById("fname");
    let lname = document.getElementById("lname");
    if(fname.value.trim() ==""){
        alert("Please fill the first name!");
        fname.style.border="solid 3px red";
        document.getElementById("flabel").style.visibility="visible";
        return false;
    }
    else if(lname.value.trim()==""){
        alert("Please fill the last name!");
        lname.style.border="solid 3px red";
        document.getElementById("llabel").style.visibility="visible";
        return false;
    }
    return true;
    
}