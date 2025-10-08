import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sidebar, SidebarBody } from "@/components/ui/sidebar";
import { useSidebar } from "@/components/ui/sidebar";
import { 
  User2, 
  GraduationCap, 
  Briefcase, 
  FolderKanban,
  Mail
} from "lucide-react";

const AppSidebar = () => {
  const { open } = useSidebar();

  const links = [
    {
      label: "About",
      href: "/about",
      icon: <User2 className="h-5 w-5" />,
    },
    {
      label: "Journey",
      href: "/education",
      icon: <GraduationCap className="h-5 w-5" />,
    },
    {
      label: "Skills",
      href: "/skills",
      icon: <Briefcase className="h-5 w-5" />,
    },
    {
      label: "Projects",
      href: "/projects",
      icon: <FolderKanban className="h-5 w-5" />,
    },
    {
      label: "Contact",
      href: "/contact",
      icon: <Mail className="h-5 w-5" />,
    },
  ];

  return (
    <Sidebar>
      <SidebarBody className="flex flex-col gap-4 h-screen">
        {open && (
          <Link to="/" className="flex items-center justify-center p-2">
            <motion.img
              src="/lovable-uploads/1d769ae6-56df-451f-af6b-3cd746a40cbb.png"
              alt="Logo"
              className="h-8 w-auto"
              whileHover={{ scale: 1.1 }}
              loading="lazy"
              decoding="async"
            />
          </Link>
        )}
        <div className="flex flex-col gap-2 flex-1">
          {links.map((link, idx) => (
            <Link
              key={idx}
              to={link.href}
              className="flex items-center gap-2 p-2 hover:bg-accent hover:text-accent-foreground rounded-lg transition-colors text-foreground"
            >
              {link.icon}
              {open && (
                <span className="text-sm transition-opacity duration-200">
                  {link.label}
                </span>
              )}
            </Link>
          ))}
        </div>
      </SidebarBody>
    </Sidebar>
  );
};

export default AppSidebar;