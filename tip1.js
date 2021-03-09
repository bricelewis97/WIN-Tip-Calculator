let btn = document.getElementById('btn');
var form = document.querySelector('form');
var log = document.querySelector('#log');
btn.addEventListener('click', function() {
    var data = new FormData(form);
    var output = "";
    for (const entry of data) {
    output = entry[1];
    };
    let billAmount = document.getElementById('bill_amount').value;
    let guestCount = document.getElementById('guest_count').value;
    let extraTip = document.getElementById('extra_tip').value;
    let tipAmount = document.getElementById('tip_amount').value
            = parseFloat(billAmount * (output/100)) + parseFloat(extraTip);
    let totalCost = document.getElementById('total_bill').value 
            =parseFloat(billAmount) + parseFloat(tipAmount);
    document.getElementById('per_person').value = (totalCost / guestCount);
})
document.getElementById('per_person').disabled = true;
document.getElementById('total_bill').disabled = true;
document.getElementById('tip_amount').disabled = true;