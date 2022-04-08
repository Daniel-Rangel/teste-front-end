import imgEscudo from '../../image/icons/escudo.png'
import imgEntrega from '../../image/icons/entrega.png'
import imgCartao from '../../image/icons/cartao.png'
import imgLupa from '../../image/icons/lupa.png'
import imgDevolucao from '../../image/icons/caixa-de-devolucao.png'
import imgCarrinho from '../../image/icons/carrinho.png'
import imgCoracao from '../../image/icons/coracao.png'
import imgPerfil from '../../image/icons/perfil.png'
import imgLogo from '../../image/logo.png'


import { HeaderStyle, SectionTop, SectionSearch, NavSection } from "./styles"
import { ContainerLg } from '../Container/style'


export default function Header(){
    return (
        <HeaderStyle>
                <SectionTop>
                    <div><img src={imgEscudo} alt="Segura" /><p>Compra <span>100% segura</span></p></div>
                    <div><img src={imgEntrega} alt="Frete grátis" /><p><span>Frete grátis</span> acima de R$ 200</p></div>
                    <div><img src={imgCartao} alt="Parcele" /><p><span>Parcele</span> suas compras</p></div>
                </SectionTop>
                <SectionSearch>
                    <ContainerLg>
                        <div>
                            <img src={imgLogo} alt="Logo"/>
                            <form action="#">
                                <input type="text" placeholder="O que você está buscando?"/>
                                <button type="submit"><img src={imgLupa} alt="Lupa" /></button>
                            </form>
                            <figure>
                                <a href=""><img src={imgDevolucao} alt="Devolução" /></a>
                                <a href=""><img src={imgCoracao} alt="Favoritos" /></a>
                                <a href=""><img src={imgPerfil} alt="Usuario" /></a>
                                <a href=""><img src={imgCarrinho} alt="Carrinho" /></a>
                            </figure>
                        </div>
                    </ContainerLg>
                </SectionSearch>
                <NavSection>
                    <ContainerLg>
                        <ul>
                            <li><a href='#'>Brincar</a></li>
                            <li><a href='#'>Morder</a></li>
                            <li><a href='#'>Comer</a></li>
                            <li><a href='#'>Passear</a></li>
                            <li><a href='#'>Casa e Conforto</a></li>
                            <li><a href='#'>Educação</a></li>
                            <li><a href='#'>Ofertas</a></li>
                            <li><a href='#'>Coleção de outono</a></li>
                        </ul>
                    </ContainerLg>
                </NavSection>
        </HeaderStyle>
    )
}