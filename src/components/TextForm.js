import React, {useState} from 'react'

export default function TextForm(props) {

  const handleUpClick = ()=>{
    //console.log("UpperCase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase","success");
  }
  const handleLoClick = ()=>{
    //console.log("UpperCase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase","success");
  }
  const handleOnChange = (event)=>{
    //console.log("On Change");
    setText(event.target.value);
  }
  const handleCopy = ()=>{
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copy to Clipboard","success");
  }
  const handleClear = ()=>{
    let newText = ("");
    setText(newText);
    props.showAlert("Text cleared","success");
  }

  const [text, setText]= useState("");
  
  return (
    <>
<div className="container my-3" style={{color:props.mode === 'dark'?'white':'#042743'}}>
  <h1>Enter Your Text Here</h1>
  <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode === 'dark'?'white':'white',color:props.mode === 'dark'?'black':'#042743'}} rows="8"></textarea>
  <button className="btn btn-primary my-3 mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
  <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
  <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy to Clipboard</button>
  <button className="btn btn-primary mx-2" onClick={handleClear}>Clear</button>
</div>
<div className="container" style={{color:props.mode === 'dark'?'white':'#042743'}}>
<h2>Your Text Summary</h2>
<p>{text.split(" ").length} words and {text.length} characters</p>
<p>{0.008 *text.split(" ").length} Minutes to read</p>
<h2>Preview</h2>
<p>{text.length>0?text:"Enter something in the textbox to preview it here"}</p>
</div>
    </>
  )
}
