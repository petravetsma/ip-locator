import { ReactComponent as Svg } from "assets/loader.svg";
import styled from 'styled-components';

const StyledLoader = styled.div`
    margin: 0 auto;
`

export const Loader = () => {
    return (
        <StyledLoader>
            <Svg />
        </StyledLoader>
    )
}
