import { useEffect, useState } from 'react'
import { Button, Footer, Slider } from "../../components"
import { BannerService } from '../../services'
import { BannerDetailsMin, BannerDetailsModel } from '../../models'
import office from '../../assets/images/office.jpg'

export const Home = () => {

    //state
    const [content, setContent] = useState<Array<BannerDetailsMin>>([]);

    //functions
    const onLearnClick = () => {
        window.location.href = '/about-us';
    }

    const onContactClick = () => {
        document.location.href = '/contact-us'
    }

    //hooks
    useEffect(() => {
        BannerService.getBannerContent()
            .then((res: BannerDetailsModel) => {
                if (!res?.Details?.length) return;
                setContent(res.Details);
            })
            .catch((e) => console.log({ e }))
    }, [])

    return (
        <>
            <Slider content={content} />
            <div className="content-container">
                <div className='text-column'>
                    <h2>Justo petentium te vix, scripta regione urbanitas</h2>
                    <p>Populo facilisi nam no, dolor deleniti deserunt nec eu, nam quodsi aliquyam eligendi ne. Ferri euismod eu nec, summo assentior ea vis. Ad vim legere impetus, nam consequat elaboraret usu. Ut nisl scaevola integre voluptatibus, omnes lucilius mei ne. Ea ancillae recteque deterruisset sed, ea nec option, ius malorum evertitur an.</p>
                    <ul>
                        <li>Te pri efficiendi assueverit, id molestie suavitate per</li>
                        <li>Te nam dolorum rationibus repudiandae, no has falli aliquip consequat</li>
                        <li>Ut quot decant copiosae interpretaris</li>
                        <li>Ut indoctum propriae voluptaria duo ut, vis vis semper abhorreant</li>
                    </ul>
                    <Button
                        text='Learn more'
                        onClick={onLearnClick}
                    />
                </div>
                <div className='image-column'>
                    <img
                        src={office}
                        alt="Company Office" />
                </div>
            </div>
            <div className="content-banner">
                <div className="background-image">
                    <div className="overlay-card">
                        <h2>Nulla sem urna, dictum sed nisi in, viverra rutrum neque</h2>
                        <p>Cras sit amet dapibus magna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec finibus nulla quis lorem mollis lacinia. Fusce ut arcu ligula. Pellentesque augue ex, pellentesque ut maximus non, eleifend ut lorem. Vestibulum rutrum malesuada turpis, molestie mattis vel enim auctor, quisque iaculis hendrerit ex et tincidunt. Aenean eu magna ut nisi placerat fringilla in sed diam.</p>
                        <Button
                            text='Log in'
                            onClick={() => { }} />
                    </div>
                </div>
            </div>
            <div className="content-footer">
                <h2>Sed libero justo, lobortis sit amet suscipit non</h2>
                <h3>taria duo ut vis semper abhorreant</h3>
                <div className='footer-columns'>
                    <p>
                        Pellentesque ac condimentum felis. Suspendisse vel suscipit dolor, nec auctor ultricies dapibus. Donec ac interdum dui, quis finibus lectus. Cras in ultrices neque. Curabitur eget turpis iaculis diam congue sagittis vel id ligula. Mauris ac arcu ex. Nullam quis odio ante. Nam feugiat magna non volutpat faucibus. Nam aliquam justo nec aliquam iaculis. Integer laoreet pulvinar dui pulvinar fermentum. Morbi vehicula sodales nunc ac varius. Non proin porttitor porttitor leo vel pharetra.
                        <br />
                        <br />
                        <br />
                        Cras sit amet dapibus magna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec finibus nulla quis lorem mollis lacinia. Fusce ut arcu ligula. Pellentesque augue ex, pellentesque ut maximus non, eleifend ut lorem. Vestibulum rutrum malesuada turpis, molestie mattis vel enim auctor, quisque iaculis hendrerit ex et tincidunt. Aenean eu magna ut nisi placerat fringilla in sed diam. Nam suscipit suscipit ex id cursus. Cras mattis ligula quis fermentum suscipit. Proin et elementum arcu, sit amet bibendum tortor. Curabitur suscipit erat, et vitae tristique volutpat augue lectus dignissim justo, at faucibus orci et erat.
                        <br />
                        <br />
                        <br />
                        Sed sed sapien pretium, mattis felis vel, mollis elit. Sed libero justo, lobortis sit amet suscipit non, auctor non libero. Maecenas quis nisi eget enim porta blandit a nec sapien. Mauris porttitor diam eget egestas accumsan. Donec molestie tempor nibh, nec venenatis arcu ullamcorper sit amet. Nulla facilisi. Proin cursus arcu ut tortor scelerisque, at iaculis mauris ornare. Pellentesque non nunc nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean sit amet metus diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porttitor magna augue, auctor congue placerat nec. Nulla sem urna, dictum sed nisi in, viverra rutrum neque. Aliquam ipsum nunc, porta non augue nec, fringilla malesuada arcu. In vehicula odio. Praesent ante lacus sapien, porttitor eget suscipit sit amet, vehicula nibh. Curabitur fringilla felis a porttitor malesuada. Vestibulum aliquet ante nec leo malesuada porttitor sit amet at magna.
                    </p>
                </div>
                <Button
                    text='Contact us'
                    onClick={onContactClick}
                />
            </div>
            <Footer />
        </>
    )
}