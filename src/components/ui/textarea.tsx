import React, { forwardRef, InputHTMLAttributes } from 'react';

interface TextAreaProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id: string;
  placeholder: string;
  divStyle?: string;
  isLabelRequired?: boolean;
}

const TextArea: React.ForwardRefRenderFunction<HTMLInputElement, TextAreaProps> = (
  { label, id, placeholder, divStyle, isLabelRequired, ...inputProps },
  ref
) => {
  return (
    <div className={divStyle}>
      {label && <label htmlFor={id} className='text text-label mt-3'>{label}</label> }
      {isLabelRequired && <span className='bullet-required'>*</span>}
      <input
        id={id}
        placeholder={placeholder}
        {...inputProps}
        ref={ref}
        required
      />
      <div className="invalid-feedback">
        Verifique o campo
      </div>
    </div>
  );
};

export default forwardRef(TextArea);
