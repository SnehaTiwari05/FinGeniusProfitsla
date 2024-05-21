import React, { useState } from 'react';

const FloatingLabelInput = ({ label }) => {
    const [value, setValue] = useState('');
    const [isLabelAbove, setIsLabelAbove] = useState(false);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleFocus = () => {
        setIsLabelAbove(true);
    };

    const handleBlur = () => {
        setIsLabelAbove(value !== '');
    };

    return (
        <div className="relative my-4">
            <label
                htmlFor={label}
                
                className={`absolute mx-44 left-2 text-sm transition-all  duration-300 ${isLabelAbove || value ? '-top-2 bg-white text-xs text-gray-600' : 'top-2'
            }`}
                
            >
                {label}
            </label>
            <input
                id={label}
                type="text"
                className="py-2 px-4 border border-slate-900 rounded-full focus:outline-none focus:border-blue-500 w-full"
                value={value}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                autoComplete='off'
            />
        </div>
    );
};

export default FloatingLabelInput;
