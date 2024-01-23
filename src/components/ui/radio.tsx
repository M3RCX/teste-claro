import React from 'react';

interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  src: string;
  alt?: string;
}

const Radio: React.FC<RadioProps> = ({ src, alt, checked, ...inputProps }) => {
  return (
    <label className='row col-12 col-md-6 my-5 d-flex align-items-center'>
      <input
        className='col-2 col-md-6 form-check-input radio-input'
        type="radio"
        checked={checked}
        {...inputProps}
      />
      <img className='col-10 col-md-6' src={src} alt={alt} />
    </label>
  );
};

export default Radio;
