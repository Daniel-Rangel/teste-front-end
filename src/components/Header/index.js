import imgEscudo from '../../image/icons/escudo.png'
import imgEntrega from '../../image/icons/entrega.png'
import imgCartao from '../../image/icons/cartao.png'
import imgLupa from '../../image/icons/lupa.png'
import imgLogo from '../../image/logo.png'

import { HeaderStyle, SectionTop, SectionSearch } from "./styles"


export default function Header(){
    return (
        <HeaderStyle>
            <SectionTop>
                <div><img src={imgEscudo} alt="Segura" /><p>Compra <span>100% segura</span></p></div>
                <div><img src={imgEntrega} alt="Frete grátis" /><p><span>Frete grátis</span> acima de R$ 200</p></div>
                <div><img src={imgCartao} alt="Parcele" /><p><span>Parcele</span> suas compras</p></div>
            </SectionTop>
            <SectionSearch>
                <img src={imgLogo} alt="Logo"/>
                <form action="#">
                    <input type="text" placeholder="O que você está buscando?"/>
                    <button type="submit"><img src={imgLupa} alt="Lupa" /></button>
                </form>
            </SectionSearch>
        </HeaderStyle>
    )
}