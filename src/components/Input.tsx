import { ChangeEvent } from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
    height: 35px;
    width: 300px;
    margin: 0;
    padding: 6px;
    border: none;
    border-radius: 6px 0 0 6px;
    outline: none;
    background: #fff;
`

type InputProps = {
    value: string;
    onChange: (value: string) => void;
}

export function Input(props: InputProps) {

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        const value = event.currentTarget.value;
        props.onChange(value);
    }

    return (
        <StyledInput type="text" value={props.value} onChange={handleInputChange} />
    )
}