import React from 'react'
import { preview } from '../assets';

const FormField = ({ LableName, type, name, placeholder, value, handleChange, isSupriseMe, handleSupriseMe }) => {
    return (
        <div>
            <div className="flex  items-center  gap-2 mb-2">
                <label htmlFor={name}
                    className="block text-sm font-medium text-gray-900">
                    {LableName}
                </label>
                {isSupriseMe && (
                    <button type="button" onClick={handleSupriseMe} className=" font-semibold text-xs bg-[#ff3a54] py-1 px-2 rounded-[5px] text-white">
                        Random
                    </button>
                )}

            </div>
            <input
                type={type}
                id={name}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#4649ff]  focus:border-[#4649ff] outline-none block w-full p-3"
            />


        </div>
    )
}

export default FormField;
