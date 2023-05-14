import {AiFillCalculator, AiFillGithub} from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className='footer p-4 bg-neutral text-neutral-content flex items-center justify-between'>
      <div className='items-center grid-flow-col'>
        <AiFillCalculator size={32} />
        <p>©torippy 2023</p>
      </div>
      <div className='grid-flow-col gap-4'>
        <AiFillGithub size={24} />
      </div>
    </footer>
  );
};

export default Footer;
