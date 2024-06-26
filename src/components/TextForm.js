import React,{useState} from 'react'



export default function TextForm(props) {

    const [text,setText] = useState('');

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase","success");
    }

    const handleDownClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase","success");
    }
    
    const handleClearClick = () => {
        setText('');
        props.showAlert("Cleared","warning");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const calculateNoOfWords = (arr) => {
        let count = 0;
        arr.forEach(element => {
            if(element!==""){
                count++;
            }
        });
        return count;
    }
    
    return (
        <>
        <div className='container' style={{
            color: props.mode==='dark'?'white':'#212529'
        }}>
            <h1 className="my-5" >{props.heading}</h1>
            <div class="mb-3">
                <textarea class="form-control" id="myBox" rows="8" onChange={handleOnChange} style={{
                    backgroundColor: props.mode==='dark'?'#212529':'white',
                    color: props.mode==='dark'?'white':'#212529'
                }} value={text} placeholder='Enter Text Here'></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick} >Convert To UpperCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleDownClick} >Convert To LowerCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" on onClick={handleClearClick} >Clear</button>
        </div>
        <div className="container my-5" style={{
            color: props.mode==='dark'?'white':'#212529'
        }}>
            <h1>Your Text Summary !!</h1>
            <h6 className="mx-5">Words: {calculateNoOfWords(text.split(/\s+/))}</h6>
            <h6 className="mx-5">Character: {text.length}</h6>
            <h6 className="mx-5">Time to  read: {(0.008 * calculateNoOfWords(text.split(/\s+/)))} min.</h6><br/>
            <h3 className="mx-3"> Preview</h3>
            <p className="mx-5">{text.length>0?text:"Nothing to Preview!! "}</p>
        </div>
        </>
    )
}

