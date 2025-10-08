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
  { label: "Contact", href: "/contact" },
  { label: "Gallery", href: "/gallery" },
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
      animate={{ y: hidden ? -60 : 0, opacity: hidden ? 0.9 : 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 24 }}
      className="fixed top-2 left-1/2 -translate-x-1/2 z-50"
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
          }}
          className={`mx-auto mt-0 flex items-center gap-3 rounded-2xl border border-border/60 bg-background/80 px-2.5 sm:px-3 py-1.5 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.35)] backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300 ${
            isScrolled ? "shadow-xl" : "shadow-md"
          }`}
          style={{ width: "min(92vw, 640px)" }}
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
            <ul className="flex flex-wrap justify-center items-center gap-1 sm:gap-2 md:gap-3 pr-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href} style={{ transform: "translateZ(20px)" }}>
                  <Link
                    to={item.href}
                    className={`whitespace-nowrap rounded-xl px-3 py-1.5 text-sm transition-all hover:bg-accent hover:text-accent-foreground ${
                      isActive(item.href)
                        ? "bg-accent text-accent-foreground shadow"
                        : "text-foreground"
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
            className="shrink-0 rounded-xl px-3 py-1.5 text-sm text-foreground/90 hover:text-foreground hover:bg-accent transition-colors"
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


