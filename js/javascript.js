//test git
var DEBUG = true;

var currentOutput = "";
if(DEBUG)
{
    console.log("DEBUG ON");
}

function dbg()
{
    if(DEBUG)
    {
        console.log.apply(null, arguments);
    }
}

function buttonclick(b_value)
{
    dbg(b_value+" is clicked");
        currentOutput += b_value;
        document.getElementById("display_result").value = currentOutput;
}

function equalClicked()
{
    dbg("= is clicked");
    document.getElementById("display").value = currentOutput+" =";
    document.getElementById("display_result").value = eval(currentOutput);
    currentOutput = eval(currentOutput).toString();
    dbg("ค่าของ currentOutput คือ ", currentOutput);
}

function delClicked()
{
    dbg("del is clicked");

    const _display_result = document.getElementById("display_result").value;

    if(_display_result == ""){
        if(!currentOutput.length){
            document.getElementById("display").value = currentOutput = "";
        }else{
            currentOutput = currentOutput.substring(0,currentOutput.length - 1)
            document.getElementById("display").value = currentOutput;
        }
        currentOutput = document.getElementById("display").value;
        console.log(currentOutput);
    }else{
        if(!currentOutput.length){
            document.getElementById("display_result").value = currentOutput = "";
        }else{
            currentOutput = currentOutput.substring(0,currentOutput.length - 1)
            document.getElementById("display_result").value = currentOutput;
        }
        currentOutput = document.getElementById("display_result").value ;
        console.log(currentOutput);
    }
}

function clearClicked()
{
    dbg("C is clicked");
    document.getElementById("display").value = "";
    document.getElementById("display_result").value = "";
    currentOutput="";
}