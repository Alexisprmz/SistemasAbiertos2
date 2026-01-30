
import { useState } from 'react'
import './App.css'
import Card from './Components/Card'
import { db } from './Components/db/db'
import Footer from './Components/Footer'
import Header from './Components/Header'

function App() {

  const [customer, setCustomer] = useState({})
  const [total, setTotal] = useState(0)
  const [products, setProducts] = useState([])
  const [modal, setModal] = useState(false)
  
  console.log(total)

  const [data, setData] = useState(db)

  console.log(data)

  const [cart, setCart] = useState([])

  //useEffect(()=>{
  //  setData(db)
  //},[])

  return (
    <div>
      <Header
        cart={cart}
        setCart={setCart}
      />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {data.map(guitar => (
          <Card
            key={guitar.id}
            guitar={guitar}
            cart={cart}
            setCart={setCart}
          />
        ))}

        </div>
      </main>
    <Footer/>
    </div>
  )
}

export default App