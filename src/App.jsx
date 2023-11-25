import Home from "./pages/Home.jsx";
import Customizer from "./pages/Customizer.jsx";
import CanvasModel from "./canvas/index.jsx";

const App = () => {
  return (
    <main className={"app transition-all ease-in"}>
      <Home />
      <CanvasModel />
      <Customizer />
    </main>
  )
}

export default App
