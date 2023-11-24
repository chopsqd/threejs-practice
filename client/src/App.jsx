import Home from "./pages/Home.jsx";
import Canvas from "./canvas/index.jsx";
import Customizer from "./pages/Customizer.jsx";

const App = () => {
  return (
    <main className={"app transition-all ease-in"}>
      <Home />
      <Canvas />
      <Customizer />
    </main>
  )
}

export default App
