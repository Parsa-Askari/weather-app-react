import { useState } from 'react'
import { Header } from './components/header'





function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('') 
  return (
    <>
      <Header data={[data,setData]} location={[location, setLocation]} />
    </>
    
    
  )
}

export default App
