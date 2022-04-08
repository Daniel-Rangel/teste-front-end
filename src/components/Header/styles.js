import styled from 'styled-components'

export const HeaderStyle = styled.header`
    
    img{
        width: 16px;
    }
`

export const SectionTop = styled.section`
    display: flex;
    justify-content: space-evenly;
    font-size: 12px;

    div{
        display:flex;
        align-items: center;
        gap: 0.6875rem;
        padding: 0.4375rem 0;
        
        span{
            color: #FBB900;
            font-weight: 600;
        }
    }

    div:nth-child(2){
        img{
            width: 22px;
        }
    }
`

export const SectionSearch = styled.section`
    border-top: 1px solid #F0F0F0;
    border-bottom: 1px solid #F0F0F0;
    padding: 12px 0;

    div{
        width: 100%;
        display: flex;

        
        img{
            width: 100%;
            max-width: 178px;
        }

        form{
            width: 100%;
            margin: 0 3.5rem;
            display: flex;
            justify-content: space-between;
            background: #FEF6E7;
            padding-right: 1rem;

            input{
                width: 100%;
                background: transparent;
                padding: 0.875rem 0 0.875rem 1.5rem;
            }

            button{
                background: transparent;
                display: flex;
                align-items: center;
            }

            input::-webkit-input-placeholder{
                font-weight: 500;
                font-size: 0.875rem;
            }

            img{
                width: 24px;
            }
        }

        figure{
            display: flex;
            align-items:center;
            gap: 30px;

            img{
                width: 26px;
                height: 26px;
            }

            a:first-child{
                align-self: flex-start;
            }
        }
    }
`

export const NavSection = styled.nav`
    
    ul{
        display: flex;
        justify-content: space-between;
        list-style: none;
        text-transform: uppercase;
        color: #9F9F9F;
        font-weight: 600;
        padding: 11px 0;

        a{
            color: #9F9F9F;
            text-decoration: none; 
            font-size: 0.75rem;
        }

        a:hover{
            color: #FBB900;
        }
    }
`

//FEF6E7