import DM from './../images/DM.png'

const Footer = () => {
  return (
    <footer className="w-full h-72 px-10 flex justify-between items-center bg-gray-200 dark:bg-neutral-950 dark:text-white">
      <p>Héctor Matías Cazón</p>
      <img src={DM} alt="DM-logo"/>
    </footer>
  );
};

export default Footer;
