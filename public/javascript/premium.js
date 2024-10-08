let currentIndex=0;
const  carPerPage=4;
let carGallery=document.getElementById("carGallery");
let car=[{image:"fsfs",Heading:"kfsff",description:"fsffs",price:"2132"},{image:"fsfs",Heading:"kfsff",description:"fsffs",price:"2132"},{image:"fsfs",Heading:"kfsff",description:"fsffs",price:"2132"},{image:"fsfs",Heading:"kfsff",description:"fsffs",price:"2132"}]

function renderCars(){
       carGallery.innerHTML=" ";

       for(let i=currentIndex;((i<currentIndex+carPerPage)&&(i<car.length));i++){
          
        let carDiv=document.createElement('div');
        carDiv.classList.add("carContainer");
        carGallery.appendChild(carDiv);

        let carDivImage=document.createElement('img');
        carDivImage.classList.add("carImage");
        carDiv.appendChild(carDivImage);
        carDivImage.innerHTML=`${car[i].image}`;

        let carDivHeading=document.createElement('div');
        carDivHeading.classList.add("carHeading");
        carDiv.appendChild(carDivHeading);
         carDivHeading.innerHTML=`${car[i].heading}`

        let carDivDescription=document.createElement('div');
        carDivDescription.classList.add("carDescription");
        carDiv.appendChild(carDivDescription);
         carDivDescription.innerHTML=`${car[i].description}`


        let carDivPrice=document.createElement('div');
        carDivPrice.classList.add("carPrice");
        carDiv.appendChild(carDivPrice);
         carDivPrice.innerHTML=`${car[i].price}`
         
       }


       document.getElementById('prevBtn').disabled=(currentIndex===0);
       document.getElementById('nextBtn').disabled=((currentIndex+carPerPage)>=car.length);

       function showNext(){
        
             currentIndex+=carPerPage;
             renderCars();
       }

       function showPrev(){
        currentIndex-=carPerPage;
        renderCars();

         }

         renderCars();
        
}
