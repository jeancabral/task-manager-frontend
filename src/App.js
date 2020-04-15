import React, { Fragment } from 'react'


import Header from './components/Header'

function App(){
  return (
    <Fragment>
         <Header title="Home Page">
           <ul>
             <li>Homepage</li>
             <li>Projects</li>
           </ul>

         </Header>
         <Header title="Projects">
           <ul>
             <li>Homepage</li>
             <li>Projects</li>
             <li>Login</li>
           </ul>
         </Header> 
    </Fragment>
  )
}

export default App;