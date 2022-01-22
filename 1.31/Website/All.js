eel.expose(ClearLoad);
function ClearLoad() {
    document.getElementById("LoadCover").style.display = "none"; 
}

eel.expose(addPause);
eel.expose(ClearPause);
//addPause("Running")
function addPause(textin) {
    console.log("CALLED!!")
    const body = document.body; 
    const div = document.createElement("div"); 
    div.classList.add("PuaseCover"); 
    div.id = "Pause"; 
    const Textp = document.createElement("p"); 
    Textp.id = "PauseText"; 
    const Texttext = document.createTextNode(textin); 
    Textp.appendChild(Texttext); 
    div.appendChild(Textp);
    body.appendChild(div); 

    
}

function ClearPause() {
    document.getElementById("Pause").remove(); 
}


eel.expose(AddDisplay)
function AddDisplay(Headerin,bodyin) {
    //declare everything !!
    const Doc = document.body; 
    const div = document.createElement("div");
    const heading = document.createElement("h1"); 
    const headingingtext = document.createTextNode(Headerin); 
    const body = document.createElement("p"); 
    const bodytext = document.createTextNode(bodyin); 
    const CloseButton = document.createElement("button"); 
    const CloseButtonText = document.createTextNode("CLOSE"); 
    CloseButton.onclick = function() { closeDisplay();  };

    heading.appendChild(headingingtext); 
    body.appendChild(bodytext); 
    CloseButton.appendChild(CloseButtonText); 
    div.appendChild(heading);
    div.appendChild(body); 
    div.appendChild(CloseButton); 
    Doc.appendChild(div); 

    div.classList.add("AddDisplay");
    div.id = "AddDisplay"; 


}
function closeDisplay() {
    document.getElementById("AddDisplay").remove(); 
}
eel.expose(gotoChem);
eel.expose(gotoHome);
eel.expose(gotoHome);
eel.expose(gotoSetup);
function gotoChem() {
    window.location = "ChemCheck.html"
}
function gotoPatron() {
    window.location() = "PatronCheck.html"
}
function gotoHome() {
    window.location = "home.html"

}
function gotoSetup() {
    window.location = "seetup.html"
}
eel.expose(AddArmedWarn)
function AddArmedWarn() {
    const tp = document.createElement("p");
    const tptext = document.createTextNode("ARMED !!!!!")
    tp.classList.add("ArmedWarn"); 
    tp.appendChild(tptext); 
    document.body.appendChild(tp); 

}