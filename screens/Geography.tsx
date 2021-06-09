import * as React from 'react';
import { Image, ImageBackground, StyleSheet, ScrollView} from 'react-native';
import {Text, View} from "../components/Themed";

export default function Geography() {

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/images/background.png')} style={{width: '100%', height: '100%', position: 'absolute'}}>
                <View style={{marginTop: 45, backgroundColor: 'transparent'}}>
                    <View style={styles.stepOne}>
                        <View style={styles.stepHeader}>
                            <Image source={require('../assets/images/ganza_logo.png')} style={styles.logo}/>
                            <Text style={styles.logoText}>ГЕОГРАФІЯ</Text>
                        </View>
                        <ScrollView style={{marginBottom: 100}}>
                            <Text style={{fontWeight: '700', fontSize: 20}}>Володіння Ганзи охоплюють всі станції Кільцевій, деякі радіальні і прилеглі станції, такі як: Комсомольская-кільцева, Курська-кільцева і Курська-радіальна, Чкаловська, Таганська-кільцева і Таганська-радіальна, Марксистська, Павелецька-кільцева, Добринінський, Серпуховская, Тульська, Жовтнева-кільцева і Жовтнева-радіальна, Парк Культури-кільцева, Київська-кільцева, Краснопресненська, Білоруська-кільцева, Новослободская, Менделеевская, проспект Миру-кільцева і проспект Миру-радіальна, Пролетарська і Волгоградський проспект.

                                Ганза також має форпости в декількох радіоцентрах по всьому периметру Москви і корпоративний бункер біля станції метро Полянка.</Text>
                            <Image source={require('../assets/images/ghost.png')} style={{width: 300, height: 500, alignSelf: 'center', margin: 15}}/>
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
    },
});
