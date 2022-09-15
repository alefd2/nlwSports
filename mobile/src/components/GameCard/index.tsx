import { TouchableOpacity, ImageBackground, ImageSourcePropType, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {styles} from './styles';
import { THEME } from "../../theme";

export interface GameCardProps {
    id: string;
    name: string;
    ads: string;
    cover: ImageSourcePropType
}

interface Props {
    data: GameCardProps
}

export const GameCard = ({data}:Props) => {
    return (
        <TouchableOpacity style={styles.container}>
            <ImageBackground 
                style={styles.cover}
                source={data.cover}
            >
                <LinearGradient 
                    colors={THEME.COLORS.FOOTER}
                    style={styles.footer}
                    >

                    <Text style={styles.name}>
                        {data.name}
                    </Text>

                    <Text style={styles.ads} >
                        {data.ads} anúncios
                    </Text>

                </LinearGradient>
            </ImageBackground>
        </TouchableOpacity>
    )
}
