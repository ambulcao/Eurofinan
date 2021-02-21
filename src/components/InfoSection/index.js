import React from 'react';
import { Button } from 'react-scroll';
import { Column2, InfoContainer, InfoWrapper, InfoRow, Column1, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img } from './InfoElements';

const InfoSection = () => {
    return (
        <>
            <InfoContainer>
                <InfoWrapper>
                    <InfoRow>
                        <Column1>
                            <TextWrapper>
                                <TopLine>Banco Premium</TopLine>
                                <Heading>Transações ilimitadas sem taxas</Heading>
                                <Subtitle>Tenha acesso ao nosso aplicativo exclusivo que permite o envio de transações ilimitadas sem cobrança de taxas</Subtitle>
                                <BtnWrap>
                                    <Button to="home" />
                                </BtnWrap>
                            </TextWrapper>    
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img />
                            </ImgWrap>
                        </Column2> 
                    </InfoRow>   
                </InfoWrapper> 
            </InfoContainer>
        </>
    )
}

export default InfoSection
