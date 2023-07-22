import React, { useState } from 'react';





export default function TextForm(props) {
    const [text, setText] = useState("Enter the text here");
    const handle = () => {
        console.log('button clicked');
        let newtext = text.toUpperCase();
        setText(newtext);
    } 

    const handlep = () => {
        console.log('button clicked');
        let newtext = text.toLowerCase();
        setText(newtext);
    }

    const handlec = () => {
        console.log('button clicked');
        let newtext = '';
        setText(newtext);
    }


    const clickChanged = (event) => {
        console.log('onchnage');
        setText(event.target.value);
    }

    return (
        <>
        <div className='container'>
            <div className="mb-2">
                <h1>{props.title}</h1>
                <label for="MyBox" class="form-label"></label>
                <textarea className="form-control" value={text} onChange={clickChanged}  id="MyBox" rows="5"></textarea>
                <button className='btn btn-primary my-3 mx-2' onClick={handle}>Convert to upperCase</button>
                <button className='btn btn-primary my-3 mx-2' onClick={handlep}>Convert to lowerCase</button>
                <button className='btn btn-primary my-3 mx-2' onClick={handlec}>Clear</button>
            </div>
        </div>
        <div className='container'>
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} Words and {text.length} Characters </p>
            <h2>Preview</h2>
            <p>{text} </p>
        </div>
        
        </>
        
    )
}
