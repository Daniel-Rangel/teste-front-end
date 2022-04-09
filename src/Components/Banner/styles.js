import styled from "styled-components";
import imgSetaEsqueda from "../../image/icons/seta-esquerda-branca.png";
import imgSetaDireita from "../../image/icons/seta-direita-branca.png";

export const BannerSection = styled.section`
    position: relative;

    img{
        width:100%;
    }

    > div{
        width: 100%;
        height: 98.5%;
        position: absolute;
        top:0;
        left:50%;
        transform: translateX(-50%);
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 68px;

        h1{
            max-width: 387px;
            font-size: 2.5rem;
            color: var(--color-text-2);
            margin-bottom: 1.5rem;
            line-height: 3.75rem;
        }

        ::before{
            content: url( ${imgSetaEsqueda} );
            position: absolute;
            left:0;
        }

        ::after{
            content: url( ${imgSetaDireita} );
            position: absolute;
            right:0;
        }

        .span{
            position: absolute;
            bottom: 2.5rem;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            gap: 1rem;

            
            span{
                width:12px;
                height: 12px;
                border-radius: 50%;
                border: 1px solid #fff; 
            
            }
            span:first-child{
                background-color: #fff;
            }
        }
        
        
    }

    
`