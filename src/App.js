import React, { Fragment, useState } from 'react'

import './App.css';

import bgImage from "./assets/bg.jpeg";

import Header from './components/Header'

function App(){

  const [projects, setProjects] = useState(['Desenvolvimento de App', 'Front-end web', 'Mobile'])

  function handleAddProject() {
    //projects.push(`Novo Projeto ${Date.now()}`)

    setProjects([...projects, `Novo Projeto ${Date.now()}`])

    //console.log(projects)
  }

  return (
    <Fragment>
      
         <Header title="Projects">

         <img width={180} src={bgImage} />

           <ul>
             {projects.map(p => <li key={p}>{p}</li>)}
           </ul>

           <button type="button" onClick={handleAddProject} >Adicionar Projetos</button>
         </Header> 
    </Fragment>
  )
}

export default App;