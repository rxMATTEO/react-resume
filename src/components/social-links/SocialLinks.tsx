import './social-links.sass';
import { AiFillGithub } from 'react-icons/ai';
import { FaTelegram } from 'react-icons/fa';
import { CgMail } from 'react-icons/cg';
import { IconContext } from 'react-icons';
import {
  ReactElement, useMemo, useRef,
} from 'react';
import HhLogo from '../inputs/HhLogo.tsx';

function SocialLinks() {
  const sizeRef = useRef({ size: '1.5rem' });
  const size = useMemo(() => sizeRef, [sizeRef]);

  const icons: Readonly<ReactElement<{ title: string }>[]> = [
    <div title="HH">
      <a href="https://hh.ru/resume/89e9252cff0ba16ad20039ed1f397a364b4b62" target="_blank" rel="noreferrer">
        <HhLogo color="bg-purple" textColor="text-black" />
      </a>
    </div>,
    <div title="Github">
      <a href="https://github.com/rxmatteo" target="_blank" rel="noreferrer">
        <AiFillGithub />
      </a>
    </div>,
    <div title="Telegram">
      <a href="https://t.me/rxmatteo" target="_blank" rel="noreferrer">
        <FaTelegram />
      </a>
    </div>,
    <div title="Gmail">
      <a href="mailto:artemvolodin900000@gmail.com">
        <CgMail />
      </a>
    </div>,
  ];
  return (
    <div className="soc-links flex xl:flex-row items-center lg:flex-col">
      {
        icons.map((icon) => (
          <div key={icon.props.title} className="flex-1 cursor-pointer" title={icon.props.title}>
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
