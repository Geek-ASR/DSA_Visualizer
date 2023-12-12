
const bubbleSort =  async (numArray,divContainer) =>{
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
   let i ,j,count=0;
   let l =0 , k=0;
   for( i = 0; i<numArray.length-1;i++){
      for( j=0;j<numArray.length-1-i;j++){
         l=0;
         k=0;
         console.log(numArray);
         while(divContainer.childNodes[l].style.order!=numArray[j][1])   l++;
         while(divContainer.childNodes[k].style.order!=numArray[j+1][1])   k++;
         await sleep(speed)
         setColor(divContainer.childNodes[l],"rgb(251, 215, 173)")
         setColor(divContainer.childNodes[k],"rgb(251, 215, 173)")
         await sleep(speed)

         if(numArray[j][0] > numArray[j+1][0]){

            swap( numArray ,j,j+1,divContainer.childNodes,l,k);
            await sleep(speed)
            setColor(divContainer.childNodes[l],"rgb(166, 218, 216)")
           setColor(divContainer.childNodes[k],"rgb(166, 218, 216)")
         }
         setColor(divContainer.childNodes[l],"rgb(166, 218, 216)")
         setColor(divContainer.childNodes[k],"rgb(166, 218, 216)")
      }
      await sleep(speed);
      for(let m = 0 ;m< numArray.length;m++){
         if(divContainer.childNodes[m].innerHTML == numArray[j][0]){
            setColor(divContainer.childNodes[m],"#9eff9e")
         }
      }
   }
   await sleep(speed);
   for(let m = 0 ;m< numArray.length;m++){
      if(divContainer.childNodes[m].style.backgroundColor != "#9eff9e"){
         setColor(divContainer.childNodes[m],"#9eff9e")
      }
   }
}