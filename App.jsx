//componente é uma fuhnção que tem que ser obrigatoriamente exportada

//Nome:App

//Arquitetura de componente

function App(){
//Universo da lógica- Aqui declaramos:
//-variaveis
//-funções
//-declarações (if,else,for,forEach)
//cálculos
const title="Cenas!!";

//universo da renderização (Jsx) --> tem mesmo que retornar um jsx, se n retornar n é um componente é um wook
return(
    <div>
        {/*title é uma variável com a string "Cenas!!" */}
        <h1>Hello Edit - {title}</h1>
    </div>
);
};

export default App;