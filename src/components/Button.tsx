import styled from 'styled-components';
import { ReactComponent as RightArrow } from "assets/right-arrow.svg";

const StyledButton = styled.button`
    vertical-align: top;
    margin: 0;
    padding: 4px;
    border: none;
    border-radius: 0 6px 6px 0;
    outline: none;
    background: 50% no-repeat var(--secondary);

    &:focus {
        outline: none;
    }
`

const StyledArrow = styled(RightArrow)`
    height: 100%;
    width: 100%;
`

type ButtonProps = {
    /**
     * Button click handler.
     */
    onClick: () => void;
}

/**
 * Button with right arrow icon.
 */
export function Button(props: ButtonProps) {

    return (
        <StyledButton onClick={props.onClick}>
            <StyledArrow />
        </StyledButton>
    )
}