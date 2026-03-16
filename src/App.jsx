
import { Suspense } from 'react'
import './App.css'
import Countries from './Components/Countries/Countries'

function App() {
  
const countriesPromise = fetch('https://openapi.programming-hero.com/api/all')
    .then(res => res.json())

  return (
    <>
        <div>
          <h1>Get started</h1> 
        </div>
        <Suspense fallback={<p>Data Waiting for loading....</p> }>
          <Countries countriesPromise = {countriesPromise}></Countries>
        </Suspense>
        
    </>
  )
}

export default App
