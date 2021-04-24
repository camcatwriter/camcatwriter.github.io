// what is the path to the JSON file?
const apiURL = "../hotel/hoteldata.json"

//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((myList) => {
    //Once it comes back, display it to the console.
    console.log(myList);

    for (i = 0; i < myList.length; i++) {
    
    let myImageTag = document.createElement("img");
    myImageTag.src = myList[i].photo;

    console.log(myList[i].photo);

    let myCaptionTag = document.createElement("figcaption");
    myCaptionTag.textContent = myList[i].name;
    console.log(myList[i].name);

    let myFigureTag = document.createElement("figure");
    myFigureTag.appendChild(myImageTag);
    myFigureTag.appendChild(myCaptionTag);

    let leftIconTag = document.createElement("i");
    leftIconTag.className = "icon ion-md-car";

    let topAddressTag = document.createElement("p");
    topAddressTag.textContent = myList[i].address[0];

    let bottomAddressTag = document.createElement("p");
    bottomAddressTag.textContent = myList[i].address[1];

    let rightIconTag = document.createElement("i");
    rightIconTag.className = "icon ion-md-call";

    let phoneNumberTag = document.createElement("p");
    phoneNumberTag.textContent = myList[i].phone;

    let leftSpanTag = document.createElement("span");
    leftSpanTag.appendChild(leftIconTag);
    leftSpanTag.appendChild(topAddressTag);
    leftSpanTag.appendChild(bottomAddressTag);

    let rightSpanTag = document.createElement("span");
    rightSpanTag.appendChild(rightIconTag);
    rightSpanTag.appendChild(phoneNumberTag);

    let divisionInformationTag = document.createElement("div");
    divisionInformationTag.appendChild(leftSpanTag);
    divisionInformationTag.appendChild(rightSpanTag);

    let bodySectionTag = document.createElement("section");
    bodySectionTag.appendChild(myFigureTag);
    bodySectionTag.appendChild(divisionInformationTag);
    
    // let gridDivTag = document.createElement("div");
    // gridDivTag.

    document.getElementById("inventoryWrapper").appendChild(bodySectionTag);
    
    }

}); //end of "then" fat arrow function