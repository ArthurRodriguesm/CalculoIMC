import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function App(){

    const [ peso, setPeso ] = useState('');
    const [ altura, setAltura ] = useState('');
    
    function handleSubmit(){
        const alt = altura / 100;
        const imc = peso / (alt * alt);

        if(alt == 0){
            return false;
        }

        if(imc < 17){
            alert(`Você está muito abaixo do peso ideal. IMC = ${imc.toFixed(2)}`);
        }else if(imc >= 17 && imc <= 18.9){
            alert(`Você está abaixo do peso ideal. IMC = ${imc.toFixed(2)}`);
        }else if(imc >= 18.5 && imc <= 24.99){
            alert(`Você está com o peso ideal. IMC = ${imc.toFixed(2)}`);
        }else if(imc >= 25 && imc <= 29.99){
            alert(`Você está acima do peso ideal. IMC = ${imc.toFixed(2)}`);
        }else if(imc >= 30 && imc <= 34.99){
            alert(`Obesidade I. IMC = ${imc.toFixed(2)}`);
        }else if(imc >= 35 && imc <= 39.99){
            alert(`Obesidade II (severa). IMC = ${imc.toFixed(2)}`);
        }else {
            alert(`Obesidade III (mórbida). IMC = ${imc.toFixed(2)}`);
        }

    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Calcule seu IMC</Text>
            
            <TextInput
                style={styles.input}
                value={ peso }
                onChangeText={ (peso) => setPeso(peso) }
                placeholder="Peso (Kg)"
                keyboardType='numeric'
            />

            <TextInput
                style={styles.input}
                value={ altura }
                onChangeText={ (altura) => setAltura(altura)}
                placeholder="Altura (cm)"
                keyboardType='numeric'
            />
                

            <TouchableOpacity 
                onPress={handleSubmit}//Ao apertar o botao...
                style={styles.button}
            >
                <Text style={styles.buttonText}>Calcular</Text>
            </TouchableOpacity>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    title:{
        marginTop: 35,
        fontSize: 30,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#202020'
    },
    input:{
        width: '80%',
        borderWidth: 1,
        borderColor: '#202020',
        color: '#000',
        borderRadius: 6,
        margin: 15,
        padding: 10,        
        fontSize: 16
    },
    button:{
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00aeff',
        margin: 15,
        padding: 10,
        borderRadius: 6
    },
    buttonText:{
        color: '#fff',
        fontSize: 20,
    }
})