import styled from 'styled-components'

export const BrandFigure = styled.figure`
    width: 100%;
    max-width:753px;
    position: relative;
    color: var(--color-text-2);
    

    img{
        width: 100%;
        border-radius: 30px;
    }

    figcaption{
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
        padding: 10px 2.5rem;
        border-radius: 30px;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0), #000000 99.04%);

        div{
            position: absolute;
            bottom: 15%;
            transform: translateY(-50%)
        }

        h2{
            font-size: 2.5rem;
            color: var(--color-text-2);
            margin-bottom: 0.5rem;
        }

        p{
            width: 172px;
            font-size: 1rem;
        }
    }
`