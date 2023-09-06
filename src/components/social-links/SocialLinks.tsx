import './social-links.sass';
import { AiFillGithub } from 'react-icons/ai';
import { FaTelegram } from 'react-icons/fa';
import { CgMail } from 'react-icons/cg';
import { IconContext } from 'react-icons';
import { ReactElement, useMemo, useRef } from 'react';
import HhLogo from '../inputs/HhLogo.tsx';

function SocialLinks() {
  const sizeRef = useRef({ size: '1.5rem' });
  const size = useMemo(() => sizeRef, [sizeRef]);

  const icons: Readonly<ReactElement[]> = [
    <HhLogo />, <AiFillGithub />, <FaTelegram />, <CgMail />,
  ];
  return (
    <div className="soc-links flex flex-row items-center">
      {
        icons.map((icon) => (
          <div className="flex-1">
            <IconContext.Provider value={size.current}>
              {icon}
            </IconContext.Provider>
          </div>
        ))
      }
    </div>
  );
}

export default SocialLinks;
