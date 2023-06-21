import NavLinks from "./NavLinks";
import SocialLinks from "../social-links/SocialLinks";

function Sidebar() {
  return (
    <>
      <nav className="sidebar-left">
        <div className="top">
          <div className="image"><img src="./static/about-me.jpg" alt="avatar"/></div>
          <span className="image-label">@volodin-artem</span>
        </div>
        <NavLinks />
        <SocialLinks />
      </nav>
    </>
  );
}

export default Sidebar;
