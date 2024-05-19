// String(25)
// console.log('25' - 5);
// console.log('25' + 5);

// window.document;
// window.console.log('window');
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

/* function subscribe() {
  const buttonElement = document.querySelector(".js-subscribe-button");

  if (buttonElement.innerHTML === "Subscribe") {
    buttonElement.innerHTML = "Subscribed";
    buttonElement.classList.add("is-subscribed");
  } else {
    buttonElement.innerHTML = "Subscribe";
  }
} */

function subscribe() {
  const subscribeButton = document.querySelector('.js-subscribe-button');

  if (subscribeButton.classList.contains('is-subscribed')) {
    subscribeButton.innerHTML = 'Subscribe';
    subscribeButton.classList.remove('is-subscribed');

  } else {
    subscribeButton.innerHTML = 'Subscribed';
    subscribeButton.classList.add('is-subscribed');
  }
}

/* function handleCostInputKeydown(event) {
  const key = event.key;

  if (key === 'Enter') {
    calculateTotal();
  } else if (key === 'Escape') {
    document.querySelector('.cost-input').value = '';
  }
}

function subscribe() {
  const subscribeButton = document.querySelector('.js-subscribe-button');

  if (subscribeButton.classList.contains('is-subscribed')) {
    subscribeButton.innerHTML = 'Subscribe';
    subscribeButton.classList.remove('is-subscribed');

  } else {
    subscribeButton.innerHTML = 'Subscribed';
    subscribeButton.classList.add('is-subscribed');
  }
}

function calculateTotal() {
  const inputElement = document.querySelector('.js-cost-input');
  const cost = Number(inputElement.value) * 100;

  if (cost < 3500) {
    document.querySelector('.js-total')
      .innerHTML = `$${(cost + 1000) / 100}`;
  } else {
    document.querySelector('.js-total')
      .innerHTML = `$${cost / 100}`;
  }
} */
