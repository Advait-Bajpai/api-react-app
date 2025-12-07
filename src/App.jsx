import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Footer'
import SideBar from './components/SideBar'
import Main from './components/Main'

function App() {
  const [data,setData] = useState(null)
  const [loading,setLoading] = useState(false)
  
  const [showModal, setShowModal] = useState(false);

  function handleToggleModal(){
    setShowModal(!showModal)
  }

  useEffect(()=>{
    async function fetchAPIData(param) {
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY
      const url = 'https://api.nasa.gov/planetary/apod' + `?api_key=${NASA_KEY}`
      const today = (new Date()).toDateString()
      const localKey = `NASA-${today}`
      if(localStorage.getItem(localKey)){
        const apidata = JSON.parse(localStorage.getItem(localKey))
        setData(apidata)
        console.log("Fetched form chache today")
        return
      }
      localStorage.clear()
      try{
        const res = await fetch(url)
        const apidata = await res.json()
        localStorage.setItem(localKey,JSON.stringify(apidata))
        setData(apidata)
        console.log("Fetched form API today")
      } catch(err){
        console.log(err.message)
      }
    }
    fetchAPIData()
  },[])
  return (
    <>
    {data ? (<Main data = {data} />) : (
      <div className='loadingState'>
        <i className="fa-solid fa-gear"></i>
      </div>
    )}
    {showModal && (<SideBar data = {data} handleToggleModal={handleToggleModal} />)}
    {data && (<Footer data = {data} handleToggleModal={handleToggleModal} />)}
    </>
  )
}

export default App
