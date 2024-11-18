import { FC } from "react"
import { ReactComponent as ArrowIcon } from '../../../assets/svgs/arrow.svg';

interface IArrowsProps {
    prevSlide: () => void;
    nextSlide: () => void;
}

export const Arrows: FC<IArrowsProps> = ({
    prevSlide,
    nextSlide,
}) => {
    return (
        <div className="slider-arrows">
            <span
                className="slider-prev"
                onClick={prevSlide}>
                <ArrowIcon/>
            </span>
            <span
                className="slider-next"
                onClick={nextSlide}>
                <ArrowIcon />
            </span>
        </div>
    )
}