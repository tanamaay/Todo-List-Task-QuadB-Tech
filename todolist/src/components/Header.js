import React, { memo } from 'react';

const Header = () => {
    return (<>
        {/* Start of Header */}
        <div className='row mt-3'>
            <div className="col-12">
                {/* Heading */}
                <h2 className='text-center my-auto'>ToDoList</h2>
            </div>
        </div>
        {/* Horizontal line */}
        <hr />
        {/* End of Header */}
    </>)
}

export default memo(Header);
