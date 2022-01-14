function Setup() {
    eel.home();
}
eel.expose(AddModal); 
function AddModal(NewVers, UpdateLogs) {
    console.log(NewVers);
    console.log(UpdateLogs);
    const Doc = document.body; 
    const Modal = document.createElement("div"); 
    const Version = document.createElement("p");
    const VersionText = document.createTextNode("NEW VERSION AVAILABLE !!! Version: " + NewVers + " is available at https://github.com/harri665/PatronCountsDist")
    Version.id = "VersionID"; 
    Version.appendChild(VersionText); 
    const UpdateName = document.createElement("p"); 
    const UpdateNameText = document.createTextNode(UpdateLogs[0]); 
    UpdateName.appendChild(UpdateNameText); 
    const ListofUpdate = document.createElement("ul")
    Doc.appendChild(Modal); 
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