import React from "react";
import { StatusBar } from 'expo-status-bar';

import{
    InnerContainer, PageTitle, SubTitle, StyledFormArea, StyledButton, ButtonText, Line, WelcomeContainer, WelcomeImage, Avatar
} from './../components/styles'


const Welcome = () => {
    

    return (
        <>
            <StatusBar style="light"></StatusBar>
            <InnerContainer>
                <WelcomeContainer>
                    <WelcomeImage resizeMode= "cover" source={require('./../assets/bg2.png')}></WelcomeImage>
                    <PageTitle welcome={true}>Welcome Buddy!</PageTitle>
                    <SubTitle welcome={true}>Tanishqa Borse</SubTitle>
                    <StyledFormArea>
                        <Avatar resizeMode= "cover" source={require('./../assets/logo.png')}></Avatar>
                        <Line />
                            <StyledButton onPress={() => {}}>
                                <ButtonText>
                                    Logout
                                </ButtonText>
                            </StyledButton>
                    </StyledFormArea>
                </WelcomeContainer>
            </InnerContainer>
        </>
    );
}

export default Welcome;