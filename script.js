(function () {
    "use strict";
    let convertType = "miles";
    const heading = document.querySelector("h1");
    const intro = document.querySelector("p");
    const answerDiv = document.getElementById("answer");
    const form = document.getElementById("convert");
    document.addEventListener("keydown", function (event) {
        const key = event.code;
        // alert(key);
        if (key === 'KeyK') {
            convertType = "Kilometers";
            // alert(key);
            //change the Heading
            heading.innerHTML = "Kilometers to Miles convertor";
            intro.innerHTML = "Type in number of kilometers and click the button to convert the distance to miles";


        } else if (key === 'KeyM') {
            convertType = "Miles";
            // alert(key);
            //change the Heading
            heading.innerHTML = "Miles to Kilometers convertor";
            intro.innerHTML = "Type in number of miles and click the button to convert the distance to kilometers";
        }

    });

    form.addEventListener("submit", function (eve) {
        eve.preventDefault();
        console.log("Hi");

        const distance = parseFloat(document.getElementById("distance").value); //it will return NAn for string
        console.log(distance);
        if (distance) {  //for Nan it will become false 
            if (convertType === "Miles") {
                const converted = (distance * 1.609344).toFixed(3);
                answerDiv.innerHTML = `${distance} miles converted to ${converted} kilometers`;
            } else {
                const converted = (distance * 0.621371192).toFixed(3);
                answerDiv.innerHTML = `${distance} kilometers converted to ${converted} miles`;
            }

        } else {
            answer.innerHTML = "Please enter the Number";
        }
    });
})();