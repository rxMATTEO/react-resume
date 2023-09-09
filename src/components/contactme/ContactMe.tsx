import { AiFillGithub } from 'react-icons/ai';
import { FaTelegram } from 'react-icons/fa';
import Button from '../inputs/Button.tsx';
import HhLogo from '../inputs/HhLogo.tsx';

function ContactMe() {
  return (
    <div id="contactme">
      <p className="text-5xl font-light uppercase tracking-[5px] mb-10">Контакты</p>
      <div className="flex justify-center gap-5 py-5 flex-wrap">
        <a target="_blank" href="https://github.com/rxmatteo" rel="noreferrer">
          <Button icon={<AiFillGithub />} text="Github" color="!bg-neutral-600 hover:!text-white" />
        </a>
        <a target="_blank" href="https://t.me/rxmatteo" rel="noreferrer">
          <Button icon={<FaTelegram />} text="Telegram" color="!bg-blue-400 hover:!text-white" />
        </a>
        <a target="_blank" href="https://hh.ru/here-link-to-resume" rel="noreferrer">
          <Button icon={<HhLogo color="bg-white text-red-500" />} text="HeadHunter" color="!bg-red-500 hover:!text-white" />
        </a>
      </div>
    </div>
  );
}

export default ContactMe;
