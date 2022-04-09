import imgBanner from '../../image/banner-1.png'
import imgSetaBaixo from '../../image/icons/baixo-cinza.png'

import { ContainerLg } from '../Container/styles'
import { BannerSection } from './styles'

import {BtnLink, BtnSpan} from '../Buttons/index'


export default function Banner (){
    return(
        <BannerSection>
            <img src={imgBanner} alt="Banner" />
            <ContainerLg>
                <div>
                    <h1>As melhores guias para os melhores passeios.</h1>
                    <BtnLink props='Confira' />
                    <div className='span'>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

            </ContainerLg>
            <BtnSpan 
                image={imgSetaBaixo} 
                name={"seta para baixo"}
            />
        </BannerSection>
    )
}