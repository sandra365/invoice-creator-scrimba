let renderList = [];
const selectedServiceList = document.getElementById("selected-service-list");
const washCarBtn = document.getElementById("wash-car-btn");
const mowLawnBtn = document.getElementById("mow-lawn-btn");
const pullWeedsBtn = document.getElementById("pull-weeds-btn");
const totalAmountDiv = document.getElementById("total-amount");
const outcomeBtn = document.getElementById("outcome-btn");
const services = [
    {
        id: 1,
        name: "Wash Car",
        price: 10
    },
    {
        id: 2,
        name: "Mow Lawn",
        price: 20
    },
    {
        id: 3,
        name: "Pull Weeds",
        price: 30
    }];


washCarBtn.addEventListener("click", function() {
    add(services[0]);
})

mowLawnBtn.addEventListener("click", function() {
    add(services[1]);
})

pullWeedsBtn.addEventListener("click", function() {
    add(services[2]);
})

outcomeBtn.addEventListener("click", function() {
    sendInvoice();
})

function render (list) { 
    selectedServiceList.innerHTML = "";
    list.forEach(listItem => 
        {
            let services = `
            <div class="row">
                <p class="service-name">
                    ${listItem.name}
                    <span id="${listItem.id}" class="remove" onclick="removeService(event.target.id)">Remove</span>
                </p>
                <p class="service-price">
                    <span class="pale">$</span> ${listItem.price}
                </p>
            </div>`;
            selectedServiceList.insertAdjacentHTML('beforeend', services);//check this out on mdn
         })
}

function updateTotalAmount() {
    let totalAmount = 0;
    renderList.forEach(service => totalAmount += service.price);
    totalAmountDiv.innerHTML = `$ ${totalAmount}`;
}

function add(service) {
    if(!renderList.find(el => el === service)) {
        renderList.push(service);
    }
    render(renderList);
    updateTotalAmount();
}

function removeService(serviceId) {
    const index = renderList.findIndex(el => el.id == serviceId);
    renderList.splice(index, 1);
    render(renderList);
    updateTotalAmount();
}

function sendInvoice() {
    renderList = [];
    selectedServiceList.innerHTML = "";
    totalAmountDiv.innerHTML = `$ 0`
}

// what on Earth is jQuery?










