import styled from "styled-components";

export const ButtonLink = styled.a`
    background: var(--color-highlighted-text);
    color: #fff;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    font-weight: 900;
    letter-spacing: 0.08em;
    display: flex;
    justify-content: center;
    border-radius: 10px;
    width: 12%;
    border: 1px solid #F0D075;
    text-transform: uppercase;
`

export const ButtonS = styled.button`
    background: ${ props => props.ativo ? "var(--color-highlighted-text)" : "var(--color-text-2)" };
    padding: 0.625rem 1rem;
    font-size: 0.875rem;
    font-weight: 600;
    color: ${ props => props.ativo ? "var(--color-text-2)" :"var(--color-text)" };
    border: 1px solid ${ props => props.ativo ? "F0D075" :"var(--color-text)" };
    border-radius: 10px;
    text-transform: uppercase;
`

export const ButtonSpan = styled.span`
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #fff;
        border-radius: 50%;
        position: absolute;
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%);
        box-shadow: 0px 6px 16px rgba(179, 134, 0, 0.24);

        img{
            width: 10px;
        }
`

export const ButtonSpanLeft = styled(ButtonSpan)`
            left: 0;
            bottom: 50%;
            transform: translate(-50% , 0);
`

export const ButtonSpanRight = styled(ButtonSpan)`
            left: 101%;
            bottom: 50%;
            transform: translate( 0, 0);
`