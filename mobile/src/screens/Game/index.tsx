import { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context'
import { Background } from '../../components/Background';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons'

import logoImg from '../../assets/logo-nlw-esports.png';
import { THEME } from '../../theme';
import { styles } from './styles';

import { GameParams } from '../../@types/navigation';
import { FlatList, Image, TouchableOpacity, View } from 'react-native';
import { Heading } from '../../components/Heading';
import { DuoCard , DuoCardProps} from '../../components/DuoCard';


export const Game = () => {

    const [duos, setDuos] = useState<DuoCardProps[]>([])

    const navigation = useNavigation();
    const route = useRoute();
    const game = route.params as GameParams;

    const handleGoBack = () => {
        navigation.goBack() 
    }

    useEffect(() => {
        fetch(`http://192.168.0.20:3005/games/${game.id}/ads`)
            .then(response => response.json())
            .then(data => setDuos(data))
    }, [])

    
    return (
        <Background>
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={handleGoBack}>
                        <Entypo 
                            name="chevron-thin-left"
                            color={THEME.COLORS.CAPTION_300}
                        />
                    </TouchableOpacity>

                    <Image
                        source={logoImg}
                        style={styles.logo}
                    />
                    <View style={styles.right}/>
                </View>

                <Image
                resizeMode="cover"
                    source={{uri: game.bannerUrl}}
                    style={styles.cover}
                />

                <Heading 
                    title={game.title}
                    subtitle="Conecte-se e começe e jogar!"
                />

                <FlatList 
                    data={duos}
                    keyExtractor={item => item.id}
                    renderItem={({item}) =>  (
                        <DuoCard data={item}/>
                    )}
                />
                
            </SafeAreaView>
        </Background>
    )
}