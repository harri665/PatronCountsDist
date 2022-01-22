function Setup() {
    eel.SetupSettings(); 
}
function save() {

    eel.SetArm(document.getElementById("test").checked)

}
eel.expose(SetArmedCheck)
function SetArmedCheck(Bin) {
    document.getElementById("test").checked = Bin
}