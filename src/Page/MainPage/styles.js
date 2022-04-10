import styled from 'styled-components'

export const MainBody = styled.main`
    section:nth-child(2){
        margin: 2.75rem 0;
    }

`
export const MainCategori = styled.section`
    display: flex;
    gap: 1rem;
    text-align: center;
    position: relative;
    
    img{
        border-radius: 20px;
    }
    h2{
        font-size: 1rem;
        color: var(--color-text);
    }
`

export const MyDogSection = styled.section`
    margin-top: 2.75rem;


    .myDog_header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        .myDog_buttons{
            display: flex;
            gap: 1rem;
        }
    }

    .myDog_cards{
        display: flex;
        justify-content: space-between;
        gap: 1rem;
        position: relative;
    }

    .myDog_footer{
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;

        a{
            font-size: 1.25rem;
            font-weight: 700;
            color: var(--color-highlighted-text);
        }

        .span{
            bottom: 2.5rem;
            margin: 8px auto;
            display: flex;
            gap: 1rem;

            span{
                width:12px;
                height: 12px;
                border-radius: 50%;
                border: 1px solid var(--color-titulo); 
            
            }
            span:first-child{
                background-color: var(--color-titulo);
            }
        }
    }


`
