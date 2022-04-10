import { CategoryArticle } from "./styled";

export default function CategoryCards(props){
    return(
        <CategoryArticle>
            <img src={props.categories.img} alt={`imagem de ${props.categories.name}`}/>
            <h2>{props.categories.name}</h2>
        </CategoryArticle>
    )
}