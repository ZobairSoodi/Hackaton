let closebtn = document.getElementById("close");
let placeholder = document.getElementById("ps");
function display(e){
    placeholder.style.display = "none";
    
    if (e == "calendar") {
        document.getElementById("popupcal").style.display = "block";
        document.getElementById("popuptro").style.display = "none";
        document.getElementById("popupskill").style.display = "none";
    } else if(e == "skills"){
        document.getElementById("popupcal").style.display = "none";
        document.getElementById("popuptro").style.display = "none";
        document.getElementById("popupskill").style.display = "block";
    }else if(e == "trophy"){
        document.getElementById("popupcal").style.display = "none";
        document.getElementById("popupskill").style.display = "none";
        document.getElementById("popuptro").style.display = "block";
    }
    
}

function exit(){
    placeholder.style.display = "block";
    document.getElementById("popupcal").style.display = "none";
    document.getElementById("popupskill").style.display = "none";
    document.getElementById("popuptro").style.display = "none";
}