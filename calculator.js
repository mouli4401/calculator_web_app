function append(num) {
  let ele = document.getElementById("result").value;
  if (ele === "0") {
    ele = '';
  }
  ele += num;
  document.getElementById("result").value = ele;
}

function calculate() {
  let ele = document.getElementById("result").value;
  try {
    let total = eval(ele);
    document.getElementById("result").value = total;
  } catch (error) {
    document.getElementById("result").value = "Error";
  }
}

function clearAll() {
  document.getElementById("result").value = "";
}

function memoryCancel() {
  localStorage.removeItem('calculatorMemory');
}

function memoryRestore() {
  const memory = localStorage.getItem("calculatorMemory");
  if (memory !== null) {
    document.getElementById("result").value = memory;
  }
}

function memorySave() {
  const current = parseFloat(document.getElementById("result").value);
  if (!isNaN(current)) {
    localStorage.setItem("calculatorMemory", current);
  }
}

function memoryAdd() {
  const current = parseFloat(document.getElementById("result").value);
  const memory = parseFloat(localStorage.getItem("calculatorMemory")) || 0;
  const total = current + memory;
  localStorage.setItem("calculatorMemory", total);
}

function memoryMinus() {
  const current = parseFloat(document.getElementById("result").value);
  const memory = parseFloat(localStorage.getItem("calculatorMemory")) || 0;
  const result = memory - current;
  localStorage.setItem("calculatorMemory", result);
}
function backSpace() {
  let input = document.getElementById("result");
  let value = input.value;
  input.value = value.substring(0, value.length - 1);
}
function changeSign() {
  let input = document.getElementById("result");
  let value = input.value;

  if (value) {
    if (value.startsWith("-")) {
      input.value = value.substring(1); 
    } else {
      input.value = "-" + value; 
    }
  }
}
