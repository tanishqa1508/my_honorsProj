import React, {useState} from "react";
import { StatusBar } from 'expo-status-bar';
import { View } from "react-native";
//formik
import { Formik } from "formik";
//icons
import {Octicons, Ionicons, Fontisto} from '@expo/vector-icons';
//colors


import{
    StyledContainer, InnerContainer, PageLogo, PageTitle, SubTitle, StyledFormArea, LeftIcon, StyledInputLabel, StyledTextInput, RightIcon, StyledButton, ButtonText, Colors, MsgBox, Line, ExtraText, ExtraView, TextLink, TextLinkContent
} from './../components/styles'

const {brand, darkLight, primary} = Colors;

const Login = () => {
    const [hidePassword, setHidePassword] = useState(true);

    return (
        <StyledContainer>
            <StatusBar style="dark"></StatusBar>
            <InnerContainer>
                <PageLogo resizeMode= "cover" source={require('./../assets/logo.png')}></PageLogo>
                <PageTitle>Travel Diaries</PageTitle>
                <SubTitle>Account Login</SubTitle>

                <Formik
                    initialValues={{email: '', password: ''}}
                    onSubmit={(values) =>{
                        console.log(values);
                    }}
                >{({handleChange, handleBlur, handleSubmit, values}) => {
                    <StyledFormArea>
                        <MyTextInput 
                            label="Email Address"
                            icon="mail"
                            placeholder="abc@gmail.com"
                            placeholderTextColor={darkLight}
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            keyboardType="email-address"
                        />
                        <MyTextInput 
                            label="Password"
                            icon="lock"
                            placeholder="******"
                            placeholderTextColor={darkLight}
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                            secureTextEntry={hidePassword}
                            isPassword={true}
                            hidePassword={hidePassword}
                            setHidePassword={setHidePassword}
                        />
                        <MsgBox> ... </MsgBox>
                        <StyledButton onPress={handleSubmit}>
                            <ButtonText>
                                Login
                            </ButtonText>
                        </StyledButton>
                        <Line />
                        <StyledButton google={true} onPress={handleSubmit}>
                            <Fontisto name="google" color={primary} size={25}/>
                            <ButtonText google={true}>
                                Sign in with Google
                            </ButtonText>
                        </StyledButton> 
                        <ExtraView>
                            <ExtraText>Dont't have an account already?</ExtraText>
                            <TextLink>
                                <TextLinkContent>Signup</TextLinkContent>
                            </TextLink>
                        </ExtraView>
                    </StyledFormArea>
                }
                }
                </Formik>
            </InnerContainer>
        </StyledContainer>
    );
}

const MyTextInput = ({label, icon, isPassword, hidePassword, setHidePassword, ...props}) => {
    return (
        <View>
            <LeftIcon>
                <Octicons name={icon} size={30} color={brand}/>
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            <StyledTextInput {...props}/>
            {isPassword && (
                <RightIcon onPress={() => setHidePassword(!hidePassword)}>
                    <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={darkLight}/>
                </RightIcon>
            )}
        </View>
    );
};

export default Login;