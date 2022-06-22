import React, { useState } from 'react';

import './styles.css';

import { Card } from '../components/Card';

export function Home() {
  const[studentName, setStudentName] = useState('');

  return (
    <div className='container'>
      <h1>Lista de Presença</h1>
      <h2>Nome: {studentName}</h2>

      <input 
        type="text" 
        placeholder="Digite o nome..."
        onChange={e => setStudentName(e.target.value)}
      />
      
      <button type="button">Adicionar</button>

      <Card name="Walber" time="10:55:24" />
      <Card name="Enzo" time="10:58:44"/>
      <Card name="Marcella" time="10:59:13"/>
   
    </div>
  )
}

export default Home;
