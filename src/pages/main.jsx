import React from 'react'
import ReactDOM from 'react-dom/client'
import '../../public/css/index.css'
import { Header } from '../sections/Header'
import { Name } from '../sections/Name'
// import { Projects } from '../sections/Projects'

const root = ReactDOM.createRoot(document.getElementById('root'))


root.render(
    <>
        <Header />
        <main>
            <Name />
            {/* <Projects/> */}
        </main>
    </>

)
