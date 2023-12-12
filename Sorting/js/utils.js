function sleep(ms){
   return new Promise((resolve) => setTimeout(resolve, ms));
}


const swap = ( numArray ,j,l,node,i,k) =>{
   let temp = numArray[j];
   numArray[j] = numArray[l];
   numArray[l] = temp;

   temp = numArray[j][1];
   numArray[j][1] = numArray[l][1];
   numArray[l][1] = temp;

   temp = numArray[j][2];
   numArray[j][2] = numArray[l][2];
   numArray[l][2] = temp;
   // node[i].style.transform = `translateX(${numArray[j][2]}px)`;
   // node[k].style.transform = `translateX(${-numArray[j+1][2]}px)`;

   temp = node[i].style.transform;
   node[i].style.transform = node[k].style.transform;
   node[k].style.transform = temp;

   temp = node[i].style.order;
   node[i].style.order = node[k].style.order;
   node[k].style.order = temp;

}

const setColor = (node,color) =>{
   node.style.backgroundColor = color;
}

document.querySelector('.btn_bubbleSort').addEventListener('click',()=>{
   bubbleSort(numArray,divContainer);
})

document.querySelector('.btn_insertionSort').addEventListener('click',()=>{
   insertionSort(numArray,divContainer);
})

document.querySelector('.btn_selectionSort').addEventListener('click',()=>{
   selectionSort(numArray,divContainer);
})

document.querySelector('.btn_countingSort').addEventListener('click',()=>{
   divContainer.innerHTML = "";
   array_visualization_count.innerHTML="";
   divArray=[];
   let length = numArray.length;
   numArray = [];
   showDynamicArrayDiv(length,allow,'countingSort');
   countingSort(numArray,divContainer);
})

let slider= document.querySelector('.slider');
let speed = 1000 ;

