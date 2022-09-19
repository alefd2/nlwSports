
import { ImageBackground} from 'react-native';
import {styles } from './styles';

import backgroundImg from '../../assets/background-galaxy.png';

interface Props {
    children: React.ReactNode;
}

export const Background = ({ children }: Props) => {
    return (
        <ImageBackground 
            source={backgroundImg}
            defaultSource={backgroundImg}    
            style={styles.container}
        >
                
            {children}
        </ImageBackground>
     )
}