import { BrandFigure } from "./styled";

import imgDog from '../../image/image-45.png'

export default function Brand (){
    return (
        <BrandFigure>
            <img src={imgDog} alt="dog" />
            <figcaption>
                <div>
                    <h2>Parceiros</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur</p>
                </div>
            </figcaption>
        </BrandFigure>
    )
}