import styled from 'styled-components'

export const CardEcommerceArticle = styled.article`
    width: 100%;
    max-width: 250px;
    display: flex;
    flex-direction: column;
    gap: 0.875rem;
    align-items: center;
    text-align: center;
    position: relative;
    flex: none;

    h1{
        width: 165px;
        font-size: 0.875rem;
        font-weight: 300;
        color: var(--color-titulo);
        text-transform: uppercase;
        line-height: 21px;
    }

    .card_ecommerce--promocao{
        text-decoration: line-through;
        font-size: 1rem;
        line-height: 24px;
        color: var(--color-text);
        font-weight: 500;
    }

    P{
        font-weight: 900;
        color: var(--color-titulo);
    }

    span{
        font-size: 0.7rem;
        font-weight: 300;
        color: var(--color-titulo);
        width: 99px;

        strong{
            color: var(--color-highlighted-text);
            font-weight: 700;
        }
    }

    .card_promotion{
        color: var(--color-highlighted-text);
        background: #FEF6E7;
        font-size: 0.875rem;
        padding: 0.425rem 0.9rem;
        text-transform: uppercase;
        border-radius: 4px;
        position: absolute;
        left: 0;
    }

    .card_favorite{
        position: absolute;
        top: 10px;
        right: 0;
    }
`