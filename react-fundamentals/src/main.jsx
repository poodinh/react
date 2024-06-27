import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const cubo= React.createElement('div',
  {className:'cubo'}
)

const title= React.createElement('h2',
  {className:'titulo'},
  'Hello Edit!'
)
let cubos=[];

for (let i=0; i<5;i++){
  cubos.push(cubo);
} //para n escrever 6 vezes cubo

const div= React.createElement('div', 
  {className:'main-container'},
  title,cubos
)

ReactDOM.createRoot(document.getElementById('root')).render(div)

