let display = document.getElementById("display");

let img1 = document.createElement("img");
img1.src = "Images/image1.jpeg";

let img2 = document.createElement("img");
img2.src = "Images/image2.jpeg";

let img3 = document.createElement("img");
img3.src = "Images/image3.jpeg";

let img4 = document.createElement("img");
img4.src = "Images/img4.jpeg";

let img5 = document.createElement("img");
img5.src = "Images/img5.JPG";


let arrImage = [img1, img2, img3, img4, img5];

let i = 0
display.appendChild(arrImage[i]);

function showPrevious() {  
    if (i === 0) {
        i = 0;
    }     
    else {        
        display.appendChild(arrImage[i]).style.display = "none";   
        i--;
        display.appendChild(arrImage[i]).style.display = "block";
    }   
}

setInterval(() => {
    if (i < arrImage.length-1) {
        display.appendChild(arrImage[i]).style.display = "none";   
        i++;
        display.appendChild(arrImage[i]).style.display = "block";
    }
}, 5000);

function showNext() {
    if (i > arrImage.length-1) {
        display.appendChild(arrImage[i]).style.display = "none";   
        i++;
        display.appendChild(arrImage[i]).style.display = "block";
    }
}


