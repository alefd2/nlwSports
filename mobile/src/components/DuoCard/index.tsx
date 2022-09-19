import { View } from "react-native";
import { DuoInfo } from "../DuoInfo/DuoInfo";

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
}

export const DuoCard = ({ data }: Props) => {
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
                label="Nome"
                value="alef"
            />
        </View>
    )
}
