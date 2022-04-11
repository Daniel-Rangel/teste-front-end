import styled from 'styled-components'
import imgDog from '../../image/image-2.png'

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

export const TopBrands = styled.section`
    margin-top: 4rem;


    .top_brands_header{
        display: flex;
        justify-content: space-between;
        position: relative;

        figure{
            width: 178px;
            height: 178px;
            box-shadow: 0px 8px 16px 0px #B286001F;
            border: 1px solid #E5E5E5;
            border-radius: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
`
export const OurBlogs = styled.section`
    display: flex;
    flex-direction: column;

    div.OurBlogs_Blog{
        margin-top: 0.75rem;
        margin-bottom: 2rem;
        display: flex;
        gap: 1.25rem;
        position: relative;
    }

    .span{
        bottom: 2.5rem;
        margin: 8px auto;
        display: flex;
        justify-content: center;
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
`

export const InstagramSection = styled.section`
    margin: 44px 0;
    .instagram-header{
        display: flex;
        justify-content: space-between;

        a{
            font-size: 1.25rem;
            font-weight: 700;
            color: var(--color-highlighted-text);
        }
    }

    .instagram_body{
        display: flex;
        overflow: hidden;
    }

`

export const MessageForm = styled.form`
    width: 772px;
    margin: 11.5rem auto;
    padding: 2.5rem 0;
    min-height: 200px ;
    background-color: #FEF6E7;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;
    border-radius: 20px;
    position: relative;

    &::before{
        position: absolute;
        content: url( ${imgDog} );
        color: red;
        top: -104px;
    }


    h1{
        width: 319px;
        font-size: 1.5rem;
        color: var(--color-titulo);
        text-align: center;
    }

    .message_form{
        width: 319px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 1.5rem;

        img{
            align-self: center;
            padding-left: 0.925rem;
        }

        label{
            width: 100%;
            display: grid;
            padding-right: 0.625rem;
            grid-template-columns: 50px 1fr;
            border-radius: 10px;
            background: #fff;

            input{
                padding: 1rem 0.625rem;
                font-weight: 500;
                color: var(--color-text);
                font-size: 0.875rem;
                outline: none;

                ::placeholder{
                    color: var(--color-text);
                }
            }
        }
    }

`