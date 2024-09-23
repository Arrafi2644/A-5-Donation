
// Noyakhali Donate 

document.getElementById('noakhali-donate-btn').addEventListener('click', function () {
    let availableBalance = getInnerTextById('available-balance');
    const noakhaliTotalDonateAmount = getInnerTextById('noakhali-donate-amount');
    const noakhaliDonateAmount = getInputValueById('noakhali-donate-input');
    const newAvailableBalance = availableBalance - noakhaliDonateAmount;
    const newNoakhaliTotalDonateAmount = noakhaliTotalDonateAmount + noakhaliDonateAmount;

    // Donate validation
    if (isNaN(noakhaliDonateAmount)) {
        alert("Invalid donation amount!!!")
        return;
    }else if(newAvailableBalance < 0){
        alert("You don't have enough balance to donate...")
        return;
    }else{
        document.getElementById('available-balance').innerText = newAvailableBalance;
        document.getElementById('noakhali-donate-amount').innerText = newNoakhaliTotalDonateAmount;

        document.getElementById('noakhali-donate-input').value = "";

        document.getElementById('my_modal_1').showModal()
    }



});

// Feni Donate

document.getElementById('feni-donate-btn').addEventListener('click', function () {
    let availableBalance = getInnerTextById('available-balance');
    const feniTotalDonateAmount = getInnerTextById('feni-donate-amount');
    const feniDonateAmount = getInputValueById('feni-donate-input');
    const newAvailableBalance = availableBalance - feniDonateAmount;
    const newFeniTotalDonateAmount = feniTotalDonateAmount + feniDonateAmount;

    // Donate Validation 
    if (isNaN(feniDonateAmount)) {
        alert("Invalid donation amount!!!")
        return;
    } else if (newAvailableBalance < 0) {
        alert("You don't have enough balance to donate...")
        return;
    } else {
        document.getElementById('feni-donate-amount').innerText = newFeniTotalDonateAmount;

        document.getElementById('available-balance').innerText = newAvailableBalance;

        document.getElementById('feni-donate-input').value = "";

        document.getElementById('my_modal_1').showModal();
    }

});


// Quota Donate 
document.getElementById('quota-donate-btn').addEventListener('click', function () {
    let availableBalance = getInnerTextById('available-balance');
    const quotaTotalDonateAmount = getInnerTextById('quota-donate-amount');
    const quotaDonateAmount = getInputValueById('quota-donate-input');

    const newAvailableBalance = availableBalance - quotaDonateAmount;
    const newQuotaTotalDonateAmount = quotaTotalDonateAmount + quotaDonateAmount;

    // Donate Validation 
    if (isNaN(quotaDonateAmount)) {
        alert("Invalid donation amount!!!")
        return;
    } else if (newAvailableBalance < 0) {
        alert("You don't have enough balance to donate...")
        return;
    } else {
        document.getElementById('available-balance').innerText = newAvailableBalance;
        document.getElementById('quota-donate-amount').innerText = newQuotaTotalDonateAmount;

        document.getElementById('quota-donate-input').value = "";

        document.getElementById('my_modal_1').showModal();

    }

});