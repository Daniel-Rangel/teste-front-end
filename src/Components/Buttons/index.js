import { ButtonLink , ButtonS, ButtonS2, ButtonSpan, ButtonSpanLeft, ButtonSpanRight } from "./styled";

function BtnLink(props){
    return(
        <ButtonLink className={props.adjustments}>
            {props.props}
        </ButtonLink>
    )
}

function Btn(props){
    return(
        <ButtonS ativo={ props.ativo} className={props.adjustment} >
           {props.name}
        </ButtonS>
    )
}

function Btn2(props){
    return(
        <ButtonS2 ativo={ props.ativo}>
           {props.name}
        </ButtonS2>
    )
}

function BtnSpan(props){
    return(
        <ButtonSpan posicao={props.posicao} >
           <img src={props.image} alt={props.name} /> 
        </ButtonSpan>
    )
}

function BtnSpanLeft(props){
    return(
        <ButtonSpanLeft className={props.adjustment} >
           <img src={props.image} alt={props.name} /> 
        </ButtonSpanLeft>
    )
}

function BtnSpanRight(props){
    return(
        <ButtonSpanRight className={props.adjustment} >
           <img src={props.image} alt={props.name} /> 
        </ButtonSpanRight>
    )
}


export {BtnLink, BtnSpan, BtnSpanLeft , BtnSpanRight, Btn , Btn2}