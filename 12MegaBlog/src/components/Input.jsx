import React, {useId} from 'react'

const Input = React.forwardRef( function Input({    
    // forwardRef - used to pass reference (state access) of a function from input field to another file
    // React.forwardRef() allows this component to accept a ref from its parent. 
    // This is helpful when a parent wants direct access to the DOM node (e.g., focusing the input).
    label,
    type = "text",
    className = "",
    ...props
}, ref){       // ref is passed from parent function
    const id = useId()
    return (
        <div className='w-full'>
            {label && <label 
            className='inline-block mb-1 pl-1' 
            htmlFor={id}>
                {label} 
            </label>
            }
            <input
            type={type}
            className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
            ref={ref}      // Connects the ref (from parent) to the input DOM node.
            {...props}
            id={id}
            />
        </div>
    )
})

export default Input