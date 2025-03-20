

const shoppingList = [];

const inputField = document.getElementById("items");
const addButton = document.getElementById("add-item");
const clearButton = document.getElementById("clear-list");
const listElement = document.getElementById("shopping-list");


//render list functions
function renderList() {
    listElement.innerHTML = " ";
    shoppingList.forEach((item, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = item;

        //toggling purchased items
        listItem.addEventListener("click", () => {
            listItem.classList.toggle("Item Purchased");
        });

        // adding edit button
        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.addEventListener("click", () =>{
            const newItem = prompt ("Edit item:", shoppingList[index]);
            if (newItem) {
                shoppingList[index] = newItem.trim();
                saveToLocalStorage();
                renderList();
            }
        });

        // adding delete button 
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () =>{
            shoppingList.splice(index, 1);
            saveToLocalStorage();
            renderList();
        });

        //appending buttons and list item to the shopping list
        listItem.appendChild(editButton);
        listItem.appendChild(deleteButton);
        listElement.appendChild(listItem);
    });
}

// function to save to local storage 
function saveToLocalStorage() {
    localStorage.setItem("shoppingList", JSON.stringify(shoppingList));
}

// function button to add new item
addButton.addEventListener("click", () => {
    const newItem = inputField.value.trim();
    
    if (newItem) {
        shoppingList.push(newItem); 
        saveToLocalStorage();
        renderList();
        inputField.value = " "; // will clear the input field
    }
});

// function button to clear the list
clearButton.addEventListener ("click", () => {
    shoppingList.length = 0;
    saveToLocalStorage();
    renderList();
});
renderList();















