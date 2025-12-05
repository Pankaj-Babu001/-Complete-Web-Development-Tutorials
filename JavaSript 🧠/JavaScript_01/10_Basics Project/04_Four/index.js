const form = document.querySelector('form');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const income = document.querySelector("#income");
    const amount = parseInt(income.value);

    const result = document.querySelector('h2');
    const resultContainer = document.querySelector('.result-container');
    const breakdown = document.querySelector('.tax-breakdown');

// Add calculating animation
    resultContainer.classList.add('calculating');

    let totalTax = 0;
    let taxDetails = '';

    if(amount <= 1200000) {
        totalTax = 0;
        taxDetails = 'No tax applicable for income up to ₹12,00,000';
    }
    else if(amount <= 1600000) {
        totalTax = (amount - 1200000) * 0.15;
        taxDetails = `15% tax on income above ₹12,00,000<br>Taxable amount: ₹${(amount - 1200000).toLocaleString('en-IN')}`;
    }
    else if(amount <= 2000000) {
        totalTax = (amount - 1600000) * 0.20 + 60000;
        taxDetails = `₹60,000 + 20% on income above ₹16,00,000<br>Additional taxable: ₹${(amount - 1600000).toLocaleString('en-IN')}`;
    }
    else if(amount <= 2400000) {
        totalTax = (amount - 2000000) * 0.25 + 60000 + 80000;
        taxDetails = `₹1,40,000 + 25% on income above ₹20,00,000<br>Additional taxable: ₹${(amount - 2000000).toLocaleString('en-IN')}`;
    }
    else {
        totalTax = (amount - 2400000) * 0.30 + 60000 + 80000 + 100000;
        taxDetails = `₹2,40,000 + 30% on income above ₹24,00,000<br>Additional taxable: ₹${(amount - 2400000).toLocaleString('en-IN')}`;
    }

// Update result with animation
    setTimeout(() => {
        result.textContent = `Total Tax: ₹${totalTax.toLocaleString('en-IN')}`;
        breakdown.innerHTML = taxDetails;
        resultContainer.classList.remove('calculating');
    }, 300);

    form.reset();
});