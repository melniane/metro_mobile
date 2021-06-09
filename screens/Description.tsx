import * as React from 'react';
import { Image, ImageBackground, StyleSheet, ScrollView} from 'react-native';
import {Text, View} from "../components/Themed";

export default function Description() {

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/images/background.png')} style={{width: '100%', height: '100%', position: 'absolute'}}>
                <View style={{marginTop: 45, backgroundColor: 'transparent'}}>
                    <View style={styles.stepOne}>
                        <View style={styles.stepHeader}>
                            <Image source={require('../assets/images/ganza_logo.png')} style={styles.logo}/>
                            <Text style={styles.logoText}>ОПИС</Text>
                        </View>
                        <ScrollView style={{marginBottom: 100}}>
                            <Text style={{fontWeight: '700', fontSize: 20}}>Найбільша держава Московського метрополітену, за своїми звичками наближена до Заходу.
                                Є найбагатшим і одним з найвпливовіших. Це те місце, де громадський транспорт,
                                водопровід і електричне освітлення широко поширені.
                                Живе в основному за рахунок торгівлі і стягнення мита з торговців,
                                які бажають перетнути кільце. Постапокалиптичне співтовариство московського метро
                                утворено незалежними станціями і могутніми фракціями.
                                Після довгих років жорстокої громадянської війни між фашистами Рейху і
                                комуністами Червоної лінії, найбільш могутньої угрупованням стала Ганза,
                                яка об'єднує станції Кільцевій лінії. Частину своїх величезних ресурсів Ганза
                                витратила на відновлення бойової потужності Ордена спартанців, що підтримує мир
                                у Метро, уклавши таким чином союз з цієї елітної силою ...</Text>
                            <Image source={require('../assets/images/game_screen_1.png')} style={{width: 300, height: 150, alignSelf: 'center', margin: 15}}/>
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
