import { Triangle } from "./triangle.js";
import './css/styles.css';

function handleFormSubmission(event) {
    event.preventDefault();    
    const length1 = document.querySelector('#length1').value;
    const length2 = document.querySelector('#length2').value;
    const length3 = document.querySelector('#length3').value;
    if (length1 && length2  && length3) {
        if (length1 <= 0 || length2 <= 0 || length3 <= 0) {
            document.querySelector('#response').innerText = "Invalid input";
        } else {
            const triangle = new Triangle(parseInt(length1), parseInt(length2), parseInt(length3));
            const response = triangle.checkType();
            document.querySelector('#response').innerText = response;
        }        
    } 
    document.querySelector('#length1').value = null;
    document.querySelector('#length2').value = null;
    document.querySelector('#length3').value = null;
}

window.addEventListener("load", function () {
    document.querySelector("form#triangle-checker-form").addEventListener("submit", handleFormSubmission);
});