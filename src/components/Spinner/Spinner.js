import React from 'react';
import imageSpinner from '../../assets/img/loading.gif';
function Spinner(){
    return (
        <React.Fragment>
            <div>
                <img src={imageSpinner} alt=""
                className='d-block m-auto'
                style={{
                    width: '200px'
                }}></img>
            </div>
        </React.Fragment>
    )
}

export default Spinner;