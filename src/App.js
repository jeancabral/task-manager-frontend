import React, { Fragment, useState, useEffect } from 'react'

import './App.css';

import api from './services/api'

import bgImage from "./assets/bg.jpeg";

import Header from './components/Header'

function App(){

  const [projects, setProjects] = useState([])

  useEffect(() => {
    api.get('projects').then(response => {
      console.log(response)
      setProjects(response.data)
    })
  }, [])

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
             {projects.map(p => <li key={p.id}>{p.title}</li>)}
           </ul>

           <button type="button" onClick={handleAddProject} >Adicionar Projetos</button>
         </Header> 
    </Fragment>
  )
}

export default App;