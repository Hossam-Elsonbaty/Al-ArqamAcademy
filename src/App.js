import React, { useEffect } from 'react'; 
import {BrowserRouter as Router , Routes, Route, useLocation, Link } from 'react-router-dom';
import Home from '../src/Pages/Home'
import {AboutUs} from '../src/Pages/AboutUs'
import {Login} from '../src/Pages/Login'
import Navbar from '../src/Components/Navbar'
import AOS from 'aos';
import 'aos/dist/aos.css';
import ScrollToTop from './Components/ScrollToTop';
import { SignUp } from './Pages/SignUp';
import { ProgramApplication } from './Pages/ProgramApplication';
import { ContactUs } from './Pages/ContactUs';
import { Footer } from './Components/Footer';
import { OurPrograms } from './Pages/OurPrograms';
import { Gift } from './Pages/Gift';
import { Payment } from './Pages/Payment';
import  PaymentPage  from './Pages/PaymentPage.jsx';
import { DesktopProvider } from './Context/IsDesktop.jsx';
import { PaymentProvider } from './Context/Payment.jsx';
import CompletePage from './Components/CompletePage.jsx';
import SubscriptionPage from './Pages/SubscriptionPage.jsx';
import ErrorPage from './Pages/ErrorPage.jsx';
import SuccessPayment from './Pages/SuccessPayment.jsx';
const App = ()=> {
  const location = useLocation();
  useEffect(()=>{
    AOS.init({once: true,});
  })
  return (
    <>
      {location.pathname !== '/sign-up' && location.pathname !== '/login' && <Navbar />}
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about-us" exact element={<AboutUs />} />
        <Route path="/our-programs" exact element={<OurPrograms />} />
        <Route path="/program-application" exact element={<ProgramApplication />} />
        <Route path="/contact-us" exact element={<ContactUs />} />
        <Route path="/support-our-journey" exact element={<Gift />} />
        <Route path="/payment-page" exact element={<PaymentPage/>} />
        <Route path="/proceed-to-payment" exact element={<Payment />} />
        <Route path="/complete" exact element={<CompletePage />} />
        <Route path="/subscription-page" exact element={<SubscriptionPage />} />
        <Route path="/error" exact element={<ErrorPage />} />
        <Route path="/success-payment" exact element={<SuccessPayment />} />
      </Routes>
      {location.pathname !== '/sign-up' && location.pathname !== '/login' && location.pathname !== '/success-payment' && location.pathname !== '/error' && location.pathname !== '/subscription-page' && location.pathname !== '/payment-page' && <Footer />}
    </>
  )
}
const MainApp = () => (
  <Router>
    <ScrollToTop/>
    <DesktopProvider>
      <PaymentProvider>
        <App />
      </PaymentProvider>
    </DesktopProvider>
  </Router>
);
export default MainApp;
// "@emotion/react": "^11.13.3",
// "@emotion/styled": "^11.13.0",
// "@fortawesome/fontawesome-svg-core": "^6.6.0",
// "@fortawesome/free-brands-svg-icons": "^6.6.0",
// "@fortawesome/free-regular-svg-icons": "^6.6.0",
// "@fortawesome/free-solid-svg-icons": "^6.6.0",
// "@fortawesome/react-fontawesome": "^0.2.2",
// "@headlessui/react": "^2.1.8",
// "@heroicons/react": "^2.1.5",
// "@mui/icons-material": "^6.1.1",
// "@mui/material": "^6.1.1",

