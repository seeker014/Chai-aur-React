import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){   // write <MyApp/> in render part at last to run this function
    return (
        <div>
            <h1>Custom App !</h1>
        </div>
    )
}  // there is a bundler in react which converts this html like code to one that resembles the customreact below.

// this is the custom react that we made , so it wont run directly in render wala part since key and values are diff from default React
// const reactElement = {
//     type: 'a',    // can be <a> tag or <div> tag or <p> tag
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     } ,
//     children : 'Click me to visit Google'
// }

const anotherElement = (
    <a href="https://google.com" target='_blank'> Visit Google </a>
) // writing anotherElement in render part at last runs this object (this has direct html code)

const user2= "chai aur user"

// this is the default react syntax which is predefined and injected by babel(transpiler) and changed into the form like we created custom react
const reactElement = React.createElement(      
    'a',   //type
    {href:'https://google.com',  target: '_blank'}, //props
    'Click me to visit Google',  //text you want to write
    user2  // any variables can be injected at end
)
// customreact file is the example of how bundler works and changes code in the form which is readable by React.

createRoot(document.getElementById('root')).render(

    reactElement

)
