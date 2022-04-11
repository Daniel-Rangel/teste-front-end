import styled from 'styled-components'

export const BlogFigure = styled.figure`
    
    background: #FEF6E7;
    border-radius: 20px;
    

    img{
        width: 100%;
        border-radius: 20px 20px 0 0;
    }

    figcaption{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 1.5rem;

        h2{
            font-size: 1.20rem;
            font-weight: 700;
        }

        p{
            font-size: 0.855rem;
            font-weight: 400;
            color: var(--color-text);
        }
    }


`