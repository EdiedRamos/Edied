import { MyFace } from "@/Components/Atoms";

import "./IntroduceMyself.scss";

export const IntroduceMyself = () => {
  return (
    <div className="container introduce">
      <div className="introduce__text">
        <h1>
          Desarrollador <span>Frontend</span>
        </h1>
        <p>
          ¡Hola! Soy <span>Edied Isaías Ramos Hernández</span> y mi fascinación
          radica en el mundo del frontend. Me dedico a crear experiencias
          digitales excepcionales. Con habilidades especializadas en{" "}
          <span>React</span>, convierto ideas en interfaces{" "}
          <span>atractivas</span>,<span>optimizadas</span> y listas para{" "}
          <span>impresionar</span> a los usuarios.
        </p>
      </div>
      <MyFace />
    </div>
  );
};
