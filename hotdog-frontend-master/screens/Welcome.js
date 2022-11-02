import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components/native";
import AuthButton from "../components/auth/AuthButton";
import AuthLayout from "../components/auth/AuthLayout";
import { StatusBar } from "react-native";

StatusBar.setBarStyle('dark-content');

const Container = styled.View`
    flex: 1;
    align-items:center;
    justify-content:center;
`;

const Logo = styled.Image`
    margin-bottom: 25px;
    margin-left:50px;
    max-width:80%;
`;

const CreateAccount = styled.TouchableOpacity`
    opacity:${(props) => (props.disabled ? "0.5":"1")};
`;
const CreateAccountText = styled.Text`
    font-weight:600;
    font-size:30px;
`;
const LogInLink = styled.Text`
    text-align:center;
    font-weight:500;
    font-size:35px;
    margin-top:50px;
    margin-bottom:20px;
    margin-left: 140px;
    margin-right: 140px;
    background-color:#ffc477;
    padding: 9px 5px;
    border-radius: 6px;
    border:1px solid #eeb44f;
    shadowOpacity: 0.35,
    shadowRadius: 3.5,
`;

export default function Welcome({navigation}){
    const goToCreateAccount = () => navigation.navigate("CreateAccount");
    const goToLogIn = () => navigation.navigate("LogIn");
    return(
        <AuthLayout>
            <Logo resizeMode="contain" source={require("../assets/hotdog.png")}/>
            <TouchableOpacity onPress={goToLogIn}>
            <LogInLink>로그인</LogInLink>
            </TouchableOpacity>
            <AuthButton text="회원가입" disabled={false} onPress={goToCreateAccount}/>
        </AuthLayout>
        // <Container>
        //     <Logo resizeMode="contain" source={require("../assets/logo.png")}/>
        //     <CreateAccount disabled={false} onPress={goToCreateAccount}>
        //         <CreateAccountText>회원가입</CreateAccountText>
        //     </CreateAccount>
        //     <TouchableOpacity onPress={goToLogIn}>
        //     <LogInLink>로그인</LogInLink>
        //     </TouchableOpacity>
        // </Container>
    );
}