"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight02Icon, ArrowUpRight03Icon } from "@hugeicons/core-free-icons";
import BigbirdExchange from "@/public/bigbird-logo.png"

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const whatsappNumber = "+2348012345678";
  const whatsappMessage = encodeURIComponent(
    "Hi, I want to make an exchange on BigBird Xchange"
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const navItems = [
    { label: "Services", href: "#services" },
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Testimonials", href: "#testimonials" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 80 && !isOpen) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isOpen]);

  const topVariants = {
    closed: { y: -4, rotate: 0 },
    open: { y: 0, rotate: 45 },
  };

  const bottomVariants = {
    closed: { y: 4, rotate: 0 },
    open: { y: 0, rotate: -45 },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const menuVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, when: "beforeChildren" },
    },
    exit: { opacity: 0 },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 30 },
  };

  return (
    <>
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: visible ? 0 : -100 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 w-full z-50 backdrop-blur-md transition-all duration-300",
          {
            "bg-background/95 shadow-sm": !isOpen,
            "bg-transparent": isOpen,
          }
        )}
      >
        <nav className="w-[min(1200px,90%)] mx-auto flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src={BigbirdExchange} // Change to /logo.svg if you have it
              alt="BigBird Xchange"
              width={70}
              height={40}
              className="rounded-md"
            />
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <li
                key={item.label}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button asChild size="lg" className="font-semibold">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Start Trading
                <HugeiconsIcon
                  icon={ArrowUpRight03Icon}
                  className="ml-2 size-5"
                />
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            size="icon"
            variant="ghost"
            onClick={() => setIsOpen((prev) => !prev)}
            className="relative flex lg:hidden justify-center items-center cursor-pointer"
          >
            <motion.div
              variants={topVariants}
              animate={isOpen ? "open" : "closed"}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute w-5 h-[2px] rounded-lg bg-foreground"
            />
            <motion.div
              variants={bottomVariants}
              animate={isOpen ? "open" : "closed"}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute w-5 h-[2px] rounded-lg bg-foreground"
            />
          </Button>
        </nav>
      </motion.header>
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-primary flex flex-col items-center justify-center gap-8"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="w-[90%] flex flex-col items-start gap-6 text-background text-2xl font-medium"
            >
              {navItems.map((item) => (
                <motion.div
                  key={item.label}
                  variants={menuItemVariants}
                  transition={{ duration: 0.3 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="group flex items-center gap-2 overflow-hidden"
                  >
                    <HugeiconsIcon
                      icon={ArrowRight02Icon}
                      className="w-0 opacity-0 transition-all duration-300 group-hover:w-5 group-hover:opacity-100"
                    />
                    <span className="transition-all duration-300 group-hover:translate-x-1">
                      {item.label}
                    </span>
                  </Link>
                </motion.div>
              ))}

              <motion.div variants={menuItemVariants}>
                <a
                  href={whatsappLink}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 text-2xl ml-2 hover:text-muted-foreground transition-colors ease-out duration-300"
                >
                  Start Trading
                  <HugeiconsIcon icon={ArrowUpRight03Icon} />
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
