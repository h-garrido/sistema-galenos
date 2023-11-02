import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import { PacientesPage } from "./pages/PacientesPage";
import { PacientesFormPage } from "./pages/PacientesFormPage";
import { MedicosPage } from "./pages/MedicosPage";
import { MedicosFormPage } from "./pages/MedicosFormPage";
import { Navigation } from './components/Navigation';
import { Dashboard } from './pages/Dashboard';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto">
        <Navigation />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/pacientes" element={<PacientesPage />} />
          <Route path="/pacientes/:id_paciente" element={<PacientesFormPage />} />
          <Route path="/pacientes/crear" element={<PacientesFormPage />} />
          <Route path="/medicos" element={<MedicosPage />} />
          <Route path="/medicos/:id_medico" element={<MedicosFormPage />} />
          <Route path="/medicos/crear" element={<MedicosFormPage />} />
        </Routes>
        <Toaster />
      </div>
    </BrowserRouter>
  )
}

export default App;