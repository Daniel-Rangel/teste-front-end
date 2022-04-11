
import { BtnLink } from "../Buttons";
import { BlogFigure } from "./styled";

export default function Blog (props){
    return(
        <BlogFigure>
            <img src={props.blogs.img} alt="figure" />
            <figcaption>
                <h2>{props.blogs.title}</h2>
                <p>{props.blogs.text}</p>
                <BtnLink props='Ler artigo' adjustments='adjustmentsBtnLink' />
            </figcaption>
        </BlogFigure>
    )
}