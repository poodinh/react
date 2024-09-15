import "./App.css";
import NavBar from "./components/navBar/navBar";
import RouteBetweenPages from "./route";

function App() {
  return (
    <>
      <NavBar
        logo="Poods"
        navList={["Home", "About", "Works", "Contact"]}
        buttonText="Let's Talk"
      />
      <RouteBetweenPages />
      <NavBar
        logo="Poods"
        navList={["Home", "About", "Works", "Contact"]}
      />
    </>
  );
}

export default App;
