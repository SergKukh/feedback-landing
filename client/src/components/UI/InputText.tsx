import { FC, ChangeEvent } from 'react';
import styled from 'styled-components';

const commonProperties = `
border: 1px solid #DCDCDC;
border-radius: 10px;
padding: 31px 46px 30px 46px;
font-size: 18px;
color: #2D2D2D;
z-index: 15; 
&::placeholder {
    color: #2D2D2D;
}
`

const StyledInput = styled.input`
    ${commonProperties}
`

const StyledTextarea = styled.textarea`
${commonProperties}
resize: none;
&::-webkit-scrollbar-thumb {
    background-color: #888;
    border: 4px solid transparent;
    border-radius: 8px;
    background-clip: padding-box;  
    }     
&::-webkit-scrollbar {
    width: 1rem;
}
`

interface InputProps {
    value: any,
    onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    placeholder: string,
    required?: boolean,
    isTextarea?: boolean,
    type?: string,
    rows?: number
}

const InputText: FC<InputProps> = ({ value, placeholder, onChange, isTextarea, required, type, rows }) => {

    if (isTextarea) {
        return (
            <StyledTextarea
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required={required || false}
                rows={rows || 2} />
        )
    }

    return (
        <StyledInput
            type={type || 'text'}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            required={required || false} />
    );
};

export default InputText;