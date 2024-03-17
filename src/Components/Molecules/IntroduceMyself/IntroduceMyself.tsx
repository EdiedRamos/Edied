import { MyFace } from "@/Components/Atoms";

import "./IntroduceMyself.scss";

export const IntroduceMyself = () => {
  return (
    <div className="container introduce">
      <div className="introduce__text">
        <h1>Desarrollador Frontend</h1>
        <p>
          Hola, soy <span>Edied </span>
          <span>Isaías </span>
          <span>Ramos </span>
          <span>Hernández</span>, apasionado por el frontend, mi misión es dar
          vida a experiencias digitales excepcionales. Con especialización en
          React, transformo conceptos en interfaces atractivas, optimizadas y
          listas para cautivar a los usuarios.
        </p>
      </div>
      <MyFace />
    </div>
  );
};
