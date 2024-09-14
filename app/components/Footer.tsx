import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="w-full py-6 bg-gray-800">
      <div className="flex flex-col items-center justify-between max-w-6xl mx-auto space-y-4 text-center text-white lg:flex-row">
        {/* <div className="text-lg font-bold">Cleveland Business Internet</div> */}

        <div className="flex space-x-6">
          <a href="#" className="hover:text-blue-400">Cleveland Business Internet</a>
          <a href="#" className="hover:text-blue-400">|</a>

          <a href="#" className="hover:text-blue-400">Privacy Policy</a>
          <a href="#" className="hover:text-blue-400">|</a>

          <a href="#" className="hover:text-blue-400">Terms of Service</a>
        </div>

        <div className="flex space-x-6">
          <a href="https://www.facebook.com/Cleveland-Business-Internet-1508162436150557/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <FontAwesomeIcon icon={faFacebook} size="lg" />
          </a>
          <a href="https://plus.google.com/u/0/b/114780459448771465044/114780459448771465044/about" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <FontAwesomeIcon icon={faGooglePlusG} size="lg" />
          </a>
          <a href="https://www.linkedin.com/company/cleveland-business-internet" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;