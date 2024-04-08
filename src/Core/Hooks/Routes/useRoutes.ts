import { useEffect } from "react";

export const useRoutes = () => {
  useEffect(() => {
    const { hash } = window.location;
    window.location.hash = "";
    window.location.hash = hash;
  }, []);
};
