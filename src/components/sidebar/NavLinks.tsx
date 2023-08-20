import './nav-links.sass';

function NavLinks() {
  type Links = {
    text: string,
    href: string,
    selected: boolean,
  }
  const links: Links[] = [
    {
      text: 'Домашняя',
      href: '#',
      selected: false,
    },
    {
      text: 'Обо мне ',
      href: '#about',
      selected: false,
    },
    {
      text: 'Навыки',
      href: '#skills',
      selected: false,
    },
    {
      text: 'Опыт',
      href: '#exp',
      selected: false,
    },
    {
      text: 'Стэк',
      href: '#stack',
      selected: false,
    },
    {
      text: 'Портфолио',
      href: '#portfolio',
      selected: false,
    },
    {
      text: 'Контакты',
      href: '#',
      selected: false,
    },
  ];
  return (
    <div className="nav-menu">
      {
        links.map((link) => <a href={link.href} className="nav-link">{link.text}</a>)
      }
    </div>
  );
}

export default NavLinks;
