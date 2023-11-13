import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import { PacientesPage } from "./pages/PacientesPage";
import { PacientesFormPage } from "./pages/PacientesFormPage";
import { MedicosPage } from "./pages/MedicosPage";
import { MedicosFormPage } from "./pages/MedicosFormPage";
import { CitasPage } from "./pages/CitasPage";
import { CitasFormPage } from "./pages/CitasFormPage";
import { Navigation } from './components/Navigation';
import { Dashboard } from './pages/Dashboard';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto">
        <Navigation />
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/pacientes" element={<PacientesPage />} />
          <Route path="/pacientes/:id_paciente" element={<PacientesFormPage />} />
          <Route path="/pacientes/crear" element={<PacientesFormPage />} />
          <Route path="/medicos" element={<MedicosPage />} />
          <Route path="/medicos/:id_medico" element={<MedicosFormPage />} />
          <Route path="/medicos/crear" element={<MedicosFormPage />} />
          <Route path="/citas" element={<CitasPage />} />
          <Route path="/citas/:id_cita" element={<CitasFormPage />} />
          <Route path="/citas/crear" element={<CitasFormPage />} />
        </Routes>
        <Toaster />
      </div>
    </BrowserRouter>
  )
}

export default App;