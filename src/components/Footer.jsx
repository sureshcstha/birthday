import { Link } from "react-router-dom";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
      <footer className="bg-blue-600 text-white text-center p-4 mt-auto">
        <p>Copyright © {currentYear}, Suresh Shrestha |&nbsp; 
          <Link to="/privacy-policy" className="underline hover:text-gray-300">Privacy Policy</Link>
        </p>
      </footer>
    );
};
  
export default Footer;
