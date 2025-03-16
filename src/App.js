import React, { useEffect } from 'react'; 
import {BrowserRouter as Router , Routes, Route, useLocation} from 'react-router-dom';
import Home from '../src/Pages/Home';
import {AboutUs} from '../src/Pages/AboutUs';
import Navbar from '../src/Components/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ScrollToTop from './Components/ScrollToTop';
import { ProgramApplication } from './Pages/ProgramApplication';
import { ContactUs } from './Pages/ContactUs';
import { Footer } from './Components/Footer';
import { OurPrograms } from './Pages/OurPrograms';
import { Gift } from './Pages/Gift';
import  PaymentPage  from './Pages/PaymentPage.jsx';
import { DesktopProvider } from './Context/IsDesktop.jsx';
import { PaymentProvider } from './Context/Payment.jsx';
import SubscriptionPage from './Pages/SubscriptionPage.jsx';
import ErrorPage from './Pages/ErrorPage.jsx';
import SuccessPayment from './Pages/SuccessPayment.jsx';
import Logo1 from './Images/PNG Blue Horizontal.webp';
import Logo2 from './Images/PNG Blue.webp';
import lines1 from './Images/Group 38.webp';
import lines2 from './Images/Group 39.webp';
import { Helmet } from 'react-helmet'; 
const App = ()=> {
  const location = useLocation();
  useEffect(()=>{
    AOS.init({once: true,});
  })
  return (
    <>
      {location.pathname !== '/sign-up' && location.pathname !== '/login' && <Navbar />}
      <Helmet>
        <link rel="preload" href={Logo1} as="image" />
        <link rel="preload" href={Logo2} as="image" />
        <link rel="preload" href={lines1} as="image" />
        <link rel="preload" href={lines2} as="image" />
      </Helmet>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about-us" exact element={<AboutUs />} />
        <Route path="/our-programs" exact element={<OurPrograms />} />
        <Route path="/program-application" exact element={<ProgramApplication />} />
        <Route path="/contact-us" exact element={<ContactUs />} />
        <Route path="/support-our-journey" exact element={<Gift />} />
        <Route path="/payment-page" exact element={<PaymentPage/>} />
        <Route path="/subscription-page" exact element={<SubscriptionPage />} />
        <Route path="/error" exact element={<ErrorPage />} />
        <Route path="/success-payment" exact element={<SuccessPayment />} />
      </Routes>
      {location.pathname !== '/sign-up' && location.pathname !== '/login'&& 
        location.pathname !== '/success-payment' && location.pathname !== '/error' && 
        location.pathname !== '/subscription-page' && location.pathname !== '/payment-page' && 
      <Footer />}
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
