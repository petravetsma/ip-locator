import styled from "styled-components";

const StyledInfoBlock = styled.div`
    display: flex;
    justify-content: center;
    background: #fff;
`

type IpInfoProps = {

    /**
     * IP address to show.
     */
    ip: string;

    /**
     * Location for provided ip address.
     */
    location: string;

    /**
     * Internet service provider for provided ip address.
     */
    isp: string;
}

/**
 * Block to show information about:
 *  - IP 
 *  - location
 *  - ISP
 */
export function IpInfoBlock(props: IpInfoProps) {
    return (
        <StyledInfoBlock>
            <HeaderValue header={'IP ADDRESS'} value={props.ip} />
            <HeaderValue header={'LOCATION'} value={props.location} />
            <HeaderValue header={'ISP'} value={props.isp} />
        </StyledInfoBlock>
    )
}

const Wrap = styled.div`
    padding: 5px 10px;
`

const Header = styled.div`
    font-size: 10px;
`

const Value = styled.div`
    font-size: 18px;
`

function HeaderValue({ header, value }: { header: string, value: string }) {

    return (
        <Wrap>
            <Header>{header}</Header>
            <Value>{value}</Value>
        </Wrap>
    )

}
