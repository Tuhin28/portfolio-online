import { cn } from "@/lib/utils";
import React, { useState, createContext, useContext } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface SidebarContextProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SidebarContext = createContext<SidebarContextProps | undefined>(undefined);

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};

export const SidebarProvider = ({
  children,
  defaultOpen = false,
}: {
  children: React.ReactNode;
  defaultOpen?: boolean;
}) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <SidebarContext.Provider value={{ open, setOpen }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const Sidebar = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export const SidebarBody = ({
  className,
  children,
  ...props
}: HTMLMotionProps<"div">) => {
  const { open, setOpen } = useSidebar();

  return (
    <motion.div
      className={cn(
        "h-full px-4 py-4 flex flex-col bg-background border-r border-border",
        className
      )}
      animate={{
        width: open ? "300px" : "60px",
      }}
      transition={{ duration: 0.2 }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      {...props}
    >
      {children}
    </motion.div>
  );
};