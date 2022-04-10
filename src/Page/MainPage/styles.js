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
`
