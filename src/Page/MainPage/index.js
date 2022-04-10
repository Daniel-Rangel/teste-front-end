import imgBrinquedos from '../../image/image-40.png'
import imgGuias from '../../image/image-42.png'
import imgHigiene from '../../image/image-43.png'
import imgPetiscos from '../../image/image-41.png'
import imgSetaEsqueda from '../../image/icons/seta-esquerda-cinza.png'
import imgSetaDireita from '../../image/icons/seta-direita-cinza.png'

import { ContainerLg } from "../../Components/Container/styles";
import { MainBody, MainCategori, MyDogSection } from "./styles";

import Banner from "../../Components/Banner";
import { BtnSpanLeft, BtnSpanRight , Btn } from '../../Components/Buttons';
import CategoryCards from "../../Components/Categories";
import CardEcommerce from '../../Components/CardEcommerce'

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
                            {personalityPet.map( pet => (
                                <Btn name={pet.name} ativo={pet.ativo}/>
                            ))}
                        </div>
                    </div>
                    <section className='myDog_cards'>
                                <CardEcommerce/>
                                <CardEcommerce/>
                                <CardEcommerce/>
                    </section>
                </ContainerLg>
            </MyDogSection>
        </MainBody>
    )
}