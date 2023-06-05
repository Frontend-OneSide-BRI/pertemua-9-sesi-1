import React from 'react'
import Card from '../../components/Card'

const Home = () => {
  const getData = [{name: 'lala'}]
  return (
    <div>
      <Card data={getData} />
    </div>
  )
}

export default Home