import { FooterStyle } from "./style";

import imgFace from '../../image/icons/iconFaceBook.png'
import imgInstagram from '../../image/icons/iconInstagram.png'
import imgYoutube from '../../image/icons/iconYoutube.png'
import imgPhone from '../../image/icons/Phone.png'
import imgCredito1 from '../../image/icons/Group-17.png'
import imgCredito2 from '../../image/icons/Group-21.png'
import imgProtecao from '../../image/icons/Group-830.png'




export default function Footer (){
    return(
        <FooterStyle>
            <section className="section1">
                <h2>Nos siga nas nossas redes sociais</h2>
                <div>
                    <img src={imgFace} alt="face book" />
                    <img src={imgInstagram} alt="Instagram" />
                    <img src={imgYoutube} alt="Youtube" />
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
                    <img src={imgCredito1}alt="" />
                    <img src={imgCredito1}alt="" />
                    <img src={imgCredito1}alt="" />
                    <img src={imgCredito1}alt="" />
                    <img src={imgCredito1}alt="" />
                    <img src={imgCredito1}alt="" />
                </div>
            </section>
            <section className="section6">
                <h2>Segurança</h2>
                <img src={imgProtecao}alt="" />
            </section>
            <section className="section7">
                <p>O Cãoselheiro Comércio LTDA <br/> CNPJ: 30.324.633/0001-16 © <br/>Todos os direitos reservados. 2021</p>
            </section>
            <section className="section8">
                <img src="" alt="" />
                <img src="" alt="" />
            </section>
        </FooterStyle>
    )
}