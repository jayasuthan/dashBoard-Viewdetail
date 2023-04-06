import Dashboard from "./components/dashboard";
import Create from "./components/create";
import Edit from "./components/edit";
import View from "./components/view";
import { Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/view/:id" element={<View />} />
      </Routes>
    </div>
  );
}

export default App;
