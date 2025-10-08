import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Separator } from "@/components/ui/separator";

type NavItem = {
  label: string;
  href: string;
};

const NAV_ITEMS: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Journey", href: "/education" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

const MEDIUM_URL = "https://medium.com/@tuhin.gim";

const TopNav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef<number>(0);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Prefer main scroll container if present, else fallback to window
    const container = document.querySelector('.app-scroll-area') as HTMLElement | null;
    const target: any = container ?? window;
    const getScrollY = () => (container ? container.scrollTop : window.scrollY);
    const onScroll = () => {
      const y = getScrollY();
      setIsScrolled(y > 6);
      if (y > lastY.current + 4) setHidden(true);
      else if (y < lastY.current - 4) setHidden(false);
      lastY.current = y;
    };
    onScroll();
    target.addEventListener("scroll", onScroll, { passive: true });
    return () => target.removeEventListener("scroll", onScroll as EventListener);
  }, []);

  // Subtle interactive parallax/3D tilt
  const cardRef = useRef<HTMLDivElement | null>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [0, 1], [6, -6]);
  const rotateY = useTransform(mouseX, [0, 1], [-6, 6]);
  const springX = useSpring(rotateX, { stiffness: 200, damping: 20 });
  const springY = useSpring(rotateY, { stiffness: 200, damping: 20 });

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  };

  const isActive = useMemo(() => {
    const path = location.pathname;
    return (href: string) => path === href;
  }, [location.pathname]);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: hidden ? -80 : 0, opacity: hidden ? 0 : 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 30, duration: 0.4 }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="px-2 sm:px-4">
        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => { mouseX.set(0.5); mouseY.set(0.5); }}
          style={{
            transformStyle: "preserve-3d",
            rotateX: springX as unknown as number,
            rotateY: springY as unknown as number,
            width: "min(90vw, 720px)",
          }}
          className={`mx-auto mt-0 flex items-center gap-3 rounded-2xl border border-border/40 bg-background/85 px-3 sm:px-4 py-2 shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-md supports-[backdrop-filter]:bg-background/70 transition-all duration-500 ${
            isScrolled ? "shadow-[0_8px_40px_rgb(0,0,0,0.16)] bg-background/90" : ""
          }`}
        >
          <button
            aria-label="Back"
            onClick={() => navigate("/")}
            className="shrink-0 inline-flex items-center gap-2 rounded-xl px-2 py-1.5 active:scale-[.98] transition-all"
            style={{ transform: "translateZ(30px)" }}
          >
            <img
              src="/lovable-uploads/1d769ae6-56df-451f-af6b-3cd746a40cbb.png"
              alt="Logo"
              className="h-6 w-auto"
              loading="lazy"
              decoding="async"
            />
          </button>

          <Separator orientation="vertical" className="h-7 bg-border/60" />

          <div className="flex min-w-0 flex-1 items-center overflow-x-hidden">
            <ul className="flex flex-wrap justify-center items-center gap-1 sm:gap-2 pr-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href} style={{ transform: "translateZ(20px)" }}>
                  <Link
                    to={item.href}
                    className={`whitespace-nowrap rounded-lg px-3 py-1.5 text-sm font-medium transition-all duration-300 hover:bg-accent/80 hover:text-accent-foreground hover:shadow-sm ${
                      isActive(item.href)
                        ? "bg-accent text-accent-foreground shadow-md"
                        : "text-foreground/80 hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <Separator orientation="vertical" className="h-7 bg-border/60" />

          <a
            href={MEDIUM_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="shrink-0 rounded-lg px-4 py-1.5 text-sm font-semibold bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 shadow-sm hover:shadow-md"
            style={{ transform: "translateZ(20px)" }}
          >
            Medium
          </a>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default TopNav;


