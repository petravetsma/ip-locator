import styled from "styled-components"
import { Button } from "components/Button"
import { Input } from "components/Input"
import { useState } from "react"

const Wrap = styled.div`
    position: relative;
    padding: 5px 0;
    height: 23vh;
    background: var(--primary);
`

const Header = styled.h1`
    font-size: 24px;
    color: var(--secondary);
`
const Bar = styled.div`
    margin: 10px 0 20px;
`

type InputBarProps = {
    handleClick: (inputIp: string) => void;
}

export function InputBar(props: InputBarProps) {

    const [inputValue, setInputValue] = useState<string>('');

    const placeholder = "Search for any IP address or domain";

    return (
        <Wrap>
            <Header>IP Locator</Header>
            <Bar>
                <Input value={inputValue} placeholder={placeholder} onChange={(value) => {
                    setInputValue(value)
                }} />
                <Button onClick={() => {
                    props.handleClick(inputValue);
                }} />
            </Bar>
        </Wrap>
    )
}