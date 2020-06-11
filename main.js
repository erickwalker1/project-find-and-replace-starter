/* 

User Experince:

1. User looks and selects a row(rowsElement)
2. User inputs some text found within that cells' innerHTML in the Find Input Box
3. User inputs some value in the Replace With Input Box 
4. The innerHTML of that cells element is changed to the users input value 

*/



const findInput = document.querySelector(".find-input")
const replaceInput = document.querySelector(".replace-input")
const replaceAllButton = document.querySelector(".replace-all-button")


const rowElements = document.querySelectorAll(".row")




function getCellElements (currentRowElement) {
    return currentRowElement.querySelectorAll(".cell")
}


replaceAllButton.addEventListener('click', function(){

 
    for(let rowIndex = 0; rowIndex < rowElements.length; rowIndex ++){
    
        let currentRowElement = rowElements[rowIndex]
    
        //console.log(currentRowElement)
    
        let cellElements = getCellElements(currentRowElement);
    
        //console.log(currentElement)
    
        for(let cellElementIndex = 0; cellElementIndex < cellElements.length; cellElementIndex ++ ){
    
            let cellElement = cellElements[cellElementIndex]
    
            //console.log(cellElement)
    
            if(cellElement.innerHTML.includes(findInput.value)){
        
                cellElement.innerHTML = cellElement.innerHTML.replace(findInput.value, replaceInput.value)
            }
        }
    }
    //cellElement = newCellElement
})

// One last thing: dedicate very careful attention to using variables and
// naming them accurately.
// And when you change the value you are assigning to a variable, don't
// forget to consider changing the name to reflect the change you made! It
// is very easy to get confused when you are working inside NESTED LOOPS.
// The best of us do. And unnecessary confusion during the process of 
// developing your code means wasted time.
//
// The time-cost of structuring and naming things well is FAR less than the
// time-cost of ignoring the quality and readability of your code.
//
// You can, of course, remove any comments in this starter project once
// you have read them, if you prefer.
