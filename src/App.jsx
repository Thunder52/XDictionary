import { useState } from 'react'

const dictionary=[

    { word: "React", meaning: "A JavaScript library for building user interfaces." },

    { word: "Component", meaning: "A reusable building block in React." },

    { word: "State", meaning: "An object that stores data for a component." }

]


function App() {
  const [searchWord,setSearchWord]=useState('');
  const [meaning,setMeaning]=useState(null);

  const handleSubmit=(e)=>{
    e.preventDefault();
    const found=dictionary.find((item)=>item.word===searchWord);
    if(found){
      setMeaning(found.meaning);
    }else{
      setMeaning('Word not found in the dictionary.')
    }

  }

  return (
    <>
    <h1>Dictionary App</h1>
    <form onSubmit={handleSubmit}>
    <input type="text" placeholder='Search for a word...' value={searchWord} onChange={(e)=>setSearchWord(e.target.value)} />
    <button type='submit'>Search</button>
    </form>
    <h3>Definition:</h3>
    {meaning!=null && (
      <p>{meaning}</p>
    )}
    </>
  )
}

export default App
