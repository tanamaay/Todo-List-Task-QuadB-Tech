import React, { useState, memo } from 'react';
import { useDispatch } from 'react-redux';
// Importing specific action methods from 'todolistAction'
import { addItem, removeAllItem } from '../action/todolistAction';

// Style for text input, add button, remove all button
const boxShadow = {
    boxShadow: 'none',
    WebkitBoxShadow: 'none'
};
// Style for update button, cancel button
const btnWidth = { width: '100%' };

const AddNewItem = () => {

    // useState for storing new item
    const [item, setItem] = useState('');

    // Dispatch method from 'react-redux'
    const dispatch = useDispatch();

    // Add new item action handler
    const handleForm = (e) => {
        // Prevent default form submission behavior
        e.preventDefault();
        // Trim whitespace from both sides of the input
        const trimUpdateText = item.trim();
        if (trimUpdateText !== '') {
            // Dispatch add item action with trimmed text
            dispatch(addItem(trimUpdateText));
            // Clear input field after adding item
            setItem('');
        }
    }

    // Remove all list action handler
    const removeAllHandle = (e) => {
        // Prevent default button behavior
        e.preventDefault();
        // Dispatch remove all items action
        dispatch(removeAllItem());
    }

    return (<>
        <div className="row">
            <div className="col-12">
                {/* Form start */}
                <form
                    className='form-group my-auto'
                    onSubmit={handleForm}
                >
                    <div className='row mb-3'>
                        <div className='col-12'>
                            {/* Input to add new item */}
                            <input
                                className='form-control text-center border'
                                style={boxShadow}
                                type="text"
                                value={item} onChange={(e) => setItem(e.target.value)}
                                maxLength='16'
                                placeholder='Write Here !!'
                                required
                            />
                        </div>
                    </div>
                    <div className='row justify-content-center'>
                        <div className="col-5 col-sm-4 p-0 mr-2">
                            {/* Add new item button */}
                            <input
                                className='btn btn-light border addBtn'
                                style={{ ...boxShadow, ...btnWidth }}
                                type="submit"
                                value="Add Item"
                            />
                        </div>
                        <div className='col-5 col-sm-4 p-0'>
                            {/* Remove all items button */}
                            <button
                                className='btn btn-light border removeAllBtn'
                                style={{ ...boxShadow, ...btnWidth }}
                                onClick={removeAllHandle}
                            >Remove All</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        {/* Horizontal line */}
        <hr className='mb-2' />
    </>)
}

export default memo(AddNewItem);
