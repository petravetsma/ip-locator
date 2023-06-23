import styled from 'styled-components';

const StyledButton = styled.button`
    vertical-align: top;
    height: 35px;
    margin: 0;
    padding: 15px;
    border: none;
    border-radius: 0 6px 6px 0;
    outline: none;
    background: 50% no-repeat url('./src/assets/right-arrow.svg') var(--secondary);

    &:focus {
        outline: none;
    }
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
        <StyledButton onClick={props.onClick} />
    )
}