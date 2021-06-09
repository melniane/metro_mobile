import * as React from 'react';
import { Image, ImageBackground, StyleSheet, ScrollView} from 'react-native';
import {Text, View} from "../components/Themed";

export default function Facts() {

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/images/background.png')} style={{width: '100%', height: '100%', position: 'absolute'}}>
                <View style={{marginTop: 45, backgroundColor: 'transparent'}}>
                    <View style={styles.stepOne}>
                        <View style={styles.stepHeader}>
                            <Image source={require('../assets/images/ganza_logo.png')} style={styles.logo}/>
                            <Text style={styles.logoText}>ЦІКАВІ ФАКТИ</Text>
                        </View>
                        <ScrollView style={{marginBottom: 100}}>
                            <Text style={styles.bulletText}>{'\u2B24'} Ганза бере свою назву на честь реально існуючого в дванадцятому-сімнадцятому століттях Ганзейського союзу торгових міст.</Text>
                            <Text style={styles.bulletText}>{'\u2B24'} Ганза має найбільшу кількість кордонів з іншими фракціями.</Text>
                            <Text style={styles.bulletText}>{'\u2B24'} Входила до Коаліції антикомуністичних станцій.</Text>
                            <Text style={styles.bulletText}>{'\u2B24'} З 2028 року Ганза проводить щорічні Ганзейские гри, через що на кілька днів не можна пересуватися по кільцю.</Text>
                            <Text style={styles.bulletText}>{'\u2B24'} Згідно раннім кадрам Metro: Last Light прапор Ганзи мав оновитися: замість коричневого кола герб прикрашав чорний орел з герба німецького міста Любека - прародителя реальноїГанзи. Однак в кінцевій версії від нього відмовилися через його неканонічність. Проте, на політичній карті в Д-6 можна помітити, що орел на гербі Ганзи все ж є, але зображений у вигляді двоголового.</Text>
                            <Text style={styles.bulletText}>{'\u2B24'} Ганза - єдина з чотирьох основних фракцій, за представника якої не можна зіграти в доповненні «Комплект фракцій».</Text>
                            <Text style={styles.bulletText}>{'\u2B24'} Через помилку розробників солдати ОСКОМ з доповнення «Два полковника» носять однакову з Ганза нашивку з гербом</Text>
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
    bulletText: {
        fontWeight: '700',
        fontSize: 20,
    }
});
