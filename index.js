let renderList = [];//check wether all variable types used correctly
const chosenService = document.getElementById("service-choice");
const washCarBtn = document.getElementById("wash-car-btn");
const mowLawnBtn = document.getElementById("mow-lawn-btn");
const pullWeedsBtn = document.getElementById("pull-weeds-btn");
const outcomeBtn = document.getElementById("outcome-btn");
const services = [
    {
        name: "Wash Car",
        price: 10
    },
    {
        name: "Mow Lawn",
        price: 20
    },
    {
        name: "Pull Weeds",
        price: 30
    }];

washCarBtn.addEventListener("click", function() {
    update(services[0]);
})

mowLawnBtn.addEventListener("click", function() {
    update(services[1]);
})

pullWeedsBtn.addEventListener("click", function() {
    update(services[2]);
})

outcomeBtn.addEventListener("click", function() {
    
})

function render (list) { 
    chosenService.innerHTML = "";
    list.forEach(listItem => 
        {
            let services = `
            <div class="row">
                <p class="service-name">
                    ${listItem.name}
                </p>
                <p class="service-price">
                    <span class="pale">$</span> ${listItem.price}
                </p>
            </div>`;
            chosenService.insertAdjacentHTML('beforeend', services);//check this out on mdn
         })
}

function updateTotalAmount() {
    let totalAmount = 0;
    const totalAmountDIv = document.getElementById("outcome-sum");
    renderList.forEach(service => totalAmount += service.price);
    totalAmountDIv.innerHTML = `$ ${totalAmount}`;
}

function update(service) {
    if(!renderList.find(el => el === service)) {
        renderList.push(service);
    }
    render(renderList);
    updateTotalAmount();
}









