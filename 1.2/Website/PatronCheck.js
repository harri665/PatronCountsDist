

//Lap Swim 
//Spectators
//Adult Swim/River
var LWeekday = ["5:00AM","6:00AM","7:00AM","8:00AM","9:00AM","10:00AM","11:00AM","12:00AM","1:00PM","2:00PM","2:00PM","3:00PM","3:00PM","4:00PM","4:00PM","4:00PM","5:00PM","5:00PM","6:00PM","6:00PM","6:00PM","7:00PM","7:00PM","7:00PM","8:00PM","8:00PM",]
var AWeekday = ["5:00AM","6:00AM","7:00AM","8:00AM","9:00AM","9:00AM","9:00AM","10:00AM","10:00AM","10:00AM","11:00AM","11:00AM","12:00PM","12:00PM","1:00PM","1:00PM","2:00PM","2:00PM","3:00PM","3:00PM","4:00PM","4:00PM","4:00PM","5:00PM","5:00PM","6:00PM","6:00PM","6:00PM","7:00PM","7:00PM","8:00PM","8:00PM",]
var LFriday = ["5:00AM ","6:00AM ","7:00AM ","8:00AM ","9:00AM ","10:00AM ","11:00AM ","12:00PM ","1:00PM ","2:00PM ","2:00PM ","3:00PM ","3:00PM ","4:00PM ","4:00PM ","5:00PM ","5:00PM ","6:00PM ","6:00PM ","7:00PM ","7:00PM ",]
var AFriday = ["5:00AM","6:00AM","7:00AM","8:00AM","9:00AM","9:00AM","9:00AM","10:00AM","10:00AM","10:00AM","11:00AM","11:00AM","12:00PM","12:00PM","1:00PM","1:00PM","2:00PM","2:00PM","3:00PM","3:00PM","4:00PM","4:00PM","5:00PM","5:00PM","6:00PM","6:00PM","7:00PM","7:00PM",]
var LWeekend = ["8:00AM","9:00AM","10:00AM","10:00AM","11:00AM","12:00PM","12:00PM","1:00PM","1:00PM","2:00PM","2:00PM","3:00PM","3:00PM","4:00PM","4:00PM",]
var AWeekend = ["8:00AM","9:00AM","10:00AM","10:00AM","10:00AM","11:00AM","11:00AM","12:00PM","12:00PM","1:00PM","1:00PM","2:00PM","2:00PM","3:00PM","3:00PM","4:00PM","4:00PM",]
var LapCount = 0; 
var ActCount =0; 

function LoadMainPage() {
    window.location = "PatronCheck.html"
}
function LoadSetupPage() {
    window.location = "seetup.html"
}
eel.expose(LoadMainPage)
eel.expose(LoadSetupPage)
function runMain() {
    eel.StartPro(); 
}
function RunProgram() {
    var DateIn =  document.getElementById("date").value; 
    var DayofWekk = new Date(DateIn).getDay(); 
    //console.log(document.getElementById("date").value); 
    //console.log(DayofWekk); 
    if(DayofWekk == 0 ) { // Monday
        CreateInputs(26,32);  
        LapCount = 26; 
        ActCount = 32;   
    }
    if(DayofWekk == 1 ) { // Tuesday
        CreateInputs(26,32);  
        LapCount = 26; 
        ActCount = 32;   
    }
    if(DayofWekk == 2 ) { //Wednesday
        CreateInputs(26,32);  
        LapCount = 26; 
        ActCount = 32;   
    }
    if(DayofWekk == 3 ) { // Thursday 
        CreateInputs(26,32);  
        LapCount = 26; 
        ActCount = 32;   
    }
    if(DayofWekk == 4 ) { // Firday 
        CreateInputs(21,28);  
        LapCount = 21; 
        ActCount = 28;   
    }
    if(DayofWekk == 5 ) { // Sat
        CreateInputs(15,17);  
        LapCount = 15; 
        ActCount = 17;   
    }
    if(DayofWekk == 6 ) { // Sun 
        CreateInputs(15,17);  
        LapCount = 15; 
        ActCount = 17;   
    }

}
function CloseProgram() {
    eel.EndProgram(); 
    window.open('','_self').close()
}

function CreateInputs(LapIn, ActIn) {
        
    //console.log("LapIn");
    //console.log(LapIn); 
    //Create the word LAP 
    const para2 = document.createElement("p");
    const node2 = document.createTextNode("Lap");
    para2.appendChild(node2);
    const Doc = document.getElementById("div1");
    Doc.appendChild(para2);

    //ul
    //  ul
    //      li
    //          <p>
    //      li
    //          <input>
    for(let x =0; x < LapIn; x++) {
            //set times 
        var Times = [];  
        var TDayofWekk = new Date(document.getElementById("date").value).getDay(); 
            if(TDayofWekk >= 0 && TDayofWekk <= 3) {
                Times = LWeekday; 
            } else if (TDayofWekk == 4) {
                Times = LFriday; 
            } else if (TDayofWekk >4) {
                Times = LWeekend; 
            }
            const OverALLUL = document.createElement("ul"); 
            OverALLUL.className = "Overall"; 
            const TimeLi = document.createElement("li");
            const InputLi = document.createElement("li");  
            TimeLi.className = "ListPoint"; 
            InputLi.className = "ListPoint"; 
            const InputField = document.createElement("input"); 
            InputField.id = "InputLap" + x.toString(); 
            InputField.style = "width:100%; height:100%; display:inline; ";
            const TimeField = document.createElement("label"); 
            const Timefill = document.createTextNode(Times[x]); 
            TimeField.appendChild(Timefill); 
            TimeLi.appendChild(TimeField); 
            InputLi.appendChild(InputField);
            OverALLUL.appendChild(TimeLi);
            OverALLUL.appendChild(InputLi); 
            Doc.appendChild(OverALLUL); 
        }

        

    //Creates the word activiity 
    const Doc1 = document.getElementById("div2");
    const para = document.createElement("p");
    const node = document.createTextNode("Activity");
    para.appendChild(node);
    
    Doc1.appendChild(para);

    for(let x =0; x < ActIn; x++) {
        //console.log(x); 
            //set times 
        var Times = [];  
        var TDayofWekk = new Date(document.getElementById("date").value).getDay(); 
            if(TDayofWekk >= 0 && TDayofWekk <= 3) {
                Times = AWeekday; 
            } else if (TDayofWekk == 4) {
                Times = AFriday; 
            } else if (TDayofWekk >4) {
                Times = AWeekend; 
            }
            const OverALLUL = document.createElement("ul"); 
            OverALLUL.className = "Overall"; 
            const TimeLi = document.createElement("li");
            const InputLi = document.createElement("li");  
            TimeLi.className = "ListPoint"; 
            InputLi.className = "ListPoint"; 
            const InputField = document.createElement("input"); 
            InputField.id = "InputAct" + x.toString(); 
            InputField.style = "width:100%; height:100%; display:inline; ";
            const TimeField = document.createElement("label"); 
            TimeField.style = ""; 
            const Timefill = document.createTextNode(Times[x]); 
            TimeField.appendChild(Timefill); 
            TimeLi.appendChild(TimeField); 
            InputLi.appendChild(InputField);
            OverALLUL.appendChild(TimeLi);
            OverALLUL.appendChild(InputLi); 
            Doc1.appendChild(OverALLUL); 
        }


    //create the button 
    const para1 = document.createElement("button");
    const node1 = document.createTextNode("RUN!!!");
    
    para1.appendChild(node1);

    const body = document.body; 
    body.appendChild(para1);
    para1.onclick = function() { SubmitALL();  };
    para1.id = "SUBMITALL"; 


}


function CreateSingleInput() {

}


function SubmitALL() {
    //AllValsAct.length = 0; 
    //AllValsLap.length = 0; 
    var AllValsLap = []; 
    for(let x = 0; x< LapCount; x++) {
        let temp = document.getElementById("InputLap" + x.toString()).value; 
        if(temp == '') {
            AllValsLap.push(0); 
        } else { 
            AllValsLap.push(temp); 
        }


    }
    console.log(AllValsLap); 

    var AllValsAct = []; 
    for(let x = 0; x< ActCount; x++) {
        let temp = document.getElementById("InputAct" + x.toString()).value; 
        if(temp == '') {
            AllValsAct.push(0); 
        } else { 
            AllValsAct.push(temp); 
        }


    }
    console.log(AllValsAct);

    var TempDate = document.getElementById("date").value; 
    TYear = TempDate.substring(0,4); 
    TMonth = TempDate.substring(5,7); 
    TDay = TempDate.substring(8,10); 
    TempDate = TMonth + "/" + TDay + "/" + TYear + " "; 
    //eel.TakeDate(TempDate); 
    eel.OneTime(TempDate,  new Date(document.getElementById("date").value).getDay(), AllValsLap, AllValsAct); 

}


