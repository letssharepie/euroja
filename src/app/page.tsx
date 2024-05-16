import Image from "next/image";

export default function Home() {
  function inputChanged(input: any) {
    

  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mb-6">
        <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Large input</label>
        <input onChange={(e) => inputChanged(e.target.value)} type="text" id="large-input" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
      </input>
      </div>  
    </main>
  );
}