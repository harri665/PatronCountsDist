function Save() {
    eel.SaveLogin(document.getElementById("username").value, document.getElementById("password").value); 
    eel.SetLoggedInFalse()
    window.location = "home.html"
}

 