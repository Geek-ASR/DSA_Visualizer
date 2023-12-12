const insertionSort = async (numArray,divContainer)=>{
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
   let i,j,k=0,l=0;
   let flag
   for(i=1;i<numArray.length;i++){
      for(j=i-1;j>=0;j--){
         l=0;k=0;
         flag =false;
         while(divContainer.childNodes[l].style.order!=numArray[j][1])   l++;
         while(divContainer.childNodes[k].style.order!=numArray[j+1][1])   k++;
         await sleep(speed);
         setColor(divContainer.childNodes[l],"rgb(251, 215, 173)")
         setColor(divContainer.childNodes[k],"rgb(251, 215, 173)")
         await sleep(speed);
         if(numArray[j+1][0]<numArray[j][0]){
            swap(numArray,j,j+1,divContainer.childNodes,l,k);
            await sleep(speed)
            setColor(divContainer.childNodes[l],"rgb(166, 218, 216)")
            setColor(divContainer.childNodes[k],"rgb(166, 218, 216)")
            flag = true;
         }
         setColor(divContainer.childNodes[l],"rgb(166, 218, 216)")
         setColor(divContainer.childNodes[k],"rgb(166, 218, 216)")
         if(flag==false) break;
      }
      for(let m = i ;m>=0;m--){
         for(let n = 0 ;n< numArray.length;n++){
            if(divContainer.childNodes[n].innerHTML == numArray[m][0] && divContainer.childNodes[n].style.order==numArray[m][1]){
               await sleep(speed);
               setColor(divContainer.childNodes[n],"#9eff9e");
               break;
            }
         }
      }
   }
   for(let m = 0 ;m< numArray.length;m++){
      if(divContainer.childNodes[m].style.backgroundColor != "#9eff9e"){
         await sleep(speed);
         setColor(divContainer.childNodes[m],"#9eff9e")
      }
   }
}