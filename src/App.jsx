import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import data from './data'
import './App.css'

function App() {


  const cards = data.map(item => {
    return(
     <Card
        key ={item.id}
        items = {item}
     />
    )}
 
  )

 

  return (
    <>
      <Navbar />  
      <Hero />  
      <div className="card-container">
        {cards}</div>
    </>
  )
}

export default App
