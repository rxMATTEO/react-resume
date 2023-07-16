import NavLinks from './NavLinks';
import SocialLinks from '../social-links/SocialLinks';

function Sidebar() {
  return (
    <div className="wrapper hidden sm:block sm:w-[10%]">
      <nav className="sidebar-left sm:w-[10%]">
        <div className="top">
          <div className="image"><img src="./static/about-me.jpg" alt="avatar" /></div>
          <span className="image-label">@volodin-artem</span>
        </div>
        <NavLinks />
        <SocialLinks />
      </nav>
    </div>
  );
}

export default Sidebar;
