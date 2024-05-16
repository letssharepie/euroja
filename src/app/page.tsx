'use client'

import React from "react";

export default function Home() {
  const [input, setInput] = React.useState<string[]>([]);
  const [input2, setInput2] = React.useState<string[]>([]);
  function inputChanged(event: React.ChangeEvent<HTMLInputElement>, index: number) {
    const inputValue = event.target.value;
    setInput((prevInput) => {
      const updatedInput = [...prevInput];
      updatedInput[index] = inputValue;
      return updatedInput;
    });
  }
  function inputChanged2(event: React.ChangeEvent<HTMLInputElement>, index: number) {
    const inputValue = event.target.value;
    setInput2((prevInput) => {
      const updatedInput = [...prevInput];
      updatedInput[index] = inputValue;
      return updatedInput;
    });
  }
    
  
  function sendToBackend() {
    console.log('send to backend', input);
    console.log('send to backend', input2);

  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex mb-6">
        <input type="text" onChange={(event) => inputChanged(event, 0)} className="border border-gray-50 rounded-md px-2 py-2 mr-2 w-8" maxLength={2} />
        <input type="text" onChange={(event) => inputChanged(event, 1)} className="border border-gray-50 rounded-md px-2 py-2 mr-2 w-8" maxLength={2} />
        <input type="text" onChange={(event) => inputChanged(event, 2)} className="border border-gray-50 rounded-md px-2 py-2 mr-2 w-8" maxLength={2} />
        <input type="text" onChange={(event) => inputChanged(event, 3)} className="border border-gray-50 rounded-md px-2 py-2 mr-2 w-8" maxLength={2} />
        <input type="text" onChange={(event) => inputChanged(event, 4)} className="border border-gray-50 rounded-md px-2 py-2 mr-2 w-8" maxLength={2} />
        <input type="text" onChange={(event) => inputChanged2(event, 0)} className="border border-gray-50 bg-orange-500 rounded-md px-2 py-2 mr-2 w-8" maxLength={2} />
        <input type="text" onChange={(event) => inputChanged2(event, 1)} className="border border-gray-50 bg-orange-500 rounded-md px-2 py-2 mr-2 w-8" maxLength={2} />
        <button onClick={sendToBackend} className="border border-gray-50 rounded-md px-2 py-2 mr-2 shadow-xl">Send</button>
      </div>
    </main>
  );
}