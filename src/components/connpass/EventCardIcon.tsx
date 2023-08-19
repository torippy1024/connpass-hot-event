import {ReactNode} from 'react';
import {
  FaAndroid,
  FaAngular,
  FaAws,
  FaCloud,
  FaDocker,
  FaGit,
  FaGoogle,
  FaLine,
  FaLinux,
  FaNodeJs,
  FaPython,
  FaReact,
  FaUnity,
  FaWordpress,
  FaRobot,
} from 'react-icons/fa';
import {FaGolang} from 'react-icons/fa6';
import {DiRuby} from 'react-icons/di';
import {SiUnrealengine, SiCsharp} from 'react-icons/si';

const size = 48;
const iconList: {key: string; icon: ReactNode}[] = [
  {
    key: 'Android',
    icon: <FaAndroid size={size} />,
  },
  {
    key: 'Angular',
    icon: <FaAngular size={size} />,
  },
  {
    key: 'AWS',
    icon: <FaAws size={size} />,
  },
  {
    key: 'Docker',
    icon: <FaDocker size={size} />,
  },
  {
    key: 'Git',
    icon: <FaGit size={size} />,
  },
  {
    key: 'Google',
    icon: <FaGoogle size={size} />,
  },
  {
    key: 'LINE',
    icon: <FaLine size={size} />,
  },
  {
    key: 'Linux',
    icon: <FaLinux size={size} />,
  },
  {
    key: 'Node',
    icon: <FaNodeJs size={size} />,
  },
  {
    key: 'Python',
    icon: <FaPython size={size} />,
  },
  {
    key: 'React',
    icon: <FaReact size={size} />,
  },
  {
    key: 'Unity',
    icon: <FaUnity size={size} />,
  },
  {
    key: 'WordPress',
    icon: <FaWordpress size={size} />,
  },
  {
    key: 'Go',
    icon: <FaGolang size={size} />,
  },
  {
    key: 'クラウド',
    icon: <FaCloud size={size} />,
  },
  {
    key: 'cloud',
    icon: <FaCloud size={size} />,
  },
  {
    key: 'ロボット',
    icon: <FaRobot size={size} />,
  },
  {
    key: 'robot',
    icon: <FaRobot size={size} />,
  },
  {
    key: 'AI',
    icon: <FaRobot size={size} />,
  },
  {
    key: '機械学習',
    icon: <FaRobot size={size} />,
  },
  {
    key: 'Ruby',
    icon: <DiRuby size={size} />,
  },
  {
    key: 'Unreal',
    icon: <SiUnrealengine size={size} />,
  },
  {
    key: 'C#',
    icon: <SiCsharp size={size} />,
  },
];

const getKeyword = (
  text: string,
  keywordList: {key: string; icon: ReactNode}[],
): {key: string; icon: ReactNode} | null => {
  const foundKeywords = keywordList
    .filter((keyword) => text.includes(keyword.key))
    .sort((a, b) => text.indexOf(a.key) - text.indexOf(b.key));

  return foundKeywords[0] || null;
};

const EventCardIcon = ({text}: {text: string}) => {
  const keyword = getKeyword(text, iconList);

  return (
    <div className='w-24 flex-none flex flex-col justify-center items-center text-teal-600'>
      <div>{keyword?.icon}</div>
      <div>{keyword?.key}</div>
    </div>
  );
};

export default EventCardIcon;
