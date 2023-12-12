// this function is used to count the no of elements and store it
const countSortSwap = (arrayCount, divContainer, numArray2, j, l, k) => {
  divContainer[l].style.transform = `translate(${numArray2[k][2]}px, 145px)`;
  let count = Number(arrayCount[k].innerHTML) + 1;
  arrayCount[k].innerHTML = count;
};

let incrementar = 0; // this is used as an incrementer for placing the sorted elements in its right position referance

// this function is used to plase the sorted elements at their original position
const countSortAns = (arrayCount, divContainer, numArray2, j, l) => {
   divContainer[l].style.order = numArray2[incrementar][1];
  divContainer[l].style.transform = `translate(${
    numArray2[incrementar++][2]
  }px, 0px)`;
  let count = Number(arrayCount[j].innerHTML) - 1;
  arrayCount[j].innerHTML = count;
  setColor(divContainer[l], "#9eff9e");
};

const countingSort = async (numArray, divContainer) => {
  incrementar = 0;
  slider.addEventListener("input", (event) => {
    speed = event.target.value;
    if (speed < 0) {
      speed = Math.abs(speed * 500) + 1000;
    } else {
      speed = Math.abs(-(speed * 500) + 1000);
    }
    console.log(speed);
  });

  let l = 0,
    k = 0;
  let j = Math.floor(numArray.length / 2);
  let divArray2 = []; //this is used to make array of new referance array
  let numArray2 = []; // this is used to make a collection to store array of  [value, order, location] of the referance array
  let ans;
  let gapLenth;

  // this is used to place elements as an specific to counting sort it is representation of array for visualization that we are using counting of elements
  if (numArray.length % 2 === 0) {
    gapLenth = -(j * 100 + 50);
  } else {
    gapLenth = -(j * 100 + 100);
  }
  for (let i = 1; i <= numArray.length; i++) {
    ans = gapLenth + 100;
    gapLenth += 100;
    if (allow == 0) {
      display_container_2.classList.add("array-visualization");
      if (display_container_2.classList.contains("array-visualization-bar"))
        display_container_2.classList.remove("array-visualization-bar");
      divArray2.push(
        `<div style="order: ${i}; transform:translateX(${ans}px); background-color:rgb(251, 215, 173)" class="div-element" id="div-element-${i}">${i}</div>`
      );
    } else {
      if (display_container_2.classList.contains("array-visualization"))
        display_container_2.classList.remove("array-visualization");
      display_container_2.classList.add("array-visualization-bar");
      divArray2.push(
        `<div style="order: ${i}; transform:translateX(${ans}px); height:${
          i * 5 + 100
        }px; background-color:rgb(251, 215, 173)" class="div-element-bar" id="div-element-${i}">${i}</div>`
      );
    }

    numArray2.push([i, i, ans]);
  }

  // this is used to place elements as an specific to counting sort it is representation of count of elements for visualization that we are using
  if (numArray.length % 2 === 0) {
    gapLenth = -(j * 100 + 50);
  } else {
    gapLenth = -(j * 100 + 100);
  }
  for (let i = 0; i < divArray2.length; i++) {
    ans = gapLenth + 100;
    gapLenth += 100;
    array_visualization.innerHTML += divArray2[i];
    array_visualization_count.innerHTML += `<div style="order: ${i}; transform:translateX(${ans}px);background:none; color:white" class="div-element" id="div-element-${i}">0</div>`;
  }

  // here actual counting is performed of the elements
  for (let j = 0; j < numArray.length; j++) {
    l = 0;
    k = 0;

    await sleep(speed);
    while (divContainer.childNodes[l].style.order != numArray[j][1]) l++;
    while (numArray[j][0] != numArray2[k][0]) k++;
    countSortSwap(
      array_visualization_count.childNodes,
      divContainer.childNodes,
      numArray2,
      j,
      l,
      k
    );
    setColor(array_visualization.childNodes[k + 1], "#9eff9e");
    await sleep(speed);
  }

  // This is used for placing an elements to its actual destination
  for (let j = 0; j < numArray.length; j++) {
    console.log(numArray, numArray2);
    let subLength = Number(array_visualization_count.childNodes[j].innerHTML);
    //  let previous = -1;
    l = -1;
    while (subLength--) {
      l++;
      let u = 0;
      await sleep(speed);
      while (numArray[u][0] != numArray2[j][0]) u++;
      while (
        l < numArray.length &&
        divContainer.childNodes[l].innerHTML != numArray[u][0]
      ) {
        l++;
      }
      countSortAns(
        array_visualization_count.childNodes,
        divContainer.childNodes,
        numArray2,
        j,
        l
      );
      await sleep(speed);
    }
  }
  console.log(divContainer);
  display_container_2.innerHTML = "";
  array_visualization_count.innerHTML = "";
};
