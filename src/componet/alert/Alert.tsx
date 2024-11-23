import { ReactNode } from "react";
import "./index.scss";
import {  X } from "lucide-react";
interface Iprops {
  type : string;
  icon: ReactNode;
  title: string;
  description: string;

};


const Alert = ({type ,icon , title, description }:Iprops) => {
  return (
    <div className={type}>
      <div className="alert-hrader">
        <div className="title">
          {icon}
          <h2>{title}</h2>
        </div>
          <X />       
      </div>

      <p>
        {description}
      </p>
    </div>
  );
};

export default Alert;
