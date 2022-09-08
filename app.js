// https://www.omnicalculator.com/finance/occupancy-rate

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const dailyrateRadio = document.getElementById('dailyrateRadio');
const roomsoccupiedinadayRadio = document.getElementById('roomsoccupiedinadayRadio');
const totalroomsRadio = document.getElementById('totalroomsRadio');

let dailyrate;
let roomsoccupiedinaday = v1;
let totalrooms = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

dailyrateRadio.addEventListener('click', function() {
  variable1.textContent = 'Rooms occupied (in a day)';
  variable2.textContent = 'Total rooms';
  roomsoccupiedinaday = v1;
  totalrooms = v2;
  result.textContent = '';
});

roomsoccupiedinadayRadio.addEventListener('click', function() {
  variable1.textContent = 'Daily rate';
  variable2.textContent = 'Total rooms';
  dailyrate = v1;
  totalrooms = v2;
  result.textContent = '';
});

totalroomsRadio.addEventListener('click', function() {
  variable1.textContent = 'Daily rate';
  variable2.textContent = 'Rooms occupied (in a day)';
  dailyrate = v1;
  roomsoccupiedinaday = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(dailyrateRadio.checked)
    result.textContent = `Daily rate = ${computedailyrate().toFixed(2)}`;

  else if(roomsoccupiedinadayRadio.checked)
    result.textContent = `Rooms occupied (in a day) = ${computeroomsoccupiedinaday().toFixed(2)}`;

  else if(totalroomsRadio.checked)
    result.textContent = `Total rooms = ${computetotalrooms().toFixed(2)}`;
})

// calculation

function computedailyrate() {
  return (Number(roomsoccupiedinaday.value) / Number(totalrooms.value)) * 100;
}

function computeroomsoccupiedinaday() {
  return (Number(dailyrate.value) / 100) * Number(totalrooms.value);
}

function computetotalrooms() {
  return Number(roomsoccupiedinaday.value) / (Number(dailyrate.value) / 100);
}