import React, { useState } from 'react';

function Index() {
  const [text, setText] = useState('');

  const summarizeText = () => {
    fetch(`http://localhost:8080/api/summarize?text=${text}`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        setText(data.summary_text);
      });
  };

  return (
    <div className='flex flex-col justify-center items-center h-screen w-screen bg-blue-50'>
      <h1 className='text-3xl font-bold mb-4 text-gray-500 text-4xl'>Text Summarizer</h1>
      <textarea
        className= {`border border-gray-400 p-2 w-3/4 rounded-lg 
                    mb-4 border-none text-none focus:border-none 
                    focus:outline-none focus:ring-0 bg-blue-50 h-1/2 w-1/2 text-gray-500 text-2xl`}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text here..."
      />
      <button
        className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-10 rounded' 
        onClick={summarizeText}>Summarize</button>
      
    </div>
  );
}

export default Index;