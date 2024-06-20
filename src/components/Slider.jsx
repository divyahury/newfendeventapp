import React, {useState} from 'resct';

const Slider = () => {
    const [value, setValue] = useState(50);

    const handleSliderChange = (e) => {
        setValue(e.target.value);
    };

    return(
        <div className='slider_container'>
            <input 
                type='range' min='0' max='100'
                value={value} onChange={handleSliderChange}
                className='slider'
            />
            <p>Value: {value}</p>
        </div>
    );
};

export default Slider