display=document.getElementById('display')
 function AppendTo(inpt){
    display.value+= inpt
 }
 function ClearScreen(){
    display.value="";
 }
 function Calculate(){
    display.value=eval(display.value)
 }