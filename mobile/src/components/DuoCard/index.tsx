import { Text, TouchableOpacity, View } from "react-native";
import { THEME } from "../../theme";
import { DuoInfo } from "../DuoInfo/DuoInfo";

import { GameController } from 'phosphor-react-native';

import { styles } from './styles';

export interface DuoCardProps {
    id: string;
    hourEnd: string;
    hourStart: string;
    name: string;
    useVoiceChannel: boolean;
    weekDays: string[];
    yearsPlayng: number;
}

interface Props {
    data: DuoCardProps
    onConnect: ()=> void
}

export const DuoCard = ({ data, onConnect }: Props) => {
    return (
        <View style={styles.container}>

            <DuoInfo
                label="Nome"
                value={data.name}
            />
            <DuoInfo
                label="Tempo de jogo"
                value={`${data.yearsPlayng} anos`}
            />
            <DuoInfo
                label="Disponibilidade"
                value={`${data.weekDays.length} dias \u2022 ${data.hourStart} - ${data.hourEnd}`}
            />
            <DuoInfo
                label="Chamada de áudio"
                value={data.useVoiceChannel ? 'Sim' : "Não"}
                colorValue={data.useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT}
            />

            <TouchableOpacity 
                style={styles.button}
                onPress={onConnect}
            >
                <GameController 
                    color={THEME.COLORS.TEXT}
                    size={20}
                />
                
                <Text style={styles.buttonTitle}>
                    Conectar
                </Text>
            </TouchableOpacity>
            
        </View>
    )
}
