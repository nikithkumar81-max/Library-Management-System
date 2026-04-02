function validateContact(){
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let mess=document.getElementById("mess").value;
    if(name=="" || email =="" || mess==""){
        alert("please fill all fields");
        return false;
    }
    alert("Message sent");
    return true;
}

function countchars(){
    let text =document.getElementById("mess").value;
    let length=text.length;

    document.getElementById("count").innerHTML=length+"characters";
}