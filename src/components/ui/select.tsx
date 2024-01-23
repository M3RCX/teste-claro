import React, { useEffect, useState } from 'react';

interface Dado {
  id: {
    m49: number; 
    }
  nome: {
    abreviado: string;
  };
}

interface SelectCountryProps {
  onChange?: (value: string) => void;
  value?: string;
}

const SelectCountry: React.FC<SelectCountryProps> = ({ onChange, value }) => {
  const [dados, setDados] = useState<Dado[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://servicodados.ibge.gov.br/api/v1/paises/{paises}');
        const data = await response.json();
        setDados(data);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchData();
  }, []);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    if (onChange) {
      onChange(selectedValue);
    }
  };

  const options = dados.map((item) => (
    <option key={item.id.m49} value={item.nome.abreviado}>
      {item.nome.abreviado}
    </option>
  ));

  return (
    <div className='col-12'>
        <select className='form-select' value={value} onChange={handleSelectChange}>
        {options}
        </select>
    </div>
  );
};

export default SelectCountry;
