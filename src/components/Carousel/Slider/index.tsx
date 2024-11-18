import { FC, useEffect, useState } from "react"
import { SliderContent } from "../SliderContent";
import { Arrows } from "../Arrows";
import { Dots } from "../Dots";
import { BannerDetailsMin } from "../../../models";

interface ISliderProps {
    content: Array<BannerDetailsMin>;
}

export const Slider: FC<ISliderProps> = ({
    content
}) => {
    //vars
    let count = content?.length - 1 || 0;

    //state
    const [loading, setLoading] = useState<boolean>(true);
    const [activeIndex, setActiveIndex] = useState<number>(0);

    //hooks
    useEffect(() => {
        const interval = setInterval(() => {
            setLoading(false);
        }, 1000);
        return () => clearInterval(interval);
    }, [content])

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(activeIndex === count ? 0 : activeIndex + 1)
        }, 5000);
        return () => clearInterval(interval);
    }, [activeIndex, count])

    //functions
    const onPrev = () => {
        setActiveIndex(activeIndex < 1 ? count : activeIndex - 1)
    }

    const onNext = () => {
        setActiveIndex(activeIndex === count ? 0 : activeIndex + 1)
    }

    const onDotClick = (index: number) => {
        setActiveIndex(index);
    }

    return (
        <>
            {loading ? (
                <div className="carousel-skeleton"/>
            ) : (

                <div className={"carousel-container"}>
                    <SliderContent
                        activeIndex={activeIndex}
                        content={content}
                    />
                    <Arrows
                        prevSlide={onPrev}
                        nextSlide={onNext}
                    />
                    <Dots
                        activeIndex={activeIndex}
                        content={content}
                        onClick={(index) => onDotClick(index)}
                    />
                </div>
            )}
        </>
    )
}