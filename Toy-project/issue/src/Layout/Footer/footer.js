import 'tailwindcss/tailwind.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className='w-full h-52 bg-black items-center flex'>
      <FontAwesomeIcon icon={faGithub} className='text-white text-6xl pl-10' />
    </div>
  );
};

export default Footer;
