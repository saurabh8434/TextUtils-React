import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
    const [text, setText] = useState('Enter text here');

    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase!", "success");
    }

    const handleLowClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowerCase!", "success");
    }

    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '));
        props.showAlert("Extra Spaces removed!", "success");
    }

    const copyToClipboard = ()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Text copied to clipboard!", "success")
    }

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value = {text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor : props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}}></textarea>
        </div>

        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert To UpperCase</button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert To LowerCase</button>
        <button className="btn btn-primary mx-1" onClick={copyToClipboard}>Copy to clipboard</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>

    <div className="container my-4" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your text Summary</h2>
        <p>{text.length>0?text.split(" ").length:0} words and {text.length} characters</p>
        <p>{text.length>0?0.008 * text.split(" ").length:0} minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Something in the text box above to preview it here."}</p>
    </div>
    </>
  )
}

TextForm.propTypes = { heading : PropTypes.string};
