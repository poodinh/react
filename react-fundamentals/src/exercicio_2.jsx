import React from 'react'
import ReactDOM from 'react-dom/client'
import './index-copy.css'

const fs= React.createElement('div',
  {className:'fs-top'}
)
//-----
const image=React.createElement('img',
  {src:'path para imagem',
    alt:'alt de imagem'
  }
)
const avatar=React.createElement('div',
  {className:'avatar-holder'},
  image
)
//----
const link=React.createElement('a',
  {href:'link para perfil',
    target:'_blank'
  },
  'Inserir nome'
)

const iUsers=React.createElement('i',
  {className:'fas fa-users'}
)
const span=React.createElement('span',
  {className:'followers'},
  '90'
)
const followers=React.createElement('h6',
  {title:'Seguidores'},
  iUsers,span
)

const name=React.createElement('div',
  {className:'name'},
  link,followers
)
//------
const compTitle=React.createElement('h6',
  {title:'Numero de componentes criados pelo user'},
  'Componentes'
)
const compP=React.createElement('p',null,
  '29'
)
const components=React.createElement('div',
  {className:'fs components'},
  compTitle, compP
)

const projectTitle=React.createElement('h6',
  {title:'Numero de projetos criados pelo user'},
  'Projetos'
)
const projectP=React.createElement('p',null,
  '10'
)
const projects=React.createElement('div',
  {className:'fs projects'},
  projectTitle, projectP
)

const postTitle=React.createElement('h6',
  {title:'Numero de posts criados pelo user'},
  'Posts'
)
const postP=React.createElement('p',null,
  '5'
)
const posts=React.createElement('div',
  {className:'fs posts'},
  postTitle, postP
)

const info=React.createElement('div',
  {className:'fs-info'},
  components,projects,posts
)
//-----
const skillsI=  React.createElement('i',
  {className:'fa fa-code',
    'aria-hidden':'true'
  })
const skillsTitle=React.createElement('h6',null,'Skills',skillsI)

const htmlI= React.createElement('i',
  {className:'fab fa-html5'}
)
const htmlTitle=React.createElement('h6',
  null,
  htmlI,'HTML5'
)
const htmlP=React.createElement('p',null,'95%')
const htmlBar=React.createElement('div',
  {className:'bar bar-html'},
  htmlP
)
const htmlSkill=React.createElement('div',
  {className:'skill html'},
  htmlTitle,htmlBar
)

const cssI=React.createElement('i',
  {className:'fab fa-css3-alt'}
)
const cssTitle=React.createElement('h6',null,
  cssI,'CSS3'
)
const cssP= React.createElement('p',null,'90%')
const cssBar=React.createElement('div',
  {className:'bar bar-css'},
  cssP
)
const cssSkill=React.createElement('div',
  {className:'skill css'},
  cssTitle,cssBar
)

const jsI=React.createElement('i',
  {className:'fab fa-js'}
)
const jsTitle=React.createElement('h6',null,
  jsI,'JavaScript'
)
const jsP= React.createElement('p',null,'75%')
const jsBar=React.createElement('div',
  {className:'bar bar-js'},
 jsP
)
const jsSkill=React.createElement('div',
  {className:'skill javascript'},
  jsTitle,jsBar
)

const skills=React.createElement('div',
  {className:'fs-skill'},
  skillsTitle,htmlSkill,cssSkill,jsSkill
)
//------
const pageComp=[fs,avatar,name,info,skills]

const div=React.createElement('div',
  {className:'card'},
  pageComp
)


ReactDOM.createRoot(document.getElementById('root')).render(div)

