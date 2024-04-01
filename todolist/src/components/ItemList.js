import React, { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// Importing specific action methods from 'todolistAction'
import { selectItem, removeItem } from '../action/todolistAction';
// Importing icons from Material-UI
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import EditIcon from '@material-ui/icons/Edit';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import DeleteIcon from '@material-ui/icons/Delete';

const ItemList = () => {

    // Getting todolist state from centralized state
    const myState = useSelector((state) => state.todolistReducer.todolist);

    // Dispatch method from 'react-redux'
    const dispatch = useDispatch();

    // Item select action handler
    const selectHandle = (item, itemId) => {
        // Dispatch selectItem action
        dispatch(selectItem(item, itemId));
        // Remove class to update-row
        document.getElementById('update-row').classList.remove('d-none');
    }

    return (<>
        <div className='row mb-2'>
            <div
                className="col-12  overflow-auto"
                style={{ height: '300px' }}
            >
                {/* Unordered-list */}
                <ul className='list-group list-group-flush'>
                    {
                        // Render all item list
                        myState.map((item, itemId) =>
                            <li
                                key={itemId}
                                className='list-group-item'
                            >
                                {/* Display item */}
                                {item}
                                {/* Remove item action */}
                                <span
                                    onClick={() => dispatch(removeItem(itemId))}
                                    className='change-delete-icon float-right'
                                >
                                    {/* Icons for delete item */}
                                    <span className='delete-outline-icon'>
                                        <DeleteOutlineIcon />
                                    </span>
                                    <span className='delete-icon'>
                                        <DeleteIcon />
                                    </span>
                                </span>
                                {/* Edit item action */}
                                <span
                                    onClick={() => selectHandle(item, itemId)}
                                    className='change-edit-icon float-right mr-2'
                                >
                                    {/* Icons for edit item */}
                                    <span className='edit-outlined-icon'>
                                        <EditOutlinedIcon />
                                    </span>
                                    <span className='edit-icon'>
                                        <EditIcon />
                                    </span>
                                </span>
                            </li>
                        )
                    }
                </ul>
            </div>
        </div>
    </>)
}

export default memo(ItemList)
