   const checkbox1 = document.getElementById("checkbox1");
    const checkbox2 = document.getElementById("checkbox2");
    const resultAnd = document.getElementById("result-and");
    const resultOr = document.getElementById("result-or");
    const resultXor = document.getElementById("result-xor");

    function updateResults() {
      const val1 = checkbox1.checked;
      const val2 = checkbox2.checked;
      
      resultAnd.textContent = (val1 && val2) ? "true" : "false";
      resultOr.textContent = (val1 || val2) ? "true" : "false";
      resultXor.textContent = (val1 !== val2) ? "true" : "false";
    }

    checkbox1.addEventListener("change", updateResults);
    checkbox2.addEventListener("change", updateResults);