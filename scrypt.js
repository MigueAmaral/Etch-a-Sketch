const rows = []
const column = []
let input = 0;

function gridSize(){
    input += prompt("How many squares per side? max:70");
    addRows()
    addColumns()
}

function addRows(){
    for (let i=0; i<input;i++){
        const container = document.getElementById("container");
        const newRow = document.createElement("div");
        newRow.setAttribute("id", `Row${i}`);
        newRow.setAttribute("class", "row");
        container.appendChild(newRow);
        rows.push(1);
        };
}
function addColumns(){
    for (let j=0; j<input;j++){
        const container = document.getElementById(`Row${j}`);
        for (let a=0; a<input; a++){
            const newDiv = document.createElement("div");
            newDiv.setAttribute("id",`Column${a}`);
            newDiv.setAttribute("class", "squares")
            newDiv.style.border = "solid black";
            newDiv.style.margin = "1px";
            newDiv.style.minHeight = "25px";
            newDiv.style.minWidth = "25px";
            container.appendChild(newDiv);
            column.push(1);
        }
    }
}

