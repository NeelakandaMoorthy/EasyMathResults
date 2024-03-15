
    function calculateResults() {
        const highest = parseFloat(document.getElementById('highest').value);
        const lowest = parseFloat(document.getElementById('lowest').value);

        if (isNaN(highest) || isNaN(lowest)) {
            alert("Please enter valid numbers.");
            return;
        }

        const average = (highest + lowest) / 2;
        const subtractedValue = highest - lowest;

        document.getElementById('result1').innerHTML = "50X: " + average.toFixed(2);
        document.getElementById('result2').innerHTML = "Difference: " + subtractedValue;
        document.getElementById('result3').innerHTML = "Value: " + (subtractedValue / 2).toFixed(2);

        document.getElementById('result1').className = "result green";
        document.getElementById('result2').className = "result blue";
        document.getElementById('result3').className = "result pink";
    }