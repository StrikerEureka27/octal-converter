console.log("Conectado");


const octalToBinaryEquivalence = {
    000: '0',
    001: '1',
    010: '2',
    011: '3',
    100: '4',
    101: '5',
    110: '6',
    111: '7'
}

const printResult = (message) => {
    const resultSection = document.getElementById("result");
    const result = document.createElement("h3");
    result.id = "printMessage";
    result.innerText = "chmod " + message;
    result.style.backgroundColor = "greenyellow";
    result.style.color = "black";
    result.style.margin = 10;
    return resultSection.appendChild(result)
}

const cleanResult = () => {
    const result = document.getElementById("printMessage");
    if(result!=null){
        return result.remove();
    }
}

const convertToDecimal = () => {
    const userInput = document.getElementById("user_input").value;
    const groupInput = document.getElementById("group_input").value;
    const worldInput = document.getElementById("world_input").value;
    return printResult(octalToBinaryEquivalence[userInput] + octalToBinaryEquivalence[groupInput] + octalToBinaryEquivalence[worldInput])
}

