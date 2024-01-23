import React, { InputHTMLAttributes, useState } from "react";
import  Radio from "../ui/radio";
import { Title } from "../ui/title";

import  bolo1  from '../../assets/cake1.jpg'
import  bolo2  from '../../assets/cake2.jpg'
import  bolo3  from '../../assets/cake3.jpg'
import  bolo4  from '../../assets/cake4.jpg'


interface SelectCakeProps {
    onSelect: (cake: string) => void;
  }
  
  const SelectCake: React.FC<SelectCakeProps> = ({ onSelect }) => {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
  
    const handleSelect = (option: string) => {
      setSelectedOption(option);
      onSelect(option);
    };
  
    return (
      <div className='radio-title row'>
        <Radio
          key="opcao1"
          src={bolo1}
          alt="Bolo de morango com bolacha champagne"
          id="opcao1"
          name="boloMorango"
          value="opcao1"
          checked={selectedOption === "opcao1"}
          onChange={() => handleSelect("opcao1")}
        />
        <Radio
          key="opcao2"
          src={bolo2}
          alt="Bolo de morango com bolacha champagne"
          id="opcao2"
          name="boloMorangoChantily"
          value="opcao2"
          checked={selectedOption === "opcao2"}
          onChange={() => handleSelect("opcao2")}
        />
        <Radio
          key="opcao3"
          src={bolo3}
          alt="Bolo de morango com bolacha champagne"
          id="opcao3"
          name="boloChocolate"
          value="opcao3"
          checked={selectedOption === "opcao3"}
          onChange={() => handleSelect("opcao3")}
        />
        <Radio
          key="opcao4"
          src={bolo4}
          alt="Bolo de morango com bolacha champagne"
          id="opcao4"
          name="boloArcoiris"
          value="opcao4"
          checked={selectedOption === "opcao4"}
          onChange={() => handleSelect("opcao4")}
        />
      </div>
    );
  };
  
  export default SelectCake;