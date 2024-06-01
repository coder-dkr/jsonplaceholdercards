import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/Card.jsx'


function App() {
  const [ApiData, setApiData] = useState([{}])

useEffect( () => {
  async function fetchData() {
    await fetch('https://jsonplaceholder.typicode.com/posts').then(
      response => response.json()
    ).then(
      data => {
        setApiData(data)
      }
    )
  }
  fetchData()
  }, [])


  return (
    <>
    <h1 className='text-center font-bold text-6xl my-3 mb-10'>🔥 HEAVENLY CARDs 🔥</h1>
    <div className="grid grid-cols-3 w-fit mx-auto gap-11">
     {(ApiData.map((card,index) => (
        <Card key={index} title={card.title ? `📍${card.title}` : ' Loading...'} desc={card.body}/>
      )))
      }
      </div>
    </>
  )
}

export default App
