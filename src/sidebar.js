import { FaGithub, FaHtml5, FaLinkedin, FaMailchimp } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div
      className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col 
                 bg-primary text-secondary shadow-lg"
    >
      <SidebarIcon icon={<FaGithub size="28" />} />
      <SidebarIcon icon={<FaLinkedin size="28" />} />
      <SidebarIcon icon={<FaHtml5 size="28" />} />
      <SidebarIcon icon={<FaMailchimp size="28" />} />
    </div>
  );
};

const SidebarIcon = ({ icon, text = "tooltip 🔥" }) => (
  <div className="sidebar-icon group">
    {icon}

    <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
);

export default Sidebar;
