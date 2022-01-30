//******************
//LEVEV 01: varibals
//******************

let a = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7jCXO06pDo-mdfUlrEUFZJ_IJv1ptnU2JF9qxFTgf5gyCbvM_0n93qDCe978kfu2P97E&usqp=CAU`;
let b = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgtm8XiKfG2TBfFOCQLYynRN9w0hWt52QI4g&usqp=CAU`;
let c = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlArHmnUZujX7GX-6jRw7xqqt6YwmfRYDhbFRxWtr_2Zn0T6Tp06WSPT-NtWaxilMwRMc&usqp=CAU`;
let d = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjGm-6m7MphRm72tbWeUVT_ViIP4XtvPMRK3cwVhmdnZtg7wRVoUwInZvYK_Qfx92YkUA&usqp=CAU`;
let e = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY0oDzre9jfSFyh-AdX_l_CGtAN2VM_CThsbYBtONVIOCLjOp5GIqQ0s831iFWEGHIhYg&usqp=CAU`;
let f = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ1oDOMHLE9g4fikkd6Z_UQIyMaSGFoNDyISZEn6UKZkJEHU7ax3GnJi_whfoNRa4ar6s&usqp=CAU`;
let g =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStLCIGSn1EvhGu0o-wsTDXhg2HfYZmuyWUbbphvL5ZNVpg6voeGqq2Sw4YlPdwMXRwh7Q&usqp=CAU";
let h = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTDvKskqKCJDsNXJIIsbWHrnx0wfGXnpiHOQ&usqp=CAU`;
let k = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9G0PhhQyL2y28j_d9jkF1-H2jln3-Gf86rG88Lvtncxi1xdx77Hwp_uCGOMC1pAKZ4Y4&usqp=CAU`;
let l = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvWmdl0G_Z2qwdG_pXEkue3Asrv_4FEK-oKQ&usqp=CAU`;
let m = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4O9lMdIe04mmItKtecrwMuysfcG3iWxHu2OuNHCj_Ge6QpOjds6VBkZUBpzxPcNg1cok&usqp=CAU`;
let n = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0m5F7yBtc1tQrI-NiGU9WUoU87r0tmpI-cNa3xi5SWPDwlBXVt07FnxF0jjQgdzv8edo&usqp=CAU`;
let o = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6YgvASdNLI7euASX5Ot0cChgAyNFebK7EKQ&usqp=CAU`;
let p = `https://www.mmppicture.co.in/wp-content/uploads/2021/01/Snapseed-Background-52-864x1080.jpg`;
let q = `https://t4.ftcdn.net/jpg/03/39/53/87/360_F_339538724_AI3E02IF5v77nGn4ZMZj1qwMUOZRebGe.jpg`;
let r = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgLdXoWNAOP7UaVUuSCNoy9ZHjdj8iJpcOdy26R0ZD7LRV7hJmUMVH0w8rn5dSz2fex-Y&usqp=CAU`;
let s = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3lGrbIzquY4Sytmid6a3qIobGQ_0M8khOYEEl97V2-Qt950uskkJ2fkT_2cX8LqqOXFY&usqp=CAU`;
let u = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNW2capsX0qpAllzCkWTl9lCaNVN6_6BA88DphMOzVeXjt5uUWYb08eDImJUpahlnixDU&usqp=CAU`;
let v = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgVULenNbizzdDa6imqOQFKyZTHfOUSRz8HvR-NclifzENczTWn1HHOS32tqxnshhwtIk&usqp=CAU`;
let pic = [];
let chose_cards = "8"; // prompt("amount of cards");
get_up_to_50_random_dog_img();
function get_up_to_50_random_dog_img(number) {
  fetch(`https://dog.ceo/api/breeds/image/random/${chose_cards / 2}`)
    .then((res) => res.json())
    .then((res) =>
      res.message.forEach((element) => {
        pic.push(element);
      })
    )
    .then((res) => pictures(pic))
    .then((res) => amount_of_cards())
    .then((res) => main());
}

function pictures(params) {
  let pic_count = 1;
  for (i of params) {
    cards_deck.push({ name: pic_count, pic: i });
    cards_deck.push({ name: pic_count, pic: i });
    pic_count++;
  }
}

let cards = [];
let cards_deck = [
  // { name: "h", pic: h },
  // { name: "h", pic: h },
  // { name: "k", pic: k },
  // { name: "k", pic: k },
  // { name: "l", pic: l },
  // { name: "l", pic: l },
  // { name: "m", pic: m },
  // { name: "m", pic: m },
  // { name: "n", pic: n },
  // { name: "n", pic: n },
  // { name: "o", pic: o },
  // { name: "o", pic: o },
  // { name: "p", pic: p },
  // { name: "p", pic: p },
  // { name: "q", pic: q },
  // { name: "q", pic: q },
  // { name: "r", pic: r },
  // { name: "r", pic: r },
  // { name: "s", pic: s },
  // { name: "s", pic: s },
  // { name: "u", pic: u },
  // { name: "u", pic: u },
  // { name: "v", pic: v },
  // { name: "v", pic: v },
  // { name: "a", pic: a },
  // { name: "a", pic: a },
  // { name: "b", pic: b },
  // { name: "b", pic: b },
  // { name: "c", pic: c },
  // { name: "c", pic: c },
  // { name: "d", pic: d },
  // { name: "d", pic: d },
  // { name: "e", pic: e },
  // { name: "e", pic: e },
  // { name: "f", pic: f },
  // { name: "f", pic: f },
  // { name: "g", pic: g },
  // { name: "g", pic: g },
];
function validNumber(params) {
  if (params.match(/^[0-9]+$/)) {
    return true;
  }
}
// amount_of_cards();
function amount_of_cards(params) {
  if (validNumber(chose_cards)) {
    cards = cards_deck.slice(0, chose_cards);
  } else {
    cards = cards_deck.slice(0, 12);
  }
}
//**********************
//main 02: main function
//**********************
// window.onload = () => {
//   main();
// };
function main() {
  shuffle(cards);
  for (let card in cards) {
    createCardElement(card);
  }
}
//**********************
// 03: createCard function
//**********************

const body = document.getElementById("body");
let countd = document.createElement("p");
body.appendChild(countd);
let winner = document.createElement("div");
body.appendChild(winner);
let players = [];
let counter = 0;
let turns = 0;
function objplyer(player, name, counter) {
  this.player = player;
  this.name = name;
  this.counter = counter;
}
let num_players = "3"; //prompt("number of players");

num_of_players();
function num_of_players(params) {
  if (validNumber(num_players)) {
    let per = 0;
    let temp = "amiel"; //prompt("name");
    while (per < Number(num_players)) {
      players.push(new objplyer(per, temp, counter));
      per++;
      temp += "ch";
    }
  } else {
    num_players = prompt("number of players");
    num_of_players();
  }
}

// let first_player = prompt("first player");
// let second_player = prompt("second_player");
// players.push(
//   new objplyer(0, first_player, counter),
//   new objplyer(1, second_player, counter)
// );
// for(n of player_names){
//   players.push(n);
//   i++;
// }

// players.push(
//   new objplyer(0, "Amiel", counter),
//   new objplyer(1, "Chemda", counter)
// );
let players_el;
for (p of players) {
  players_el = document.createElement("div");
  body.appendChild(players_el);
  players_el.id = p.name;
  players_el.className = "players container";
  players_el.innerHTML = `player  ${p.name} has ${p.counter} points`;
}
winner.innerHTML = `it's ${players[0].name} turn`;
const board = document.getElementById("bord");
body.appendChild(board);
let cards_arry = [];
function createCardElement(index) {
  const cardEl = document.createElement("div");
  cardEl.id = index;
  cardEl.className = "card container";
  cardEl.onclick = cardClicked;
  cards_arry.push(cardEl);
  board.appendChild(cardEl);
}

let temp = 0;
function cardClicked(evn) {
  temp++;
  temp == 1 ? start_timer() : (temp = 0);
  const cardEl = evn.target;
  const idx = cardEl.id;
  let img = document.createElement("img");
  img.src = cards[idx].pic;
  cardEl.appendChild(img);
  // cardEl.innerHTML = cards[idx].name;
  setTimeout(() => {
    sameCards(cardEl.id, turns);
  }, 1);
}
let tempperry = 0;
let found_cardes_number = 0;
let arr_clickd = [];
function sameCards(index, turn) {
  if (arr_clickd[0] == index) {
    alert("you cant press the same card");
    return;
  } else {
    arr_clickd.push(index);
    if (arr_clickd.length == 2) {
      clearInterval(interval);
      turns++;
      if (tempperry == num_players) {
        tempperry = 0;
      }
      if (tempperry == num_players - 1) {
        winner.innerHTML = `player  ${players[0].name}`;
      } else {
        winner.innerHTML = `player  ${players[tempperry + 1].name}`;
      }
      if (cards[arr_clickd[0]].name == cards[arr_clickd[1]].name) {
        hide_elements_by_id(arr_clickd[0]);
        hide_elements_by_id(arr_clickd[1]);
        score(tempperry);
        winner.innerHTML = `player  ${
          players[tempperry + 1].name
        } has anouther turn`;
        arr_clickd = [];
        found_cardes_number += 2;
        if (found_cardes_number == cards.length) {
          alert("the end of the game");
          hi_score();
        }
      } else {
        setTimeout(() => {
          document.getElementById(arr_clickd[0]).innerHTML = "";
          document.getElementById(arr_clickd[1]).innerHTML = "";
          arr_clickd = [];
          return false;
        }, 400);
      }
      tempperry++;
    }
  }
}

function score(t) {
  players[t].counter++;
  document.getElementById(
    players[t].name
  ).innerHTML = `player  ${players[t].name} has ${players[t].counter} points`;
  turns--;
  tempperry--;
}

function hide_elements_by_id(card) {
  setTimeout(() => {
    document.getElementById(card).onclick = "";
    document.getElementById(card).innerHTML = "";
    document.getElementById(card).className = "hide_card";
  }, 200);
}
//**********************
// 04: shuffle function
//**********************
function shuffle(arr) {
  for (i = 0; i < 100; i++) {
    let a1 = randRange(0, arr.length);
    let a2 = randRange(0, arr.length);
    if (a1 == a2) {
      i--;
      continue;
    }
    swap(arr, a1, a2);
  }
}

function randRange(a, b) {
  return Math.floor(a + Math.random() * (b - a));
}
function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

let hi_name;
let hi = 0;
function hi_score(params) {
  for (h of players) {
    if (hi < h.counter) {
      hi = h.counter;
      hi_name = h;
    }
  }
  winner.innerHTML = `the winner is ${hi_name.name} with ${hi_name.counter} points`;
}
countd.id = "timer";
let interval;
let tmp = 0;
function start_timer(params) {
  var count = 5;
  interval = setInterval(function () {
    document.getElementById("timer").innerHTML = count;
    count--;
    if (count === -2) {
      clearInterval(interval);
      document.getElementById("timer").innerHTML = "Done";
      alert("You're out of time!");
      tmp++;
      turns++;
      if (tmp == 1) {
        document.getElementById(arr_clickd[0]).innerHTML = "";
        arr_clickd = [];
        tmp = 0;
        temp = 0;
      }
    }
  }, 1000);
}
let guess1 = 1; //prompt("enter your first guess");
let guess2 = 2; //prompt("enter your seconed guess");

function theSame(arr, a, b) {
  return a != b && arr[a].name == arr[b].name;
}
