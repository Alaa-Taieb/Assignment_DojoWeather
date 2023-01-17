/* Alerts a message to the user */
function alertLoadingCityData(element){
    var city = element.innerText;
    alert(`Loading weather report for ${city}`);
}

/* Removes the alert box from the page */
function removeElement(id){
    var element = document.getElementById(id);
    element.remove();
}

/* Change Temprature system */
function changeSystem(element){
    var value = element.value;
    var values = document.getElementsByClassName('temprature');
    /* To parse an object like array we use this syntax */
    Array.prototype.forEach.call(values , (e) => {
        e.innerText = convertTemp(e.innerText , value);
    })

}

/* Temprature Conversion Function */
function convertTemp(temp , system){
    console.log(temp);
    if(system === "F") {
        return roundToTwoDecimalPoints((temp * 9/5) + 32);
    }else{
        return roundToTwoDecimalPoints((temp - 32) * 5/9);
    }
}

/* Ensures that only two decimal points are displayed */
function roundToTwoDecimalPoints(num) {
    return Math.round(num * 100) / 100;
}