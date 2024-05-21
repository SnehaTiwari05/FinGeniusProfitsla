import logo from "./logo.svg";
import "./App.css";
import Signup from "./pages/Common/Signup";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AuthWrapper from "./componentes/Layout/AuthWrapper";
import Login from "./pages/Common/Login";
import Forgetpassword from "./pages/Common/Forgetpassword";
import Forgetusername from "./pages/Common/Forgetusername";
import SpotWrapper from "./componentes/Layout/SpotWrapper";
import SelectBot from "./pages/Common/select_bot";
import SpotBotDetails from "./pages/Spot/bot_details";
import FutureBotDetails from "./pages/Future/bot_details";
import CommondashboardB from "./pages/Spot/CommondashboardB";
import Api_settings from "./pages/Common/API/Api_settings";
import SelectedExchange from "./componentes/Common/API/SelectedExchange";
import Futureconnectionform from "./componentes/Future/APisettingspage/Futureconnectionform";
import Paperfutureconnectiondetails from "./componentes/Future/APisettingspage/Paperfutureconnectiondetails";
import Spotconnectiondetails from "./componentes/Spot/APisettingspage/Spotconnectiondetails";
import PaperSpotconnectiondetails from "./componentes/Spot/APisettingspage/PaperSpotconnectiondetails";
import ConnectionLoder from "./componentes/Common/API/ConnectionLoder";
import Connectionfailed from "./componentes/Common/API/Connectionfailed";
import Preffred_exchanges from "./componentes/Spot/APisettingspage/Preffred_exchanges";
import APi_details from "./componentes/Common/API/APi_details";
import Verifyfirststep from "./componentes/Common/API/Verifyfirststep";
import Verifysteptwo from "./componentes/Common/API/Verifysteptwo";
import Test from "./pages/Common/API/Test";
import Botmainpage from "./pages/Common/BOT/Botmainpage";
import Profile from "./pages/Common/Profile";
import ProtectedRoute from "./componentes/ProtectedRoute";
import PricingTable from "./pages/pricingTable";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthWrapper />}>
            <Route index element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgetpassword" element={<Forgetpassword />} />
            <Route path="/forgetusername" element={<Forgetusername />} />
            <Route path="/test" element={<Test />} />
          </Route>
          <Route
            path="/dashboard"
            Component={SpotWrapper}
            // element={<ProtectedRoute Component={SpotWrapper} />}
          >
            <Route
              path="/dashboard/pricing_table"
              Component={PricingTable}
              // element={<ProtectedRoute Component={PricingTable} />}
            />
            <Route
              index
              Component={CommondashboardB}
              // element={<ProtectedRoute Component={CommondashboardB} />}
            />
            <Route
              path="/dashboard/select_bot"
              element={<ProtectedRoute Component={SelectBot} />}
            />
            <Route
              path="/dashboard/profile"
              element={<ProtectedRoute Component={Profile} />}
            />
            <Route
              path="/dashboard/test"
              element={<ProtectedRoute Component={Test} />}
            />
            <Route
              path="/dashboard/api_settings"
              element={<ProtectedRoute Component={Api_settings} />}
            >
              <Route
                index
                element={<ProtectedRoute Component={Preffred_exchanges} />}
              />
              <Route
                path="/dashboard/api_settings/SelectedExchange"
                element={<ProtectedRoute Component={SelectedExchange} />}
              />
              <Route
                path="/dashboard/api_settings/Spotconnectiondetails"
                element={<ProtectedRoute Component={Spotconnectiondetails} />}
              />
              <Route
                path="/dashboard/api_settings/Futureconnectionform"
                element={<ProtectedRoute Component={Futureconnectionform} />}
              />
              <Route
                path="/dashboard/api_settings/Paperfutureconnectiondetails"
                element={
                  <ProtectedRoute Component={Paperfutureconnectiondetails} />
                }
              />
              <Route
                path="/dashboard/api_settings/PaperSpotconnectiondetails"
                element={
                  <ProtectedRoute Component={PaperSpotconnectiondetails} />
                }
              />
              <Route
                path="/dashboard/api_settings/ConnectionLoder"
                element={<ProtectedRoute Component={ConnectionLoder} />}
              />
            </Route>
            <Route
              path="/dashboard/api_settings/Connectionfailed"
              element={<ProtectedRoute Component={Connectionfailed} />}
            />
            <Route
              path="/dashboard/spot/botdetails"
              element={<ProtectedRoute Component={SpotBotDetails} />}
            />{" "}
            <Route
              path="/dashboard/bot/botmain"
              element={<ProtectedRoute Component={Botmainpage} />}
            />
            <Route
              path="/dashboard/botdetailsfuture"
              element={<ProtectedRoute Component={FutureBotDetails} />}
            />
            <Route
              path="/dashboard/APi_details"
              element={<ProtectedRoute Component={APi_details} />}
            >
              <Route
                index
                element={<ProtectedRoute Component={Verifyfirststep} />}
              />
              <Route
                path="/dashboard/APi_details/verifysteptwo"
                element={<ProtectedRoute Component={Verifysteptwo} />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
