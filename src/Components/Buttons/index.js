import { ButtonLink , ButtonSpan } from "./styled";

function BtnLink(props){
    return(
        <ButtonLink>
            {props.props}
        </ButtonLink>
    )
}

function BtnSpan(props){
    return(
        <ButtonSpan>
           <img src={props.image} alt={props.name} /> 
        </ButtonSpan>
    )
}

export {BtnLink, BtnSpan}