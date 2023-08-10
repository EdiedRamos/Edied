import { Outlet } from "react-router-dom";
import { Header } from "../../Molecules";

export const Root = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
