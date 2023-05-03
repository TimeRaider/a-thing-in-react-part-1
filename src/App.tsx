import { useState } from 'react'


function App() {
  const [search, setSearch] = useState('')

  return (
    <>
      <div>
        <input type="text" placeholder="Search" onChange={e => setSearch(e.target.value)}/>
      </div>
      {search}
    </>
  )
}

export default App
