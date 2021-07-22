function createAccount(pin, amount = 0) {

    return {
        checkBalance: (entryPin) => {
            if(entryPin !== pin) return 'Invalid PIN.'
            return `$${amount}`
        },  
        deposit: (entryPin, amt) => {
            if(entryPin !== pin) return 'Invalid PIN.'
            amount += amt;
            return `Succesfully deposited $${amt}. Current balance: $${amount}.`

        }, 
        withdraw: (entryPin, amt) => {
            if(entryPin !== pin) return 'Invalid PIN.'
            if(amt > amount) return `Withdrawal amount exceeds account balance. Transaction cancelled.`
            amount -= amt;
            return `Succesfully withdrew $${amt}. Current balance: $${amount}.`
        }, 
        changePin: (entryPin, newPin) => {
            if(entryPin !== pin) return 'Invalid PIN.'
            pin = newPin;
            return `PIN successfully changed!`;
        }
    }
}

module.exports = { createAccount };
