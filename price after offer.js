let item=[250,645,300,900,50];
 console.log(`price without offer ${item}`);
   for(let i=0; i<item.length; i++){
    let offer=item[i]/10;
    item[i]-=offer;
   }
   console.log(`price with offer ${item}`);

 