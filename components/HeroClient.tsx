"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/site-config";

interface HeroClientProps {
  children: (props: {
    text: string;
    roleText: string;
    mounted: boolean;
  }) => React.ReactNode;
}

export function HeroClient({ children }: HeroClientProps) {
  const [mounted, setMounted] = useState(false);
  const [text, setText] = useState("");
  const fullText = `Hi, I'm ${siteConfig.name}`;
  const roles = siteConfig.roles;
  const [roleIndex, setRoleIndex] = useState(0);
  const [roleText, setRoleText] = useState("");

  useEffect(() => {
    setMounted(true);
    let index = 0;
    const typeText = () => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
        setTimeout(typeText, 100);
      }
    };
    typeText();
  }, [fullText]);

  useEffect(() => {
    if (!mounted) return;
    const typeRole = () => {
      const currentRole = roles[roleIndex];
      let index = 0;
      const type = () => {
        if (index <= currentRole.length) {
          setRoleText(currentRole.slice(0, index));
          index++;
          setTimeout(type, 100);
        } else {
          setTimeout(() => {
            setRoleIndex((prev) => (prev + 1) % roles.length);
            setRoleText("");
          }, 2000);
        }
      };
      type();
    };
    typeRole();
  }, [mounted, roleIndex, roles]);

  return <>{children({ text, roleText, mounted })}</>;
}

export function useScrollToSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return scrollToSection;
}

