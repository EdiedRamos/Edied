import { Footer, Header } from "@/Components/Molecules";

import React from "react";
import { useRoutes } from "@/Core";

interface Props {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: Props): JSX.Element => {
  useRoutes();
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
};
