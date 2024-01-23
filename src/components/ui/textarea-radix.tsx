import React from 'react';
import * as Form from '@radix-ui/react-form';

interface TextAreaProps {
  label?: string;
  id: string;
  placeholder: string;
  value: string;
  type: string;
  onChange?: (value: string) => void;
  nullMessage?: string;
  errorMessage?: string;
  isRequired?: boolean;
}

const TextArea: React.FC<TextAreaProps> = ({
  label,
  id,
  placeholder,
  type,
  nullMessage,
  errorMessage,
  isRequired,
}) => {
  return (
    <Form.Field name={id}>
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
        {label && <Form.Label className="FormLabel my-3">{label}</Form.Label>}
        <Form.Message className="FormMessage" match="valueMissing">
          {nullMessage}
        </Form.Message>
        <Form.Message className="FormMessage" match="typeMismatch">
          {errorMessage}
        </Form.Message>
      </div>
      <Form.Control asChild>
        <input
          className="Input"
          type={type}
          id={id}
          placeholder={placeholder}
          required={isRequired}
        />
      </Form.Control>
    </Form.Field>
  );
};

export { TextArea };
