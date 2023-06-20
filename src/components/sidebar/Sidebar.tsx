import './sidebar.sass';


function Sidebar() {
  return (
    <>
      <header className="sidebar-left">
        <div className="top">
          <div className="image"><img src="./static/about-me.jpg" alt="avatar"/></div>
          <span className="image-label">@volodin-artem</span>
        </div>
      </header>
    </>
  );
}

export default Sidebar;
