import imgVazilha from '../../image/image-10.png'
import imgCoracao from '../../image/icons/coracao.png'

import { CardEcommerceArticle } from './styled'

import { Btn2 } from '../Buttons'


export default function CardEcommerce(){
    return(
        <CardEcommerceArticle>
            <div className='card_promotion'>40% off</div>
            <div className='card_favorite'><img src={imgCoracao} alt="Favoritar"/></div>
            <img src={imgVazilha} alt=""/>
            <h1>Brinquedo Kong Duratreat Ring P</h1>
            <p className='card_ecommerce--promocao'>De R$ 96,69</p>
            <p>Por R$ 90,69</p>
            <span><strong>R$ 85,69</strong> <br/> Para assinantes</span>
            <Btn2 name={'Adicionar'} ativo={true} />
        </CardEcommerceArticle>
    )
}