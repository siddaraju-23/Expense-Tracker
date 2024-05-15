import React from 'react'
import Header from './Components/Header/Header'
import Wallet from './Components/Wallet/Wallet'
import PieChart from './Components/Charts/PieChart'
import Transaction from './Components/Transactions/Transaction'
import BarChart from './Components/Charts/BarChart'


const Home = () => {
  return (
    <React.Fragment>
      <Header/>
      <Wallet/>
      <PieChart/>
      <Transaction/>
      <BarChart/>
    </React.Fragment>
  )
}

export default Home
