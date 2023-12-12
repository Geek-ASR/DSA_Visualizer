const btnRand = document.querySelector(".btn_rand");
const btnMan = document.querySelector(".btn_man");
const btnManSubmit = document.querySelector(".btn_man_submit");
const btnSubmit = document.querySelector(".btn_submit");
const randInput = document.querySelector(".rand_input");
const manInput = document.querySelector(".man_input");
const divContainer = document.querySelector(".div-container");
const typeElem = document.querySelector("#elemType");
const displayContainer = document.querySelector("#display-container");
const display_container_2 = document.querySelector('#display-container-2');
const array_visualization = document.querySelector(".array-visualization");
const array_visualization_count = document.querySelector('.array-visualization-count');
const displaySubtitle = document.querySelector(".actual-container");
let elemType = "Round";
let divArray = [];
let manArray;
let numArray = new Map([]);
let allow = 1;

btnRand.addEventListener("click", () => {
  typeElem.removeAttribute("disabled");
  btnMan.setAttribute("disabled", true);
  btnRand.classList.add("disable");
  randInput.classList.remove("disable");
  btnSubmit.classList.remove("disable");
  divContainer.innerHTML = "";
  array_visualization.innerHTML="";
  array_visualization_count.innerHTML="";
});

btnSubmit.addEventListener("click", () => {
  typeElem.setAttribute("disabled", true);
  let inputLength = randInput.value;
  randInput.classList.add("disable");
  btnSubmit.classList.add("disable");
  btnRand.classList.remove("disable");
  btnMan.removeAttribute("disabled");
  divContainer.innerHTML = "";
  array_visualization.innerHTML="";
  array_visualization_count.innerHTML=""
  divArray = [];
  numArray = [];
  if (elemType == "Round") {
    allow = 0;
    showDynamicArrayDiv(inputLength, allow);
  } else {
    allow = 1;
    showDynamicArrayDiv(inputLength, allow);
  }
});

const randomNum = (sortAlgo, inputLength) => {
  if (sortAlgo === "countingSort") {
    let min = Math.ceil(1);
    let max = Math.floor(inputLength);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return Math.floor(Math.random() * 100);
};

const showDynamicArrayDiv = (inputLength, allow, sortAlgo) => {
  let j = Math.floor(inputLength / 2);
  // let k =inputLength%2!=0?1:0;
  let ans;
  let gapLenth;
  if (inputLength % 2 === 0) {
    gapLenth = -(j * 100 + 50);
  } else {
    gapLenth = -(j * 100 + 100);
  }
  for (let i = 0; i < inputLength; i++) {
   console.log("inputLength===", inputLength);
    const r = randomNum(sortAlgo, inputLength);
    ans = gapLenth + 100;
    gapLenth += 100;
    // if(j>0){
    //    ans = -(j*gapLenth);
    //   j= j-2;
    // }
    // else{
    //    ans = (k*gapLenth);
    //    k+=2;
    // }
    if (allow == 0) {
      displayContainer.classList.add("div-container");
      if (displayContainer.classList.contains("div-container-bar"))
        displayContainer.classList.remove("div-container-bar");
      divArray.push(
        `<div style="order: ${i}; transform:translateX(${ans}px);" class="div-element" id="div-element-${i}">${r}</div>`
      );
    } else {
      displayContainer.classList.remove("div-container");
      displayContainer.classList.add("div-container-bar");
      divArray.push(
        `<div style="order: ${i}; transform:translateX(${ans}px); height:${
          r<=20?(r*5) + 100:r+100
        }px;" class="div-element-bar" id="div-element-${i}">${r}</div>`
      );
    }

    numArray.push([r, i, ans]);
  }
  renderDiv(divArray);
};

const renderDiv = async (divArray) => {
  displaySubtitle.innerHTML = " ";
  array_visualization.innerHTML = " ";
  for (let i = 0; i < divArray.length; i++) {
    divContainer.innerHTML += divArray[i];
  }
  console.log(numArray);
  console.log(divContainer);
  // bubbleSort(numArray,divContainer);
  // selectionSort(numArray,divContainer);
  // insertionSort(numArray,divContainer);
};

typeElem.addEventListener("change", (elem) => {
  elemType = elem.target.value;
});

//------------------------------- Manual Input Procedure-------------------------

btnMan.addEventListener("click", () => {
  typeElem.removeAttribute("disabled");
  btnRand.setAttribute("disabled", true);
  btnMan.classList.add("disable");
  manInput.classList.remove("disable");
  btnManSubmit.classList.remove("disable");
  divContainer.innerHTML = "";
});

btnManSubmit.addEventListener("click", () => {
  let inputLength = manInput.value;
  console.log(inputLength);
  manInput.classList.add("disable");
  btnManSubmit.classList.add("disable");
  btnMan.classList.remove("disable");
  btnRand.removeAttribute("disabled");
  typeElem.setAttribute("disabled", true);
  divContainer.innerHTML = "";
  divArray = [];
  numArray = [];
  if (elemType == "Round") showManArrayDiv(inputLength, 0);
  else showManArrayDiv(inputLength, 1);
});

const showManArrayDiv = (inputLength, allow) => {
  manArray = inputLength.split(",");
  let length = manArray.length;
  let j = Math.floor(length / 2);
  console.log(j);
  // let k =inputLength%2!=0?1:0;
  let ans;
  let gapLenth;
  if (length % 2 === 0) {
    gapLenth = -(j * 100 + 50);
  } else {
    gapLenth = -(j * 100 + 100);
  }

  for (let i = 0; i < length; i++) {
    ans = gapLenth + 100;
    gapLenth += 100;
    manArray[i] = Number(manArray[i]);
    if (allow == 0) {
      displayContainer.classList.add("div-container");
      if (displayContainer.classList.contains("div-container-bar"))
        displayContainer.classList.remove("div-container-bar");
      divArray.push(
        `<div style="order: ${i}; transform:translateX(${ans}px);" class="div-element" id="div-element-${i}">${manArray[i]}</div>`
      );
    } else {
      if (displayContainer.classList.contains("div-container"))
        displayContainer.classList.remove("div-container");
      displayContainer.classList.add("div-container-bar");
      divArray.push(
        `<div style="order: ${i}; transform:translateX(${ans}px); height:${
          manArray[i] + 100
        }px;" class="div-element-bar" id="div-element-${i}">${
          manArray[i]
        }</div>`
      );
    }
    numArray.push([manArray[i], i, ans]);
  }
  renderDiv(divArray);
};
