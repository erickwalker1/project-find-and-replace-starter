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

    const findInputValue = findInput.value
    const replaceInputValue = replaceInput.value
 
    for(let rowIndex = 0; rowIndex < rowElements.length; rowIndex ++){
    
        let currentRowElement = rowElements[rowIndex]
    
        //console.log(currentRowElement)
    
        let cellElements = getCellElements(currentRowElement);
    
        //console.log(currentElement)
    
        for(let cellElementIndex = 0; cellElementIndex < cellElements.length; cellElementIndex ++ ){
    
            let cellElement = cellElements[cellElementIndex]
    
            //console.log(cellElement)
    
            if(cellElement.innerHTML.includes(findInputValue)){
        
                cellElement.innerHTML = cellElement.innerHTML.replace(findInputValue, replaceInputValue)
            }
        }
    }
})
