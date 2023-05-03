import logo from './logo.svg';
import './App.css';
import Forms from './screens/Forms';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,Routes,
} from "react-router-dom";

import PatientAssign from './screens/PatientAssign';
import PatientForm from './screens/PatientForm';
import AddEditPatient from './components/AddEditPatient';
import TableForm from './components/TableForm';
import Chat from './screens/Chat';
import Sidebar from './components/Sidebar';
import Tasks from './screens/Tasks';
import Analytics from './screens/Analytics';
import CreateTask from './screens/CreateTask';
import Notifications from './screens/Notifications';
import PatientProfile from './screens/PatientProfile';
import Journeys from './screens/Journeys';
import Dashboarding from './screens/Dashboarding';
import Patients from './screens/Patients';
import EditPatent from './components/EditPatent';
function App() {
  return (
    <Routes>
        <Route path="/role" element={<Sidebar />} />
        
        <Route path="/" element={<Dashboarding />} />
        <Route path="/patients" element={<Patients />} />
        <Route path="/PatientProfile" element={<PatientProfile />} />
        <Route path="/editpatient" element={<EditPatent />} />

        <Route path="/analytics" element={<Analytics />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/notifications" element={<Notifications  />} />
        <Route path="/Journeys" element={<Journeys />} />
        <Route path="/forms" element={<Forms />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/CreateTask" element={<CreateTask />} />
        <Route path="/PatientAssign" element={<PatientAssign />} />
        <Route path="/AddEditPatient" element={<AddEditPatient />} />
        <Route path="/PatientForm" element={<PatientForm/>} />
        <Route path="/TableForm" element={<TableForm/>} />
     
      </Routes>
    
    // <div className="App">
    //    {/* <PatientForm/> */}
    //      {/* <Chat/> */}
    //    {/* <TableForm/> */}
    //     {/* <AddEditPatient/> */}
    //  {/* <PatientAssign/>
    // <CreateTask/> */}
    
    //  {/* <PatientProfile/> */}
    // {/* <CreateTask/> */}
    //  <Sidebar/>
     
    //   {/* <Notifications/> */}
     
    //   {/* <Analytics/> */}
    // </div>
  );
}

export default App;
