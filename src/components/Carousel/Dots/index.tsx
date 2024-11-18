import { FC } from "react";
import { classnames } from "../../../functions";
import { BannerDetailsMin } from "../../../models";

interface IDotsProps {
    activeIndex : number;
    content: Array<BannerDetailsMin>;
    onClick: (index: number) => void;
}

export const Dots : FC<IDotsProps> = ({
    activeIndex,
    content,
    onClick,
}) => {
    return (
        <div className="slider-dots"> 
            {content?.length && content.map((slide, index) => (
                <span 
                key={index}
                className={classnames('dot', activeIndex === index && 'active-dot')}
                onClick={() => onClick(index)}/>
            ))}
        </div>
    )
}