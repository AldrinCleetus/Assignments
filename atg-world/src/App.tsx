import { useState } from 'react'
import Article from './components/Article'
import Hero from './components/Hero'
import MobileTabs from './components/mobileTabs'
import Navbar from './components/Navbar'
import Tabs from './components/Tabs'

function App() {

  const Articles: Article[] = [
    {
      type: "✍Article",
      title: "What if famous brands had regular fonts? Meet RegulaBrands",
      description: "I’ve worked in UX for the better part of a decade. For the most part",
      user: {
        userName: "Sarthak Karmra",
        profile:"person 1.png"
      },
      views:  1.4
    }
  ]

  return (
    <>
    <Navbar></Navbar>
    <Hero></Hero>
    <Tabs></Tabs>
    <MobileTabs></MobileTabs>
    <Article {...Articles[0]}></Article>
    </>
  )
}

export default App
