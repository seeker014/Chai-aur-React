// This is how element is evaluated in original React also.
function customRender(reactElement,container)
{
    /* 
    const domElement=document.createElement(reactElement.type);
    domElement.innerHTML=reactElement.children;
    domElement.setAttribute('href', reactElement.props.href);
    domElement.setAttribute('target', reactElement.props.target);

    container.appendChild(domElement);
    */
    
    // Better approach of writing above part
    const domElement=document.createElement(reactElement.type);
    domElement.innerHTML=reactElement.children;
    for (const prop in reactElement.props) {
            if (prop==='children') continue;
            domElement.setAttribute(prop,reactElement.props[prop]);
        }

    container.appendChild(domElement);

}

const reactElement = {
    type: 'a',    // can be <a> tag or <div> tag or <p> tag
    props: {
        href: 'https://google.com',
        target: '_blank'
    } ,
    children : 'Click me to visit Google'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement,mainContainer)  // we want to inject elements in root tag (mainContainer)





