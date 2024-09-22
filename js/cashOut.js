document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();

    const cashOut = getInputFieldValueById('input-cash-out');
    const pinNumber = getInputFieldValueById('input-cash-out-pin');

    //wrong way to verify
    if(pinNumber === 1234){
        const balance = getTextFieldValueById('account-balance');

        if(cashOut > balance){
            alert('You do not have enough money to cash out.');
            return;
        }

        const newBalance = balance - cashOut;

        document.getElementById('account-balance').innerText = newBalance;

        // Add to transaction history
        const div = document.createElement('div');
        div.classList.add('bg-yellow-300');
        div.innerHTML = `
            <h4 class="text-2xl font-bold text-center">Cash Out</h4>
            <p>${cashOut}Tk. withdraw. New Balance ${newBalance}</p>
        `
        document.getElementById('transaction-container').appendChild(div);
    }
    else{
        alert('Failed to cash out.');
    }
})