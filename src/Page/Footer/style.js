import styled from 'styled-components'

export const FooterStyle = styled.footer`
    background: #FBB900;
    display: grid;
    grid-template-columns: 35% 20% 20% 25%;
    grid-template-areas:
         "section1 section2 section3 section4"
         "section1 section2 section3 section4"
         "section1 section5 section5 section6"
         "section1 section7 section7 section8"
	;
    .section1{
        grid-area: section1;
        border-right: 1px solid #fff;
        text-align: center;
        padding: 3rem;
    }

    .section2{
        grid-area: section2;
        padding-top: 2rem;
        padding-left: 2rem;
    }

    .section3{
        grid-area: section3;
        padding-top: 2rem;
        padding-left: 2rem;

    }

    .section4{
        grid-area: section4;
        padding-top: 2rem;
        padding-left: 2rem;

    }

    .section5{
        grid-area: section5;
        border-bottom: 1px solid #fff;
        padding-top: 2rem;
        padding-left: 2rem;

        div{
            width: 215px;
            display: grid;
            gap: 8px;
            grid-template-columns: 1fr 1fr 1fr;
            figure{
                width: 68px;
                height: 38px;
                background: #fff;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 6px;
            }
        }
    }

    .section6{
        grid-area: section6;
        border-bottom: 1px solid #fff;
        padding-top: 2rem;
        padding-left: 2rem;
    }

    .section7{

        grid-area: section7;
        border-bottom: 1px solid #fff;
        font-size: 0.75px;
        font-weight: 400;
        padding-top: 2rem;
        padding-left: 2rem;
        padding-bottom: 2rem;
    }

    .section8{
        grid-area: section8;
        border-bottom: 1px solid #fff;
        padding-top: 2rem;
        padding-left: 2rem;
        padding-bottom: 2rem;

        img{
            padding: 10px;
        }
    }

    section{
        text-align: left;
        font-size: 0.875rem;

        div{
            display: flex;
            justify-content: center;
            margin: 2rem 0;
            gap: 2rem;
        }
    }

    h2{
        color: var(--color-text-2);
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    p{
        color: var(--color-text-2);
        font-size: 0.875rem;
    }

    a{
        display: block;
        padding: 7px 0;
        text-decoration: none;
        color: var(--color-text-2);
    }
`