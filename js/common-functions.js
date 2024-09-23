function getInnerTextById(id){
    const elementInnerText = parseFloat(document.getElementById(id).innerText);
    return elementInnerText;
}

function getInputValueById(id){
    const inputValue = parseFloat(document.getElementById(id).value) ;
    return inputValue;
}

// function checkAvailableBalance(available){
// if(available >= 0 ){

// }else{
//     alert("You don't have enough balance to donate...")
//     return;
// }
// }