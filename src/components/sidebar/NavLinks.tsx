import './nav-links.sass';
import { useEffect, useState } from 'react';

function NavLinks() {
  type Links = {
    text: string,
    href: string,
    selected: boolean,
  }
  const linksNames: Links[] = [
    {
      text: 'Домашняя',
      href: '#home',
      selected: false,
    },
    {
      text: 'Обо мне ',
      href: '#about',
      selected: false,
    },
    {
      text: 'Опыт',
      href: '#exp',
      selected: false,
    },
    { text: 'Стэк', href: '#stack', selected: false },
    { text: 'Навыки', href: '#skills', selected: false },
    {
      text: 'Портфолио',
      href: '#portfolio',
      selected: false,
    },
    {
      text: 'Контакты',
      href: '#contactme',
      selected: false,
    },
  ];
  const [links] = useState(linksNames);
  const [selected, setSelected] = useState(0);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setTimeout(() => {
        const scrolled = linksNames.findLast((link) => {
          const element = document.getElementById(link.href.slice(1));
          if (element) {
            const box = element.getBoundingClientRect();
            return box.top <= 10;
          }
        });
        if (scrolled) {
          scrolled.selected = true;
          setSelected(linksNames.indexOf(scrolled));
        }
      });
    });
  }, [selected]);
  return (
    <div className="nav-menu">
      {
        links.map((link, index) => <a href={link.href} className={`nav-link ${selected === index ? '!text-purple' : ''}`}>{link.text}</a>)
      }
    </div>
  );
}

export default NavLinks;
