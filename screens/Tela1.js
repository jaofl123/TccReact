import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';




const Tela1 = () => {
    return(
        <View style={styles.container}>
            <Text>Aqui vai ficar a primeira Função</Text>
            <Button 
                title="Clique Aqui"
                onPress={() => alert("Botão Funcionando")}
            />
            
        </View>
    );
};

export default Tela1;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});
    