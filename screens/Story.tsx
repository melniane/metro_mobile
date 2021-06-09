import * as React from 'react';
import { Image, ImageBackground, StyleSheet, ScrollView} from 'react-native';
import {Text, View} from "../components/Themed";

export default function Story() {

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/images/background.png')} style={{width: '100%', height: '100%', position: 'absolute'}}>
                <View style={{marginTop: 45, backgroundColor: 'transparent'}}>
                    <View style={styles.stepOne}>
                        <View style={styles.stepHeader}>
                            <Image source={require('../assets/images/ganza_logo.png')} style={styles.logo}/>
                            <Text style={styles.logoText}>ІСТОРІЯ</Text>
                        </View>
                        <ScrollView style={{marginBottom: 100}}>
                            <Text style={{fontWeight: '700', fontSize: 20}}>2020 рр.
                                Спочатку Ганза не була єдиною. Станції на Кільцевій лінії утворювали невеликі союзи, т.зв. «Дугові» держави. Велися довгі переговори з іншими станціями Кільця, після проведення яких була утворена Південна Дуга. Однак було те, що заважало возз'єднання цих самих дуг - станція Комсомольська, захоплена комуністами з Сокольницької лінії. Через те, що червоні вирішили «підпалити інші станції революційним вогнем», Ганза утворила антикомуністичну коаліцію, до якої увійшли Поліс і підтримуюча його Арбатська Конфедерація. Були також відомі випадки протистоянь анархістів і троцькістів. Війна була досить виснажливою для всіх сторін, але найбільше - для Кільцевій, яка почала бідніти, тому як через її території не проходили каравани і ніхто з ними не торгував. В результаті зібралися представники Ганзи, Арбатській конфедерації і Червоної Лінії, і уклали мирний договір, в якому розділили ті станції, за які вони так довго воювали. Найбільше вигоди від договору отримала відповідно Ганза, кільце якої з'єднує всі інші лінії. 2033 р.
                                Ганза знаходиться все також в багатому і впливовому положенні. Через її станції діє регулярне сполучення, ходять вантажні і пасажирські каравани. У листопаді ганзейці збиралися анексувати станції за Проспектом Миру. У тому ж місяці почалася евакуація жителів станцій через почастішання на ВДНГ нападів Чорних. Було також прийнято рішення про підрив тунелів до Ризької, але все вирішилося благополучно через знищення групою Мельника вулика мутантів в Ботанічному саду.</Text>
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
