import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, FileText, Send } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { Button } from "./ui/button";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { theme, setTheme } = useTheme();

  // Handle scroll state and active section detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of [...sections].reverse()) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionId);
            return;
          }
        }
      }

      if (window.scrollY < 200) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize to desktop (>= 1024px)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (href === "#" || !href) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      window.history.pushState(null, "", window.location.pathname);
      return;
    }

    const targetElement = document.querySelector(href);
    if (targetElement) {
      const headerOffset = 72;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      window.history.pushState(null, "", href);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.a
            href="#"
            onClick={(e) => handleNavClick(e, "#")}
            className="flex items-center gap-2.5 sm:gap-3 group cursor-pointer select-none"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="relative">
              <img
                src="/WhatsApp Image 2025-09-03 at 20.21.58_5adbba8f.jpg"
                alt="Krishna Chaturvedi"
                className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 rounded-full object-cover ring-2 ring-primary/40 group-hover:ring-primary transition-all duration-300 shadow-md"
              />
              <span className="absolute bottom-0 right-0 w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-emerald-500 ring-2 ring-background" />
            </div>
            <span className="font-bold text-base sm:text-lg md:text-xl tracking-tight text-foreground group-hover:text-primary transition-colors">
              Krishna<span className="text-primary">.dev</span>
            </span>
          </motion.a>

          {/* Desktop Navigation (Visible on lg screens and above: >= 1024px) */}
          <div className="hidden lg:flex items-center gap-1.5 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-1.5 rounded-lg text-xs xl:text-sm font-medium transition-all cursor-pointer ${
                    isActive
                      ? "text-primary bg-primary/10 font-semibold"
                      : "text-foreground/75 hover:text-primary hover:bg-muted/60"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Right Action Area (Theme toggle & Mobile menu button) */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="h-9 w-9 sm:h-10 sm:w-10 relative overflow-hidden text-foreground hover:bg-muted"
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait" initial={false}>
                {theme === "dark" ? (
                  <motion.div
                    key="sun"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun className="h-4 w-4 sm:h-5 sm:w-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>

            {/* Mobile / Tablet Menu Button (Visible on screens < 1024px) */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden h-9 w-9 sm:h-10 sm:w-10 text-foreground hover:bg-muted"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5 text-primary" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile & Tablet Navigation Drawer (Smooth animated dropdown) */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden border-t border-border/70 bg-background/98 backdrop-blur-2xl shadow-xl rounded-b-2xl max-h-[calc(100vh-4.5rem)] overflow-y-auto"
            >
              <div className="py-3 px-2 sm:px-4 space-y-1 sm:grid sm:grid-cols-2 sm:gap-2 sm:space-y-0">
                {navLinks.map((link, index) => {
                  const isActive = activeSection === link.href.substring(1);
                  return (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.025 }}
                      className={`flex items-center justify-between py-2.5 px-3.5 text-sm font-medium rounded-xl transition-all cursor-pointer ${
                        isActive
                          ? "bg-primary/15 text-primary font-semibold border border-primary/20 shadow-xs"
                          : "text-foreground/80 hover:text-foreground hover:bg-muted/70 active:bg-muted"
                      }`}
                      onClick={(e) => handleNavClick(e, link.href)}
                    >
                      <span>{link.name}</span>
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      )}
                    </motion.a>
                  );
                })}
              </div>

              {/* Quick Action Buttons inside Mobile Menu */}
              <div className="p-3 sm:px-4 border-t border-border/50 bg-muted/20 flex gap-2">
                <Button
                  size="sm"
                  className="w-full btn-primary text-xs font-semibold py-2 h-9"
                  asChild
                >
                  <a
                    href="https://drive.google.com/file/d/1lAa9zBS5bVNdaZCux3J19PISaeUVQonT/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FileText className="mr-1.5 h-3.5 w-3.5" />
                    Resume
                  </a>
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="w-full btn-outline text-xs font-semibold py-2 h-9"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(e as any, "#contact");
                  }}
                >
                  <Send className="mr-1.5 h-3.5 w-3.5" />
                  Contact
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;
