import Navbar from "../components/nav_bar.jsx";
/*import ContactUs from "../components/contact.jsx";*/
import Background from "../components/background.jsx";
import { FaQ } from "react-icons/fa6";
import faq_home from "../components/faq_home.jsx";
const Home = () => {
    
return(
    <>
    <Background/>
   <div className="wrapper">
       <Navbar/>
       <faq_home/>
       </div>
       </>
);
};
export default Home;                                                                                            