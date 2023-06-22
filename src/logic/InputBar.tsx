import styled from "styled-components"
import { ArrowButton } from "../components/Button"
import { Input } from "../components/Input"
import { useState } from "react"

const Wrap = styled.div`
    position: relative;
    padding: 30px 0 5px;
    background: #FEE715;
`

const Header = styled.h1`
    font-size: 24px;
    color: #101820;
`
const Bar = styled.div`
    margin: 10px 0 20px;
`

type InputBarProps = {
    handleClick: (inputIp: string) => void;
}

export function InputBar(props: InputBarProps) {

    const [inputValue, setInputValue] = useState<string>('');

    return (
        <Wrap>
            <Header>IP Locator</Header>
            <Bar>
                <Input value={inputValue} onChange={(value) => {
                    console.log(value)
                    setInputValue(value)
                }} />
                <ArrowButton onClick={() => {
                    console.log('click');
                    props.handleClick(inputValue);
                }} />
            </Bar>
        </Wrap>
    )
}