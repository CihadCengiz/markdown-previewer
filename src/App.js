import React, {useState} from 'react';
import { Container } from 'react-bootstrap';
import MDEditor from '@uiw/react-md-editor';

function App() {
  const defValue = "# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n\nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.org), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbered lists too.\n1. Use just 1s if you want!\n1. And last but not least, let's not forget embedded images:\n\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)\n"
  const [text, setText] = useState(defValue)
  


  return (
    <Container
      style={{
        backgroundColor: '#87b5b5',
        color: '#333',
        height: 'auto',
        minHeight: "100vh"
      }}
      fluid
    >
      <div className='d-flex justify-content-center pt-3' id='text-area-wrapper'>
        <div className='border-top'>
          <div
            style={{ width: '60vh', background: "#4aa3a3", fontWeight:"800", paddingLeft: "10px", height:"3vh" }}
            className='d-flex justify-content-start align-items-center border-start border-end'
            id='toolbar'
          >
            <p className="mb-0 align-items-center d-flex" style={{fontSize: "18px"}}>
            <i className="fa fa-free-code-camp fa-2x" />&nbsp;Editor
            </p>
          </div>
            <textarea
              id='text-area'
              className='border-start border-end border-bottom'
              title='Rembrandt van Rijn'
              name='w3review'
              style={{ minHeight: "25vh", width: '60vh', outline: 'none', background:"#c0d8d8" }}
              defaultValue={defValue}
              onChange={(e) => setText(e.target.value)}
            />
        </div>
      </div>

      <div id='preview-area-wrapper' className='d-flex justify-content-center'>
         <MDEditor className="border" preview='preview' height="70vh" visibleDragbar={false} enableScroll={true} value={text} style={{ width:"100vh" }} />
      </div>
    </Container>
  );
}

export default App;
