import React from 'react';
import Band from '../components/Band';
const Bands = props => {
    const bands = props.bands.map((band => <Band key={band.id} {...band} deleteBand={props.deleteBand}/>))

    return (
        <div>
           Bands Component
           {bands}
        </div>
    )
}

export default Bands;