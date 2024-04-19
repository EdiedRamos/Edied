import { MyFace } from "@/Components/Atoms";

import "./IntroduceMyself.scss";

export const IntroduceMyself = () => {
  return (
    <div className="introduce-myself container">
      <div className="introduce-myself__text">
        <h1>
          Desarrollador <span>Frontend</span>
        </h1>
        <div className="introduce-myself__separator" />
        <p>
          ¡Hola! Soy Edied Isaías Ramos Hernández y mi fascinación radica en el
          mundo del frontend. Me dedico a crear experiencias digitales
          excepcionales. Con habilidades especializadas en React, convierto
          ideas en interfaces atractivas, optimizadas y listas para impresionar
          a los usuarios.
        </p>
      </div>
      <MyFace />
    </div>
  );
};
