import React,{useState} from 'react'



export default function TextForm(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleDownClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const [text,setText] = useState('');
    
    return (
        <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div class="mb-3">
                <textarea class="form-control" id="myBox" rows="8" onChange={handleOnChange} value={text} placeholder='Enter Text Here'></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick} >Convert To UpperCase</button>
            <button className="btn btn-primary mx-1" onClick={handleDownClick} >Convert To UpperCase</button>
        </div>
        <div className="container my-3">
            <h1>Your Text Summary.</h1>
            <h6>Words: {text.split(" ").length}</h6>
            <h6>Character: {text.length}</h6>
            <h6>Time to  read: {(0.008 * text.split(" ").length)} min.</h6>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>
        </>
    )
}

