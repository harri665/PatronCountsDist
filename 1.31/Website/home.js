function Setup() {
    
    eel.SetupHome();
}
function test() {

    //console.log(document.getElementById("RecCenterSel").value); 
    //document.getElementById("RecCenterSel").value = "Carla"; 
}
eel.expose(LoadRecCenter); 
function LoadRecCenter(RecIn) {
    document.getElementById("RecCenterSel").value = RecIn;
}
function ClickSelect() {
    TRecCenter = ""; 
    TRecCenter =document.getElementById("RecCenterSel").value; 
    eel.SetRecCenter(TRecCenter) 
    console.log("Slect clicked");
    eel.SaveLoginA(); 
}
UpdateLogVers = 0;  
UpdateLogLogs = []; 
eel.expose(AddModal); 
function AddModal(NewVers, UpdateLogs) {
    console.log(NewVers);
    console.log(UpdateLogs);
    const Doc = document.body; 
    const Modal = document.createElement("div"); 
    Modal.classList.add("Modal");
    const Version = document.createElement("h1");
    const VersionText = document.createTextNode("UPDATE: Version: " + NewVers + " is available at")
    const Linka = document.createElement("a"); 
    const LinkText = document.createTextNode("https://github.com/harri665/PatronCountsDist");
    Linka.href = "https://github.com/harri665/PatronCountsDist"
    Linka.appendChild(LinkText);  
    Version.id = "VersionID"; 
    Version.appendChild(VersionText); 
    const UpdateName = document.createElement("p"); 
    const UpdateNameText = document.createTextNode(UpdateLogs[0]); 
    UpdateName.appendChild(UpdateNameText); 
    const ListofUpdate = document.createElement("ul")
    Doc.appendChild(Modal); 
    Modal.appendChild(Version); 
    Modal.appendChild(Linka)
    Modal.appendChild(UpdateName); 
    Modal.appendChild(ListofUpdate);

    for(let x = 1; x < (UpdateLogs.length); x++) {
        const ListTag = document.createElement("li"); 
        const UpdatePoint = document.createElement("p"); 
        const UpdatePointText = document.createTextNode(UpdateLogs[x]); 

        UpdatePoint.appendChild(UpdatePointText); 
        ListTag.appendChild(UpdatePoint)
        ListofUpdate.appendChild(ListTag); 
    }
    

}

function ReportBug() {
    eel.ReportBug();
}

function AddModalOnTop(NewVers, UpdateLogs) {
    console.log(NewVers);
    console.log(UpdateLogs);
    const Doc = document.body; 
    const Modal = document.createElement("div"); 
    Modal.classList.add("ModelOver");
    Modal.id = "ModalOver"; 
    const Version = document.createElement("h1");
    const VersionText = document.createTextNode("Version: " + NewVers );

    Version.id = "VersionID"; 
    Version.appendChild(VersionText); 
    const UpdateName = document.createElement("p"); 
    const UpdateNameText = document.createTextNode(UpdateLogs[0]); 
    UpdateName.style.fontSize = "5em"; 
    UpdateName.style.fontWeight = "900"; 
    UpdateName.appendChild(UpdateNameText); 
    const ListofUpdate = document.createElement("ul")
    const CloseButton = document.createElement("button"); 
    const CloseButtonText = document.createTextNode("CLOSE"); 
    CloseButton.appendChild(CloseButtonText); 
    CloseButton.id = "close"; 
    CloseButton.onclick = function() { CloseModal();  };
    Doc.appendChild(Modal); 
    Modal.appendChild(CloseButton); 
    Modal.appendChild(Version); 
    Modal.appendChild(UpdateName); 
    Modal.appendChild(ListofUpdate);

    for(let x = 1; x < (UpdateLogs.length); x++) {
        const ListTag = document.createElement("li"); 
        const UpdatePoint = document.createElement("p"); 
        const UpdatePointText = document.createTextNode(UpdateLogs[x]); 

        UpdatePoint.appendChild(UpdatePointText); 
        ListTag.appendChild(UpdatePoint)
        ListofUpdate.appendChild(ListTag); 
    }
    

}
function OpenInstruction() {
    document.getElementById("InstructionsModal").style.display = "block"; 

}
function CloseInstModal() {
    document.getElementById("InstructionsModal").style.display = "none"; 
}
function CloseModal() {
    document.getElementById("ModalOver").remove(); 
}
function CallAddModalOver() {
    AddModalOnTop(UpdateLogVers,UpdateLogLogs)
}
eel.expose(SetUpdateLogs); 
function SetUpdateLogs(VersionIn, UpdateLogs) {
    UpdateLogVers = VersionIn; 
    UpdateLogLogs = UpdateLogs; 
}
eel.expose(LoadSetupPage)
function LoadSetupPage() {
    window.location = "seetup.html"
}

function DisplayInstruction() {

}

function Test() {
    AddDisplay("Finished", "patronCount complete !")
}
eel.expose(Issues)
function Issues(Issuesin) {
    const main = document.getElementById("KnownIssues");

    curbox = 0; 
    for(let x =1; x < Issuesin.length; x++) {
        
        if(String(Issuesin[x]).search("HEAD") != -1 ) {
            curbox +=1 
            tstring = String(Issuesin[x]).replace("HEAD",""); 
            console.log(tstring)

            
            const h1 = document.createElement("h1");
            const h1text = document.createTextNode(tstring);
            const ul = document.createElement("ul");
            h1.appendChild(h1text);
            main.appendChild(h1);
            main.appendChild(ul); 
            ul.id = "issuesul" + String(curbox); 

            
        } else {
            const issueli = document.createElement("li"); 
            const p = document.createElement("p"); 
            const ptext = document.createTextNode(Issuesin[x])
            p.appendChild(ptext); 
            issueli.appendChild(p);
            const currentul = document.getElementById("issuesul" + String(curbox))
            currentul.appendChild(issueli); 

        }
    }
}
