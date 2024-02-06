import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { Suspense, lazy } from "react";
import Loading from "./components/Loading";
import { ConfigProvider } from "antd";
import { AuthProvider } from "./context/AuthContext";

const Login = lazy(() => import("./pages/Auth/Login"));
const Registration = lazy(() => import("./pages/Auth/Registration"));
const Dashboard = lazy(() => import("./pages/dashboard-paid"));
const Profile = lazy(() => import("./pages/profile/profile"));
const UserProfile = lazy(() => import("./pages/profile/UserProfile"));
const BusinessProfile = lazy(() => import("./pages/profile/BusinessProfile"));
const UpgradePlans = lazy(() => import("./pages/profile/UpgradePlans"));
const ActivePlans = lazy(() => import("./pages/profile/ActivePlans"));
const Chat = lazy(() => import("./pages/chat/chat"));
const Conversion = lazy(() => import("./pages/chat/Conversion"));
const Contact = lazy(() => import("./pages/contats/contact"));
const Automation = lazy(() => import("./pages/automation/automation"));
const Campaign = lazy(() => import("./pages/campaign/campaign"));
const Analytic = lazy(() => import("./pages/analytic/analytic"));
const Help = lazy(() => import("./pages/help/help"));
const Setting = lazy(() => import("./pages/setting/setting"));
const Wapi = lazy(() => import("./pages/setting/Wapi"));
const Templates = lazy(() => import("./pages/setting/Templates"));
const TemplatesGallery = lazy(() => import("./pages/setting/TamplatesGallery"));
const Media = lazy(() => import("./pages/setting/Media"));
const Label = lazy(() => import("./pages/setting/Label"));
const CustomField = lazy(() => import("./pages/setting/CustomField"));
const Status = lazy(() => import("./pages/setting/Status"));
const QuickReply = lazy(() => import("./pages/setting/QuickReply"));
const DevApi = lazy(() => import("./pages/setting/DevApi"));
const AppIntegration = lazy(() => import("./pages/setting/AppIntegration"));

// eslint-disable-next-line react/prop-types

const NotFound = () => {
  const location = useLocation();

  return (
    <div>
      <h2>404 - Not Found</h2>
      <p>
        No match for <code>{location.pathname}</code>
      </p>
    </div>
  );
};

// eslint-disable-next-line react/prop-types

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
      <AuthProvider>
        <Router>
          <Suspense fallback={<Loading />}>
            <Routes>
              {/* Force login and signup */}
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Registration />} />
              {/* Main pages */}
              <Route path="/" element={<Dashboard />} />
              <Route path="/admin/profile" element={<Profile />}>
                <Route index element={<Navigate to="user/1" />} />
                <Route path="user/:id" element={<UserProfile />} />
                <Route
                  path="business-profile/:id"
                  element={<BusinessProfile />}
                />
                <Route path="upgrade-plans" element={<UpgradePlans />} />
                <Route path="active-plans" element={<ActivePlans />} />
              </Route>
              <Route path="/admin/chat" element={<Chat />}>
                <Route path="Conversions" element={<Conversion />} />
              </Route>
              <Route path="/admin/contact" element={<Contact />} />
              <Route path="/admin/campaign" element={<Campaign />} />
              <Route path="/admin/automation" element={<Automation />} />
              <Route path="/admin/analytic" element={<Analytic />} />
              <Route path="/admin/help" element={<Help />} />
              <Route path="/admin/setting" element={<Setting />}>
                <Route path="wapi" element={<Wapi />} />
                <Route path="templates" element={<Templates />} />
                <Route
                  path="templates-gallery"
                  element={<TemplatesGallery />}
                />
                <Route path="media" element={<Media />} />
                <Route path="labels" element={<Label />} />
                <Route path="custom-fields" element={<CustomField />} />
                <Route path="status" element={<Status />} />
                <Route path="quick-reply" element={<QuickReply />} />
                <Route path="dev-api/:id" element={<DevApi />} />
                <Route path="app/:id" element={<AppIntegration />} />
              </Route>
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </Router>
      </AuthProvider>
    </ConfigProvider>
  );
}

export default App;
