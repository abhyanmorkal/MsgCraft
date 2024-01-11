import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loading from "./components/Loading";
import { ConfigProvider, Typography } from "antd";

const Dashboard = lazy(() => import("./pages/dashboard-paid"));
const DashboardUnP = lazy(() => import("./pages/dashboard-unpaid"));
const Chat = lazy(() => import("./pages/chat/chat"));
const Contact = lazy(() => import("./pages/contats/contact"));
const Automation = lazy(() => import("./pages/automation/automation"));
const Campaign = lazy(() => import("./pages/campaign/campaign"));
const Analytic = lazy(() => import("./pages/analytic/analytic"));
const Help = lazy(() => import("./pages/help/help"));
const Setting = lazy(() => import("./pages/setting/setting"));

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "Poppins",
          colorPrimary: "#ba2525",
        },
      }}
    >
      <Router>
        <Suspense fallback={<Loading />}>
          <Routes>
            {/* Main pages */}
            <Route path="/" element={<Dashboard />} />
            <Route path="/admin/dashboardUnp" element={<DashboardUnP />} />
            <Route path="/admin/chat" element={<Chat />} />
            <Route path="/admin/contact" element={<Contact />} />
            <Route path="/admin/campaign" element={<Campaign />} />
            <Route path="/admin/automation" element={<Automation />} />
            <Route path="/admin/analytic" element={<Analytic />} />
            <Route path="/admin/help" element={<Help />} />
            <Route path="/admin/setting" element={<Setting />} />
          </Routes>
        </Suspense>
      </Router>
    </ConfigProvider>
  );
}

export default App;
