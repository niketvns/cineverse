import React from 'react';

const Loading = () => {
    return (
        <div className={'loading  min-h-[80vh] flex justify-center items-center'}>
            <div className="lds-ripple">
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Loading;