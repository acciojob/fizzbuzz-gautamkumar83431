//your JS code here. If required.
    function runFizzBuzz() {
      const limit = parseInt(document.getElementById("limitInput").value);
      if (isNaN(limit) || limit < 1) {
        alert("Please enter a valid number greater than 0.");
        return;
      }

      let output = "";
      for (let i = 1; i <= limit; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
          output += "FizzBuzz\n";
        } else if (i % 3 === 0) {
          output += "Fizz\n";
        } else if (i % 5 === 0) {
          output += "Buzz\n";
        } else {
          output += i + "\n";
        }
      }

      alert(output);
    }