'use client'
export default function Home() {
  function inputChanged(input: any) {
    console.log(input.target.value)

    // .replace(/\s/g, ', ')
  }
  function sendToBackend() {
    console.log('send to backend')
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex mb-6">
        <input type="text" onChange={inputChanged} className="border border-gray-50 rounded-md px-2 py-2 mr-2 w-8" maxLength={2} />
        <input type="text" onChange={inputChanged} className="border border-gray-50 rounded-md px-2 py-2 mr-2 w-8" maxLength={2} />
        <input type="text" onChange={inputChanged} className="border border-gray-50 rounded-md px-2 py-2 mr-2 w-8" maxLength={2} />
        <input type="text" onChange={inputChanged} className="border border-gray-50 rounded-md px-2 py-2 mr-2 w-8" maxLength={2} />
        <input type="text" onChange={inputChanged} className="border border-gray-50 rounded-md px-2 py-2 mr-2 w-8" maxLength={2} />
        <input type="text" onChange={inputChanged} className="border border-gray-50 rounded-md px-2 py-2 mr-2 w-8 " maxLength={2} />
        <input type="text" onChange={inputChanged} className="border border-gray-50 rounded-md px-2 py-2 mr-2 w-8" maxLength={2} />
        <button onClick={sendToBackend} className="border border-gray-50 rounded-md px-2 py-2 mr-2 shadow-xl">Send</button>
      </div>
    </main>
  );
}