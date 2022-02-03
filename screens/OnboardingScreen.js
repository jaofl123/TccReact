import React, {useState, useRef} from 'react'; 
import {View, Text, Button, StyleSheet, Animated, FlatList, Image,} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';




const OnboardingScreen = ({navigation}) => {

    return(
        <Onboarding        

         subTitleStyles={{
            color: '#FFFFFF',
            fontSize: 20, 
            fontWeight: 'bold',
            textAlign: 'center',
        
        }}

        onSkip = {() => navigation.navigate("Tela1")}
        onDone = {() => navigation.navigate("Tela1")}

        pages={[
            {
            backgroundColor: '#9A22B8',
            image: <Image source={require('../assets/Aviso1.png')}/>,
            title: '',
            subtitle: 'Esta aplicação foi pensada e projetada para auxiliar deficientes visuais.',
        },

        {
        backgroundColor: '#9A22B8',
            image: <Image source={require('../assets/Aviso2.png')}/>,
            title: '',
            subtitle:'Utilize-o para reconhecer objetos e imagens ao seu redor, como também para ler textos (via audiodescrição).',   
        }, 
        
        {
            backgroundColor: '#9A22B8',
            image: <Image source={require('../assets/Aviso3.png')}/>,
            title: '',
            subtitle: 'O EyeFinder é uma aplicação experimental, logo, ela não é 100% precisa. Não nos responsabilizamos pelo uso indevido do app..',
        }
    ]}
/>       
    );
}   
    


export default OnboardingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});