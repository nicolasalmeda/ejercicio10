import { Titulo } from "./Titulo";
import Formulario from "./Formulario";
import '../css/formContainer.css'
import CitaContainer from "./CitaContainer";

export const FormContainer = () => {
  return (
    <div className="FormContainer">
      <Titulo />
      <Formulario />
      <CitaContainer />
    </div>
  )
};
