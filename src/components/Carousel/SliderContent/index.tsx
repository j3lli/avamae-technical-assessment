import { FC } from "react"
import { classnames } from "../../../functions";
import { Button } from "../../Button";
import { BannerDetailsMin } from "../../../models";

interface ISliderContentProps {
    activeIndex: number;
    content: Array<BannerDetailsMin>;
}

export const SliderContent: FC<ISliderContentProps> = ({
    activeIndex,
    content,
}) => {

    const onContactClick = () => {
        document.location.href = '/contact-us'
    }

    return (
        <section>
            {content?.length && content.map((tab, index) => (
                <div
                    key={index}
                >
                    <div className={classnames('carousel-text', 'carousel-inactive', index === activeIndex && 'carousel-active')}>
                        <h2>{tab.Title}</h2>
                        <h5>{tab.Subtitle}</h5>
                        <Button
                            text="Contact us"
                            onClick={onContactClick}
                        />
                    </div>
                    <div
                        className={classnames('slides', 'carousel-inactive', index === activeIndex && 'carousel-active')}>
                        <img className="slide-image" src={tab.ImageUrl} alt="Carousel Slide" />
                    </div>
                </div>
            ))}
        </section>
    )
}