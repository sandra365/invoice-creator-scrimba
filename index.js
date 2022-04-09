let renderList = [];
let chosenService = document.getElementById("service-choice");
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


washCarBtn.addEventListener("click", function() {//replace anonimus function with pre-written function 
    //that user services [i] as a parameter
    if(!renderList.find(el => el === services[0])) {
        renderList.push(services[0]);
    }
})

mowLawnBtn.addEventListener("click", function() {
    if(!renderList.find(el => el === services[1])){
        renderList.push(services[1]);
    }
})

pullWeedsBtn.addEventListener("click", function() {
    if(!renderList.find(el => el === services[2])) {
        renderList.push(services[2]);
    }
})

outcomeBtn.addEventListener("click", function() {
    render(renderList);
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








