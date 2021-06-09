import React, { useState } from 'react';
import {Button, Image, ImageBackground, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';
import {Text, View} from "../components/Themed";

export default function Ganza() {
    const [walkGoing , setWalkGoing] = useState(false);
    const [walkingStep, setWalkingStep] = useState(1);

    const GonzaWalkStart = () => {
        return (<View style={styles.walkStreetView}>
            <View style={styles.titleView}>
                <Text style={styles.metroTitle}>МЕТРО 2033</Text>
                <Text style={styles.ganzaTitle}>ГАНЗА</Text>
            </View>
            <View style={styles.bottomView}>
                <Image source={require('../assets/images/warrior.png')} style={styles.warriorImage}/>
                <TouchableOpacity onPress={() => {
                    setWalkGoing(true)
                }} style={styles.button}>
                    <Text style={styles.buttonText}>{'ПОЧАТИ ПОДОРОЖ'}</Text>
                </TouchableOpacity>
            </View>
        </View>)
    };

    const GonzaWalkSteps = () => {
        return (<>
            {walkingStep === 1 ? <WalkStepOne/> : null}
            {walkingStep === 2 ? <WalkStepTwo/> : null}
            {walkingStep === 3 ? <WalkStepThree/> : null}
        </>)
    };

    const WalkStepOne = () => {
        return (<>
                <View style={styles.stepOne}>
                    <View style={styles.stepHeader}>
                        <Image source={require('../assets/images/ganza_logo.png')} style={styles.logo}/>
                        <Text style={styles.logoText}>Ганза</Text>
                    </View>

                    <Text style={styles.stepOneText}>Ганза - назва Співдружності Станцій Кільцевої Лінії. Найбільше та найвпливовіше угрупування
                        в Московському метро.
                        Під контролем Ганзи знаходяться 19 станцій. Завдяки Холодному Розрахунку та запереченню будь-яких ідеологій задля прибутку, Ганза стала наймогутнішою державою.
                    </Text>
                    <TouchableOpacity onPress={() => {setWalkingStep(2)}} style={{...styles.button, alignSelf: 'flex-end'}}>
                        <Text style={styles.buttonText}>{'НАСТУПНЕ'}</Text>
                    </TouchableOpacity>
                </View>
            </>)
    }

    const WalkStepTwo = () => {
        return (<>
                <View style={styles.stepOne}>
                    <View style={styles.stepHeader}>
                        <Image source={require('../assets/images/ganza_logo.png')} style={styles.logo}/>
                        <Text style={styles.logoText}>Ганза</Text>
                    </View>

                    <View style={styles.stepTwoBlock}>
                        <Image source={require('../assets/images/metro_stations.png')} style={{width: 70, height: 70}}/>
                        <Text style={styles.stepTwoBlockText}>Схема Московського метрополітену.
                            Кільцева Лінія - лінія Співдружності Ганза.</Text>
                    </View>
                    <View style={{...styles.stepTwoBlock, flexDirection: 'row-reverse'}}>
                        <Image source={require('../assets/images/ganza_logo.png')} style={{width: 70, height: 70}}/>
                        <Text style={styles.stepTwoBlockText}>Прапор Співдружності Станцій. Кільцевої Лінії Московського метрополітену Всесвіту Метро 2033.</Text>
                    </View>
                    <View style={styles.stepTwoBlock}>
                        <Image source={require('../assets/images/metro_logo.png')} style={{width: 70, height: 70}}/>
                        <Text style={styles.stepTwoBlockText}>Логотип першої частини відео гри
                            Метро 2033.</Text>
                    </View>
                    <View style={{flexDirection: 'row-reverse', backgroundColor: 'transparent', justifyContent: "space-between"}}>
                        <TouchableOpacity onPress={() => {setWalkingStep(3)}} style={{...styles.button, alignSelf: 'flex-end'}}>
                            <Text style={styles.buttonText}>{'НАСТУПНЕ'}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {setWalkingStep(1)}} style={{...styles.button, alignSelf: 'flex-end'}}>
                            <Text style={styles.buttonText}>{'ПОПЕРЕДНЄ'}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </>)
    }

    const WalkStepThree = () => {
        return (<>
            <View style={styles.stepOne}>
                <View style={styles.stepHeader}>
                    <Image source={require('../assets/images/ganza_logo.png')} style={styles.logo}/>
                    <Text style={styles.logoText}>ГАНЗА</Text>
                </View>
                <Image source={require('../assets/images/game_screen_1.png')} style={{width: 300, height: 150, alignSelf: 'center', margin: 15}}/>
                <Image source={require('../assets/images/game_screen_2.png')} style={{width: 300, height: 200, alignSelf: 'center', margin: 15, resizeMode: 'stretch',}}/>

                <TouchableOpacity onPress={() => {setWalkingStep(2)}} style={{...styles.button, alignSelf: 'flex-start'}}>
                    <Text style={styles.buttonText}>{'ПОПЕРЕДНЄ'}</Text>
                </TouchableOpacity>
            </View>
        </>)
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/images/background.png')} style={{width: '100%', height: '100%', position: 'absolute'}}>
                <View style={{marginTop: 45, backgroundColor: 'transparent'}}>
                    {walkGoing ? <GonzaWalkSteps/> : <GonzaWalkStart/> }
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    warriorImage: {
        width: 200,
        height: 300,
        resizeMode: 'stretch',
        alignSelf: "flex-end"
    },
    metroTitle: {
        fontWeight: '700',
        fontSize: 30,
        marginTop: 50,
        textAlign: 'center'
    },
    ganzaTitle: {
        fontWeight: '700',
        fontSize: 30,
        backgroundColor: 'black',
        color: '#BCA18F',
        borderRadius: 5,
        textAlign: "center"
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // or 'stretch'
    },
    walkStreetView: {
        width: '75%',
        backgroundColor: 'transparent',
        alignSelf: "center",
        justifyContent: 'space-between',
        height: '90%'
    },
    titleView: {
        width: '75%',
        backgroundColor: 'transparent',
        alignSelf: "flex-start",
        marginBottom: 20
    },
    bottomView: {
        backgroundColor: 'transparent',
    },
    button: {
        borderRadius: 30,
        backgroundColor: 'black',
        padding: 5,
        marginTop: 20
    },
    buttonText: {
        alignSelf: 'center',
        padding: 20,
        color: '#BCA18F',
    },
    stepOne: {
        backgroundColor: 'transparent',
        width: '90%',
        alignSelf: 'center'
    },
    stepOneText: {
        backgroundColor: 'transparent',
        marginTop: '25%',
        width: '85%',
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: '700'
    },
    stepHeader: {
        backgroundColor: 'transparent',
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        width: '85%'
    },
    logo: {
        width: 50,
        height: 50,
        marginRight: 30
    },
    logoText: {
        fontWeight: '700',
        fontSize: 30,
    },
    stepTwoBlock: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-around",
        backgroundColor: 'transparent',
        marginTop: 25,
        marginBottom: 25
    },
    stepTwoBlockText: {
        fontSize: 15,
        width: '70%',
        fontWeight: '700',
    }
});
