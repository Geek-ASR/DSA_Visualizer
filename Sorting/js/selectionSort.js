const selectionSort = async(numArray,divContainer) =>{
   slider.addEventListener('input',(event)=>{
      speed = event.target.value;
      if(speed<0){
         speed = Math.abs(speed*500)+1000;
      }
      else{
         speed = Math.abs(-(speed*500)+1000);
      }
      console.log(speed);
   });
//   slider.value = 0;
//   speed = 1000;
   let i,j,l=0,k=0,min_idx;
   for (i = 0; i < numArray.length-1; i++){
      min_idx = i;
      for (j = i+1; j < numArray.length; j++){
         l=0;
         k=0;
         console.log(numArray);
         while(divContainer.childNodes[l].style.order!=numArray[j][1])   l++;
         while(divContainer.childNodes[k].style.order!=numArray[min_idx][1])   k++;
         await sleep(speed)
         setColor(divContainer.childNodes[l],"rgb(251, 215, 173)")
         setColor(divContainer.childNodes[k],"rgb(251, 215, 173)")
         await sleep(speed)
         if (numArray[j][0] < numArray[min_idx][0]){
            min_idx = j;
            await sleep(speed)
            setColor(divContainer.childNodes[l],"rgb(166, 218, 216)")
            setColor(divContainer.childNodes[k],"rgb(166, 218, 216)")
         }
         setColor(divContainer.childNodes[l],"rgb(166, 218, 216)")
         setColor(divContainer.childNodes[k],"rgb(166, 218, 216)")
      }
      l=0,k=0;
      while(divContainer.childNodes[l].style.order!=numArray[i][1])   l++;
      while(divContainer.childNodes[k].style.order!=numArray[min_idx][1])   k++;
      if (min_idx!=i){
         swap(numArray,i,min_idx,divContainer.childNodes,l,k);
         await sleep(speed);
         console.log("hi buddy");
         for(let m = 0 ;m< numArray.length;m++){
            if(divContainer.childNodes[m].innerHTML == numArray[i][0] && divContainer.childNodes[m].style.order==numArray[i][1]){
               setColor(divContainer.childNodes[m],"#9eff9e");
            }
         }
      }
      await sleep(speed);
      for(let m = 0 ;m< numArray.length;m++){
         if(divContainer.childNodes[m].innerHTML == numArray[i][0] && divContainer.childNodes[m].style.order==numArray[i][1]){
            setColor(divContainer.childNodes[m],"#9eff9e");
         }
      }
   }
   await sleep(1000);
   for(let m = 0 ;m< numArray.length;m++){
      if(divContainer.childNodes[m].style.backgroundColor != "#9eff9e"){
         setColor(divContainer.childNodes[m],"#9eff9e")
      }
   }
}