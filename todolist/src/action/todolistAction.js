// Add item to todolist
export const addItem = (text) => {
    return {
        type: 'addItem', // Action type for adding an item
        payload: text // Text content of the item being added
    }
}

// Remove all items from todolist
export const removeAllItem = () => {
    return {
        type: 'removeAllItem' // Action type for removing all items
    }
}

// Select item to update
export const selectItem = (cv, id) => {
    return {
        type: 'selectItem', // Action type for selecting an item to update
        payload: {
            updateText: cv, // Text content of the item being updated
            updateId: id // ID of the item being updated
        }
    }
}

// Remove item from todolist
export const removeItem = (id) => {
    return {
        type: 'removeItem', // Action type for removing a specific item
        payload: id // ID of the item being removed
    }
}

// Update item in todolist
export const updateItem = (updateText, updateId) => {
    return {
        type: 'updateItem', // Action type for updating an item
        payload: {
            updateText: updateText, // Updated text content of the item
            updateId: updateId // ID of the item being updated
        }
    }
}

// Cancel update action
export const cancelUpdate = () => {
    return {
        type: 'cancelUpdate' // Action type for canceling an update
    }
}
