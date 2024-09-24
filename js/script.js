
// Noyakhali Donate 

document.getElementById('noakhali-donate-btn').addEventListener('click', function () {
    let availableBalance = getInnerTextById('available-balance');
    const noakhaliTotalDonateAmount = getInnerTextById('noakhali-donate-amount');
    const noakhaliDonateAmount = getInputValueById('noakhali-donate-input');
    const newAvailableBalance = availableBalance - noakhaliDonateAmount;
    const newNoakhaliTotalDonateAmount = noakhaliTotalDonateAmount + noakhaliDonateAmount;

    // Donate validation
    if (isNaN(noakhaliDonateAmount) || noakhaliDonateAmount <= 0) {
        alert("Invalid donation amount!!!")
        return;
    }else if(newAvailableBalance < 0){
        alert("You don't have enough balance to donate...")
        return;
    }else{
        document.getElementById('available-balance').innerText = newAvailableBalance;
        document.getElementById('noakhali-donate-amount').innerText = newNoakhaliTotalDonateAmount;

        

        document.getElementById('my_modal_1').showModal();

        // added to history 

        const donationHistoryContainer = document.getElementById('history-container');

        const div = document.createElement('div');
        div.classList.add('border', 'rounded-2xl', 'p-6', 'my-6')

        div.innerHTML = `
        <h2 class="text-color-dark font-bold text-xl">${noakhaliDonateAmount} Taka is Donated for Flood at Noakhali, Bangladesh</h2>
        <p class="text-color-mute text-base">Date: ${new Date()}</p>
        `;

        donationHistoryContainer.insertBefore(div, donationHistoryContainer.firstChild);

        document.getElementById('noakhali-donate-input').value = "";
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
    if (isNaN(feniDonateAmount) || feniDonateAmount <= 0) {
        alert("Invalid donation amount!!!")
        return;
    } else if (newAvailableBalance < 0) {
        alert("You don't have enough balance to donate...")
        return;
    } else {
        document.getElementById('feni-donate-amount').innerText = newFeniTotalDonateAmount;

        document.getElementById('available-balance').innerText = newAvailableBalance;

        document.getElementById('my_modal_1').showModal();


        const donationHistoryContainer = document.getElementById('history-container');

        const div = document.createElement('div');
        div.classList.add('border', 'rounded-2xl', 'p-6', 'my-6')

        div.innerHTML = `
        <h2 class="text-color-dark font-bold text-xl">${feniDonateAmount} Taka is Donated for Flood Relief in Feni,Bangladesh</h2>
        <p class="text-color-mute text-base">Date: ${new Date()}</p>
        `;

        donationHistoryContainer.insertBefore(div, donationHistoryContainer.firstChild);

        document.getElementById('feni-donate-input').value = "";

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
    if (isNaN(quotaDonateAmount) || quotaDonateAmount <= 0) {
        alert("Invalid donation amount!!!")
        return;
    } else if (newAvailableBalance < 0) {
        alert("You don't have enough balance to donate...")
        return;
    } else {
        document.getElementById('available-balance').innerText = newAvailableBalance;
        document.getElementById('quota-donate-amount').innerText = newQuotaTotalDonateAmount;
    
        document.getElementById('my_modal_1').showModal();

        const donationHistoryContainer = document.getElementById('history-container');
        const title = document.getElementById('quota-card-title').innerText;

        const div = document.createElement('div');
        div.classList.add('border', 'rounded-2xl', 'p-6', 'my-6')

        div.innerHTML = `
        <h2 class="text-color-dark font-bold text-xl">${quotaDonateAmount} Taka is Donated for Aid for Injured in the Quota Movement</h2>
        <p class="text-color-mute text-base">Date: ${new Date()}</p>
        `;

        donationHistoryContainer.insertBefore(div, donationHistoryContainer.firstChild);

        
        document.getElementById('quota-donate-input').value = "";
    }

});

// History Part 

document.getElementById('history-btn').addEventListener('click', function(){
  toggleBtn('history-btn', 'donation-btn');

  document.getElementById('history-tab').style.display = 'block'
  document.getElementById('main-content').style.display = 'none'
});

document.getElementById('donation-btn').addEventListener('click', function(){
    toggleBtn('donation-btn', 'history-btn');

      document.getElementById('history-tab').style.display = 'none'
  document.getElementById('main-content').style.display = 'block';

  });