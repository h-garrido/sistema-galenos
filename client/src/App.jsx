import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import { PacientesPage } from "./pages/PacientesPage";
import { PacientesFormPage } from "./pages/PacientesFormPage";
import { Navigation } from './components/Navigation';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto">
        <Navigation />
        <Routes>
          <Route path="/" element={<Navigate to="/pacientes" />} />
          <Route path="/pacientes" element={<PacientesPage />} />
          <Route path="/pacientes/:id_paciente" element={<PacientesFormPage />} />
          <Route path="/pacientes/crear" element={<PacientesFormPage />} />
        </Routes>
        <Toaster />
      </div>
    </BrowserRouter>
  )
}

export default App;