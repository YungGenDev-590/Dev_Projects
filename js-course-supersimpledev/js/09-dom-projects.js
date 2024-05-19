String(25);
console.log("25" - 5);
console.log("25" + 5);

window.document;
window.console.log("window");
// window.alert('this is an alert!');

function handleCostKeyDown(event) {
  if (event.key === "Enter") {
    calculateTotal();
  }
}

function calculateTotal() {
  const inputElement = document.querySelector(".js-cost-input");
  let cost = Number(inputElement.value);
  // console.log(cost);
  // console.log(typeof cost);
  // console.log(inputElement.value);

  if (cost < 40) {
    cost = cost + 10;
  } else if (cost > 40) {
    cost = cost;
  }

  // console.log(cost);

  document.querySelector(".js-total-cost").innerHTML = `$${cost}`;
}

/*         function costTotal() {
            const inputElementAlert = document.getElementById('#cost-alert');
            let cost2 = Number(inputElementAlert.value);

            if (cost2 < 40) {
                cost2 = cost2 + 10;
             } else if (cost2 > 40) {
                cost2 = cost2;
             }

            alert(`Total cost: $${costTotal}`)
        }
        
        function costWithAlert(event) {
            if (event.key === 'Enter') {
                alert(`Total cost: $${costTotal}`);
                ;
            }
        } */

function subscribe() {
  const buttonElement = document.querySelector(".js-subscribe-button");
  // console.log(document.querySelector('.js-subscribe-button'));
  // if (buttonElement.innerHTML === 'Subscribe') {
  if (buttonElement.innerText === "Subscribe") {
    buttonElement.innerHTML = "Subscribed";
  } else {
    buttonElement.innerHTML = "Subscribe";
  }
};
