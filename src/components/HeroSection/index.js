import React, { useState } from 'react';
import Video from '../../videos/video.mp4';
import { Button } from '../ButtonElement';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1>Banco virtual facilitado</HeroH1>
                <HeroP>
                    Inscreva-se para uma nova conta hoje e receba €250 de crédito em seu próximo pagamento.
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="inscrever" 
                    onMouseEnter={onHover} 
                    onMouseLeave={onHover}
                    primary="true"
                    dark="true"
                    >
                        Inicie {hover ? <ArrowForward /> : <ArrowRight />}</Button>
                </HeroBtnWrapper>    
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;
