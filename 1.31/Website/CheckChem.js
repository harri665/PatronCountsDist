KDate = "1/10/2022";
DayofWeek = 0;
CL = [];
ORP = []; 
PH = []; 
TA = []; 
FLOW = []; 
TEMP = []; 
INITIALS = []; 
RadioValue = 3; 
AllTimes = ["Open", "10:30", "12:30", "2:30", "4:30","Close"]
function ReportError(tin) {
    const ErrorText = document.createTextNode(tin); 
    document.getElementById("error").appendChild(ErrorText);  
}
function RemoveError() {
    //errorholder
    document.getElementById("error").remove(); 
    const tempp = document.createElement("p");
    tempp.id = "error"
    document.getElementById("errorholder").appendChild(tempp); 
}
function Setup() {
    eel.SetupChem(); 
}
function RunChem()  {
    
    DayofWeek = new Date(document.getElementById("Date").value).getDay();
    TDate = document.getElementById("Date").value; 
    KDate = String(TDate);
    Submit(); 
    
    if(RadioValue == 3) {
        ReportError("Select Activity or Lap")
        return; 
    } else if (KDate ==""){
        ReportError("Please Enter Date")
        return; 
    } else {
        addPause("Running")
        RemoveError(); 
        AddLines(); 
        eel.ChemCheck(CL, ORP, PH,TA,FLOW,TEMP,INITIALS, TDate, DayofWeek,RadioValue);
        ClearALL();

    }
     
    
}
function ClickLap() {
    console.log(document.getElementById("Actinput").value)
    
}
function ClickAct() {

}
categories = ["CL", "ORP", "PH","TA","FLOW","TEMP","INITIALS"]; 
function Submit() {
    for(let x = 0; x<7; x++){
        eval(categories[x]).length = 0; 
         
    }
    for(let y = 0; y< 7; y++) {
        var Cat = categories[y]
        for(let x =0; x< 6; x++) {
            if(document.getElementById(Cat + String(x+1)).value == "") {
                if(Cat == "INITIALS") {
                    eval(Cat).push("n/a"); 
                } else {
                    eval(Cat).push(""); 
                }
            } else {
                eval(Cat).push(document.getElementById(Cat + String(x+1)).value); 
            }
        }
        console.log(eval(Cat)); 
        console.log(Cat); 
    }
    
    
}
function SelLap() {
    RadioValue =0
}
function SelAct() {
    RadioValue =1 
}
function ClearALL() {
    //document.getElementById("Date").value = ""
    
    allelements = document.getElementsByTagName("input"); 
    for(let x = 0; x< allelements.length; x++) {
        if(allelements[x].type == "text") {
            allelements[x].value = ""; 
        }
    }
}

function AddLines() {
    console.log("itWorked")
    laporchem = "none"; 
    if(RadioValue ==0) {
        laporchem = "LapChemList"
    } else if (RadioValue == 1) {
        laporchem = "ActChemList"
    }
    const BaseELe = document.getElementById(laporchem)
    const Row = document.createElement("tr");
    Row.classList.add("Blank")
    BaseELe.appendChild(Row); 

    const Entry = document.createElement("th");
    Entry.classList.add("ShowPoint")
    const EntryName = document.createTextNode(KDate); 
    Entry.appendChild(EntryName); 
    Row.appendChild(Entry); 

    for(let l =0; l < 5; l++) {
        const Row = document.createElement("tr"); 
        Row.classList.add("RowPoint")
        const RowName = document.createElement("label")
        RowName.classList.add("ShowRowName")
        RowName.appendChild(document.createTextNode(AllTimes[l]))
        Row.appendChild(RowName);
        BaseELe.appendChild(Row); 
        for(let i =0; i<7; i++) {
            const Entry = document.createElement("th");
            Entry.classList.add("ShowPoint")
            entryval = String(eval(categories[i])[l])
            const EntryName = document.createTextNode(entryval); 
            Entry.appendChild(EntryName); 
            Row.appendChild(Entry); 
            
        }
    }



}

function UploadtoDigi() {
    addPause("Uploading!")
    eel.UploadExcel(); 
}
function ReloadClear() {
    
    //window.location = "ChemCheck.html";
    addPause("Clearing");
    eel.ReloadClearChem(); 
}