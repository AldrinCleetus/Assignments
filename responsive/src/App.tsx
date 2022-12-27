import { useScroll } from 'framer-motion'
import { useRef, useState } from 'react'
import LeftSide from './components/LeftSide'
import One from './components/One'
import Section from './components/Section'
import SVGComponent from './components/SVGComponent'
import SVGDisc from './components/SVGDisc'
import Two from './components/Two'

function App() {
  const [count, setCount] = useState(0)


  


  return (
    <div className="App ">
      <div className='scroll-container'>
        <SVGDisc></SVGDisc>
        <LeftSide></LeftSide>
        <One color='gray2'></One>
        <Two color='gray2'></Two>
        <Section color='gray2'></Section>
        <Section color='gray2'></Section>
        <Section color='gray2'></Section>
        <Section color='gray2'></Section>
        <Section color='gray2'></Section>
      </div>
    </div>
  )
}

export default App
