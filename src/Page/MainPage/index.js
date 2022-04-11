import imgBrand1 from '../../image/image-18.png'
import imgBrand2 from '../../image/image-19.png'
import imgBrand3 from '../../image/image-17.png'
import imgBlog1 from "../../image/image-44.png"
import imgBlog2 from "../../image/image-9.png"
import imgBlog3 from "../../image/image-63.png"
import imgBlog4 from "../../image/image-24.png"
import imgBrinquedos from '../../image/image-40.png'
import imgInstagram1 from '../../image/image-25.png'
import imgInstagram2 from '../../image/image-26.png'
import imgInstagram3 from '../../image/image-23.png'
import imgGuias from '../../image/image-42.png'
import imgHigiene from '../../image/image-43.png'
import iconEmail1 from '../../image/icons/EnvelopeSimple.png'
import iconUser from '../../image/icons/User.png'
import imgPetiscos from '../../image/image-41.png'
import imgSetaEsqueda from '../../image/icons/seta-esquerda-cinza.png'
import imgSetaDireita from '../../image/icons/seta-direita-cinza.png'
import imgSetaEsqueda1 from '../../image/icons/seta-esquerda-amarela.png'
import imgSetaDireita1 from '../../image/icons/seta-direita-amarela.png'

import { ContainerLg } from "../../Components/Container/styles";
import { InstagramSection, MainBody, MainCategori, MessageForm, MyDogSection, OurBlogs, TopBrands } from "./styles";

import Banner from "../../Components/Banner";
import { BtnSpanLeft, BtnSpanRight , Btn } from '../../Components/Buttons';
import CategoryCards from "../../Components/Categories";
import CardEcommerce from '../../Components/CardEcommerce'
import Blog from '../../Components/Blog'

const categories =[
    {
        id: 1,
        name: 'Brinquedos',
        img: imgBrinquedos
    },
    {
        id: 2,
        name: 'Petiscos',
        img: imgPetiscos
    },
    {
        id: 3,
        name: 'Guias',
        img: imgGuias
    },
    {
        id: 4,
        name: 'Higiene',
        img: imgHigiene
    }
]

const personalityPet = [
    {
        id: 1,
        name: 'É Agitado',
        ativo: true
    },
    {
        id: 2,
        name: 'Morde',
        ativo: false
    },
    {
        id: 3,
        name: 'Late muito',
        ativo: false
    },
    {
        id: 4,
        name: 'É Ansioso',
        ativo: false
    },
    {
        id: 4,
        name: 'É estressado',
        ativo: false
    }
]

const top_brands = [
    {
        id: 1,
        img: imgBrand1 ,
        alt: 'Marca 1',
    },
    {
        id: 2,
        img: imgBrand2 ,
        alt: 'Marca 2',
    },
    {
        id: 3,
        img: imgBrand3 ,
        alt: 'Marca 3',
    },
    {
        id: 4,
        img: imgBrand1 ,
        alt: 'Marca 1',
    },
    {
        id: 5,
        img: imgBrand2 ,
        alt: 'Marca 2',
    },
    {
        id: 6,
        img: imgBrand3 ,
        alt: 'Marca 3',
    },
]

const ourBlogs =[
    {
        id: 1,
        img: imgBlog1,
        title: 'Lorem ipsum dolor sit amet consectetur.',
        text: 'Lorem ipsum dolor sit amet, consectetur elit adipiscing dignissim posuere vitae.' 
    },
    {
        id: 2,
        img: imgBlog2,
        title: 'Lorem ipsum dolor sit amet consectetur.',
        text: 'Lorem ipsum dolor sit amet, consectetur elit adipiscing dignissim posuere vitae.' 
    },
    {
        id: 3,
        img: imgBlog3,
        title: 'Lorem ipsum dolor sit amet consectetur.',
        text: 'Lorem ipsum dolor sit amet, consectetur elit adipiscing dignissim posuere vitae.' 
    },
    {
        id: 4,
        img: imgBlog4,
        title: 'Lorem ipsum dolor sit amet consectetur.',
        text: 'Lorem ipsum dolor sit amet, consectetur elit adipiscing dignissim posuere vitae.' 
    }
]

const instagramSection = [
    {
        id: 1,
        img: imgInstagram1,
        link: '#',
        alt: 'figura'
    },
    {
        id: 2,
        img: imgInstagram2,
        link: '#',
        alt: 'figura'
    },
    {
        id: 3,
        img: imgInstagram3,
        link: '#',
        alt: 'figura'
    },
    {
        id: 1,
        img: imgInstagram1,
        link: '#',
        alt: 'figura'
    },
    {
        id: 2,
        img: imgInstagram2,
        link: '#',
        alt: 'figura'
    },
    {
        id: 3,
        img: imgInstagram3,
        link: '#',
        alt: 'figura'
    }
]

export default function Main(){
    return(
        <MainBody>
            <Banner/>
            <section className="categories" >
                <ContainerLg>
                    <h1>Categorias</h1>
                    <MainCategori>
                        <BtnSpanLeft 
                            image={imgSetaEsqueda} 
                            name='seta para esqueda'
                            posicao='0'
                        />
                        <BtnSpanRight 
                            image={imgSetaDireita} 
                            name='seta para Direita'
                            posicao='0'
                        />

                        {categories.map(e => (
                                <CategoryCards categories={e} />
                            ))
                        }

                    </MainCategori>
                </ContainerLg>
            </section>

            <MyDogSection>
                <ContainerLg>
                    <div className="myDog_header">
                        <h1>Meu cachorro...</h1>
                        <div className="myDog_buttons">
                            <BtnSpanLeft 
                                image={imgSetaEsqueda1} 
                                name='seta para esqueda'
                                adjustment='btnSpanLeft-adjustment-1'
                            />
                            <BtnSpanRight 
                                image={imgSetaDireita1} 
                                name='seta para Direita'
                                adjustment='btnSpanRight-adjustment-1'
                            />
                            {personalityPet.map( pet => (
                                <Btn name={pet.name} ativo={pet.ativo}/>
                            ))}
                        </div>
                    </div>
                    <section className='myDog_cards'>
                        <BtnSpanLeft 
                            image={imgSetaEsqueda} 
                            name='seta para esqueda'
                        />
                        <BtnSpanRight 
                            image={imgSetaDireita} 
                            name='seta para Direita'
                        />

                        <CardEcommerce/>
                        <CardEcommerce/>
                        <CardEcommerce/>
                        <CardEcommerce/>
                    </section>
                    <section className='myDog_footer'>
                        <a href="#">Ver todos</a>
                        <div className='span'>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </section>
                </ContainerLg>
            </MyDogSection>

            <TopBrands>
                <ContainerLg>
                    <div className='top_brands_header'>
                        <h1>Principais marcas</h1>
                        <a href="">Ver todos</a>
                    </div>
                    <section className="top_brands_body">
                        <BtnSpanLeft 
                            image={imgSetaEsqueda} 
                            name='seta para esqueda'
                            adjustment='btnSpanLeft-adjustment'
                        />
                        <BtnSpanRight 
                            image={imgSetaDireita} 
                            name='seta para Direita'
                            adjustment='btnSpanRight-adjustment'
                        />
                        {top_brands.map(brand =>(
                            <figure>
                                <img src={brand.img} alt={brand.alt} />
                            </figure>
                        ))}
                    </section>
                </ContainerLg>
            </TopBrands>

            <OurBlogs>
                <ContainerLg>
                    <h1>Confira o nosso Blog</h1>
                    
                    <div className='OurBlogs_Blog'>
                        {ourBlogs.map( blog =>(
                            <Blog blogs={blog}/>
                        ))}

                        <BtnSpanLeft 
                            image={imgSetaEsqueda} 
                            name='seta para esqueda'
                            adjustment='btnSpanLeft-adjustment-2'
                        />
                        <BtnSpanRight 
                            image={imgSetaDireita} 
                            name='seta para Direita'
                            adjustment='btnSpanRight-adjustment-2'
                        />
                        
                    </div>

                    <div className='span'>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </ContainerLg>
            </OurBlogs>
            
            <InstagramSection>
                <ContainerLg>
                    <div className="instagram-header">
                        <h1>Instagram</h1>
                        <a href="">+ Seguir</a>
                    </div>
                </ContainerLg>
                <section className='instagram_body'>
                    {instagramSection.map( instagram => (
                        <figure>
                            <a href={instagram.link}><img src={instagram.img} alt={instagram.alt}/></a>
                        </figure>
                    ))}
                </section>
            </InstagramSection>

            <MessageForm> 
                <h1>Se inscreva para receber novidades e promoções</h1>
                <div className='message_form'>
                    <label>
                        <img src={iconUser} alt="user" />
                        <input type="text" placeholder='Digite seu nome' />
                    </label>
                    <label>
                        <img src={iconEmail1} alt="email" />
                        <input type="email" placeholder='Digite seu e-mail ' />
                    </label>
                </div>
                <Btn 
                    name='Enviar' 
                    ativo={true} 
                    type='submit' 
                    adjustment= 'adjustmentForm'
                />
            </MessageForm>

        </MainBody>
    )
}