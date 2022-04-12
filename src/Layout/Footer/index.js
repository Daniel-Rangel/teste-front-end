import { FooterStyle } from "./style";

import imgFace from '../../image/icons/iconFaceBook.png'
import imgInstagram from '../../image/icons/iconInstagram.png'
import imgYoutube from '../../image/icons/iconYoutube.png'
import imgPhone from '../../image/icons/Phone.png'
import imgCredito1 from '../../image/icons/Group-19.png'
import imgCredito2 from '../../image/icons/Group-20.png'
import imgCredito3 from '../../image/icons/Group-1.png'
import imgCredito4 from '../../image/icons/Group-2.png'
import imgCredito5 from '../../image/icons/Group-26.png'
import imgCredito6 from '../../image/icons/Group-3.png'
import imgProtecao from '../../image/icons/Group-830.png'
import imgVtex from '../../image/icons/Group-35.png'
import imgEconverse from '../../image/icons/Group-36.png'




export default function Footer (){
    return(
        <FooterStyle>
            <section className="section1">
                <h2>Nos siga nas nossas redes sociais</h2>
                <div>
                    <a href="#"> <img src={imgFace} alt="face book" /></a>
                    <a href="#"><img src={imgInstagram} alt="Instagram" /></a>
                    <a href="#"><img src={imgYoutube} alt="Youtube" /></a>
                </div>
                <h2>Sobre O Cãoselheiro</h2>
                <p>Seja muito bem-vindo! O Cãoselheiro - a loja - é a loja online de uma empresa que nasceu para contribuir para uma melhor qualidade de vida dos cães e seus familiares humanos. Seus sócios são profissionais de educação canina que trabalham seguindo metodologias positivas de treinamento animal, encorajando e recompensando os acertos de nossos amigos em seus processos de adestramento. Aqui você encontrará apenas itens de qualidade comprovada e utilizados pessoalmente por seus idealizadores. Fique à vontade!</p>
            </section>
            <section  className="section2">
                <h2>Assinatura</h2>
                <h2>Parceiros </h2>
            </section>
            <section className="section3">
                <h2>Institucional</h2>
                <a href="#">Quem somos</a>
                <a href="#">Política de privacidade</a>
                <a href="#">Política comercial</a>
                <a href="#">Política de devolução</a>
                <a href="#">Regras de frete</a>
            </section>
            <section className="section4">
                <h2>Atendimento</h2>
                <a href="#">Fale conosco</a>
                <a href="#"><img src={imgPhone} alt="telefone"/> (11)97212-1314</a>
                <a href="#">ocaoselheiro@ocaoselheiro.com.br</a>
                <a href="#">Trabalhe conosco</a>
            </section>
            <section className="section5">
                <h2>Formas de pagamento</h2>
                <div>
                    <figure>
                        <img src={imgCredito1}alt="Cartão Elo" />
                    </figure>
                    <figure>
                        <img src={imgCredito2}alt="Cartão Visa" />
                    </figure>
                    <figure>
                        <img src={imgCredito6}alt="Cartão MasterCard" />
                    </figure>
                    <figure>
                        <img src={imgCredito5}alt="Boleto"/>
                    </figure>
                    <figure>
                        <img src={imgCredito4}alt="Cartão Internacional" />
                    </figure>
                    <figure>
                        <img src={imgCredito3}alt="Cartão American Express" />
                    </figure>
                </div>
            </section>
            <section className="section6">
                <h2>Segurança</h2>
                <img src={imgProtecao}alt="prodetido" />
            </section>
            <section className="section7">
                <p>O Cãoselheiro Comércio LTDA <br/> CNPJ: 30.324.633/0001-16 © <br/>Todos os direitos reservados. 2021</p>
            </section>
            <section className="section8">
                <img src={imgEconverse} alt="Econverse" />
                <img src={imgVtex} alt="Vtex" />
            </section>
        </FooterStyle>
    )
}