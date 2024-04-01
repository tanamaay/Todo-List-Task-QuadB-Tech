import React from 'react';
import AddNewItem from './AddNewItem'; // Importing AddNewItem component
import Header from './Header'; // Importing Header component
import ItemList from './ItemList'; // Importing ItemList component
import UpdateInput from './UpdateInput'; // Importing UpdateInput component

const Todolist = () => {
    return (<>
        {/* Main container */}
        <div className='container position-relative'>
            <div
                className='row'
                style={{
                    height: '100vh',
                    zIndex: '1'
                }}
            >
                <div className='col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4
                    mx-auto my-auto border rounded shadow'>
                    {/* Header Component */}
                    <Header />
                    {/* Add New Item Component */}
                    <AddNewItem />
                    {/* Item List Component */}
                    <ItemList />
                </div>
            </div>
            {/* Update Input Component */}
            <UpdateInput />
        </div>
    </>)
}

export default Todolist;
