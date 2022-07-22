import React, { useState } from 'react';

export default function TextForm(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleDownClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleEmail = () => {
        const emails = [];
        let i = 0;
        let arr = text.split(" ");
        arr.forEach(element => {
            if (element.includes("@") && element.includes(".com")) {

                emails[i] = element;
                i++;
            }
        });
        // console.log(emails);
        setText(emails.toString());   
    }
    const handleClear = ()=>{
        setText("");
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    // Declare a new state variable, which we'll call "text"
    const [text, setText] = useState('');

    return (
        <>
            <div className='container'>
                <div className="mb-3">
                    <h1>{props.heading}</h1>
                    <label htmlFor="myBox" className="form-label">Enter your Text below</label>
                    <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} style ={{backgroundColor: props.mode === 'dark'?'rgb(23 53 72)':'white', color: props.mode === 'dark'?'white':'black'}} rows="8"></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick} >Convert to Uppercase</button>
                <button className="btn btn-primary mx-3" onClick={handleDownClick} >Convert to Lowercase</button>
                <button className="btn btn-primary " onClick={handleEmail} >Extract email</button>
                <button className="btn btn-primary mx-3" onClick={handleClear} >Clear</button>
                
            </div>
            <div className="container my-3">
                <h2>Your text summary</h2>
                <p>{text.split(" ").filter(function(n) { return n !== ''}).length} words, {text.length} characters, {text.split(".").length - 1} Sentences</p>
                <p>Time taken {0.008 * text.split(" ").length} Minutes</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter your text to preview"}</p>
            </div>
            
        </>
    )
}
