function getInnerTextById(id){
    const elementInnerText = parseFloat(document.getElementById(id).innerText);
    return elementInnerText;
}

function getInputValueById(id){
    const inputValue = parseFloat(document.getElementById(id).value) ;
    return inputValue;
}

function toggleBtn(id1, id2){
    document.getElementById(id1).classList.remove('text-color-dark', 'border-color-success', 'bg-color-success', 'text-color-mute', 'border-color-mute', 'bg-color-primary' )
    document.getElementById(id2).classList.remove('text-color-dark', 'border-color-success', 'bg-color-success', 'text-color-mute', 'border-color-mute', 'bg-color-primary')
    
    document.getElementById(id1).classList.add('text-color-dark', 'border-color-success', 'bg-color-success');
    document.getElementById(id2).classList.add('text-color-mute', 'border-color-mute', 'bg-color-primary');
}