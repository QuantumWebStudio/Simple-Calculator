display=document.getElementById('display')
 function AppendTo(inpt){
    display.value+= inpt
 }
 function ClearScreen(){
    display.value="";
 }
 function Calculate(){
    try{
        display.value=eval(display.value)
    }
    catch(error){
        display.value='ERROR'
    }
 }