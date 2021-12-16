function hide(){
    document.getElementById('message').style.visibility = "hidden"
}

function convertToFarenheit(temp){
    return Math.round(9/5 * temp + 32)
}
function convertToCelsius(temp){
    return Math.round([temp - 32] * 5/9)
}

function convert(element){
    console.log(element.value)
    for(var i=1; i<9; i++) {
        var tempSpan = document.querySelector("#temp" + i)
        var tempVal = parseInt(tempSpan.innerText)
        if(element.value=="c") {
            tempSpan.innerText = convertToCelsius(tempVal);
        } else{
            tempSpan.innerText = convertToFarenheit(tempVal)
        }
    }
}