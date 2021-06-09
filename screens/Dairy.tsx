import * as React from 'react';
import { Image, ImageBackground, StyleSheet, ScrollView} from 'react-native';
import {Text, View} from "../components/Themed";
import {useEffect, useState} from "react";

export default function Dairy() {

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/images/background.png')} style={{width: '100%', height: '100%', position: 'absolute'}}>
                <View style={{marginTop: 45, backgroundColor: 'transparent'}}>
                    <View style={styles.stepOne}>
                        <View style={styles.stepHeader}>
                            <Image source={require('../assets/images/ganza_logo.png')} style={styles.logo}/>
                            <Text style={styles.logoText}>ФОТО ЩОДЕННИК</Text>
                        </View>
                        <ScrollView style={{marginBottom: 120}}>
                            <Image source={{uri: 'http://176.36.173.26/resources/loginov.png'}} style={{width: 200, height: 200, alignSelf: 'center'}} />
                            <Text style={{alignSelf: 'center'}}>Логинов</Text>
                            <Image source={{uri: 'http://176.36.173.26/resources/ExodusDiaryHanza.png'}} style={{width: 200, height: 200, alignSelf: 'center'}} />
                            <Text style={{alignSelf: 'center'}}>Ганза</Text>
                            <Image source={{uri: 'http://176.36.173.26/resources/polis.png'}} style={{width: 200, height: 200, alignSelf: 'center'}} />
                            <Text style={{alignSelf: 'center'}}>Поліс</Text>
                            <Image source={{uri: 'http://176.36.173.26/resources/arbat.png'}} style={{width: 200, height: 200, alignSelf: 'center'}} />
                            <Text style={{alignSelf: 'center'}}>Арбат</Text>
                            <Image source={{uri: 'http://176.36.173.26/resources/conf1905.png'}} style={{width: 200, height: 200, alignSelf: 'center'}} />
                            <Text style={{alignSelf: 'center'}}>Конфедерати</Text>
                        </ScrollView>
                    </View>
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
    stepOne: {
        backgroundColor: 'transparent',
        width: '90%',
        alignSelf: 'center'
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
        maxWidth: '90%'
    },
});
