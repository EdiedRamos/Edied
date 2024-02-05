import { useState, useEffect } from "react";

export const useHeader = () => {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const callback = () => setActiveSection(location.hash);
    callback();
    window.addEventListener("popstate", callback);
    return () => window.removeEventListener("popstate", callback);
  }, []);

  return { activeSection };
};
