import "./App.css";
import Navbar from "./components/Navbar";
import routes from "./routes";
import { BrowserRouter, Route, Routes } from "react-router";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar routes={routes} />
        <Routes>
          {routes.map(({ path, component }) => (
            <Route key={path} path={path} element={component} />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
