import React from 'react';

const Subtitle: React.FC= () => {
  return(
        <>
            <p className="text text-subtitle py-0 px-1 my-0">order your freshly bake cakes</p> 
            <p className="text text-subtitle py-0 px-1 my-0">made using only the finest quality</p> 
            <p className="text text-subtitle pb-4 py-0 px-1 my-0">natural ingredients.</p>
            <div className="text-success">
                <hr style={{
                        color: '#000000',
                        backgroundColor: '#000000',
                        height: .5,
                        borderColor : '#000000'
                    }}
                />
            </div>
        </>
    ) 
};

export {Subtitle}