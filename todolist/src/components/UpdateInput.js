import React, { useEffect, useState, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// Importing specific action methods from 'todolistAction'
import { updateItem, cancelUpdate } from '../action/todolistAction';

// Style for text input, add button, remove all button
const boxShadow = {
    boxShadow: 'none',
    WebkitBoxShadow: 'none'
};
// Style for update button, cancel button
const btnWidth = { width: '100%' };

const UpdateInput = () => {

    // useState to store updated item
    const [updateText, setUpdateText] = useState('');
    // useState to store selected item ID
    const [selectedItemId, setSelectedItemId] = useState(null);

    // Get selected item from centralized state
    const myState = useSelector((state) => state.todolistReducer.updateItem);
    // Dispatch method from 'react-redux'
    const dispatch = useDispatch();

    // useEffect to update state when myState changes
    useEffect(() => {
        // Set selected item text and ID
        setUpdateText(myState.updateText);
        setSelectedItemId(myState.updateId);
    }, [myState]);

    // Update input action handler
    const updateItemHandle = (e) => {
        // Prevent default form submission behavior
        e.preventDefault();
        // Trim whitespace from both sides of the updated text
        const trimUpdateText = updateText.trim();
        if ((selectedItemId !== null) && (trimUpdateText !== "")) {
            // Dispatch updateItem action with updated text and ID
            dispatch(updateItem(trimUpdateText, selectedItemId));
            setSelectedItemId(null);
            setUpdateText('');
            // Add class to hide update row
            document.getElementById('update-row').classList.add('d-none');
        }
    }

    // Cancel update action handler
    const cancelUpdateHandle = (e) => {
        // Prevent default button behavior
        e.preventDefault();
        // Dispatch cancelUpdate action
        dispatch(cancelUpdate());
        setUpdateText('');
        setSelectedItemId(null);
        // Add class to hide update row
        document.getElementById('update-row').classList.add('d-none');
    }

    return (<>
        {/* Update input form */}
        <div
            id='update-row'
            className="row position-absolute w-100 d-none"
            style={{
                height: '100vh',
                zIndex: '10',
                top: '0',
                left: '15px',
                backdropFilter: 'blur(4px)',
                WebkitBackdropFilter: 'blur(4px)'
            }}
        >
            <div
                className="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4
                mx-auto my-auto border rounded shadow bg-white"
                style={{ zIndex: '11' }}
            >
                {/* Update form */}
                <form
                    className='form-group'
                    onSubmit={updateItemHandle}
                >
                    <div className="row mt-3 mb-2">
                        <div className="col-12">
                            {/* Update input field */}
                            <input
                                className='form-control text-center border'
                                style={boxShadow}
                                type='text'
                                value={updateText}
                                onChange={(e) => setUpdateText(e.target.value)}
                                maxLength='16'
                                placeholder='Write Here !!'
                                required
                            />
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-5 col-sm-4 p-0 mr-2">
                            {/* Update button */}
                            <input
                                className='btn btn-light border'
                                style={{ ...boxShadow, ...btnWidth }}
                                type="submit"
                                value="Update"
                            />
                        </div>
                        <div className="col-5 col-sm-4 p-0">
                            {/* Cancel update button */}
                            <button
                                className='btn btn-light border'
                                style={{ ...boxShadow, ...btnWidth }}
                                onClick={cancelUpdateHandle}
                            >Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </>)
}

export default memo(UpdateInput)
