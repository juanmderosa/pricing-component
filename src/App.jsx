import { useState } from "react"
import { PriceContainer } from "./components/PriceContainer";
import { ToogleBtn } from "./components/ToogleBtn";

const initialPlans = [
 { name: "Basic",
  monthlyPrice: 19.99,
  anualPrice: 199.99,
  storage: "500 GB Storage",
  users: "2 Users Allowed",
  transfer: "Send up to 3 GB"
},
  
  {name: "Professional",
  monthlyPrice: 24.99,
  anualPrice: 249.99,
  storage: "1 TB Storage",
  users: "5 Users Allowed",
  transfer: "Send up to 10 GB"
},
  
  {name: "Master",
  monthlyPrice: 39.99,
  anualPrice: 399.99,
  storage: "2 TB Storage",
  users: "10 Users Allowed",
  transfer: "Send up to 20 GB"
}
]

function App() {

    const [plans, setPlans] = useState(initialPlans)
    const [period, setPeriod] = useState(true);

    const handleClick = () =>{
      setPeriod(!period)
    }

    return (
    <>
    <main className="main-container">
      <h1 className="main-title">Our Pricing</h1>
      <ToogleBtn setPeriod={setPeriod} period={period}/>
      <PriceContainer plans={plans} period={period}/>
    </main>

    </>
  )
}

export default App
