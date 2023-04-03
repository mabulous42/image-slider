let display = document.getElementById("display");
// let img1 = document.getElementById("img1");
// let img2 = document.getElementById("img2");
// let img3 = document.getElementById("img3");
// let imgDiv = document.getElementById("show-img");

let img1 = document.createElement("img");
img1.src = "Images/image1.jpeg";

let img2 = document.createElement("img");
img2.src = "Images/image2.jpeg";

let img3 = document.createElement("img");
img3.src = "Images/image3.jpeg";

// document.body.appendChild(img1);

let arrImage = [img1, img2, img3];
// display.appendChild(arrImage[0]).style.display = "none";
// arrImage.push(img2);
// display.appendChild(arrImage[1]);

// for (let index = 0; index < arrImage.length; index++) {
//     display = arrImage[index].style.display = "none";
// }

let i = 0
display.appendChild(arrImage[i]);

// console.log(arrImage.length);
function showPrevious() {  
    if (i < arrImage.length) {
        display.appendChild(arrImage[i]).style.display = "none";   
        i--;
        display.appendChild(arrImage[i]).style.display = "block";
    }     
    else {
        i = arrImage.length
    }
   
}
function showNext() {
    if (i < arrImage.length-1) {
        display.appendChild(arrImage[i]).style.display = "none";   
        i++;
        display.appendChild(arrImage[i]).style.display = "block";
    }     
    else {
        i = arrImage.length-1;
    }
}


