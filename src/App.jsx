import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loading from "./components/Loading";


const Dashboard = lazy(()=>import("./pages/dashboard-paid"));
const DashboardUnP = lazy(()=>import("./pages/dashboard-unpaid"));
const Chat= lazy(()=>import("./pages/chat"));
const Contact = lazy(()=>import("./pages/contact"));
const Campaign = lazy(()=>import("./pages/campaign"));
const Analytic = lazy(()=>import("./pages/analytic"));
const Help = lazy(()=>import("./pages/help"));
const Setting = lazy(()=>import("./pages/setting"));





function App() {

  return (
    <Router>
      <Suspense fallback={<Loading/>}>
      <Routes>
        {/* Main pages */}
        <Route path="/admin/dashboard" element={<Dashboard/>}/>
        <Route path="/admin/dashboardUnp" element={<DashboardUnP/>}/>
        <Route path="/admin/chat" element={<Chat/>}/>
        <Route path="/admin/contact" element={<Contact/>}/>
        <Route path="/admin/campaign" element={<Campaign/>}/>
        <Route path="/admin/analytic" element={<Analytic/>}/>
        <Route path="/admin/help" element={<Help/>}/>
        <Route path="/admin/setting" element={<Setting/>}/>
      </Routes>
      </Suspense>
    </Router>
  )
}

export default App
