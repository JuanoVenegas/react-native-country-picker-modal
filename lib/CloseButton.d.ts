import React from 'react';
import { ImageSourcePropType, ImageStyle, StyleProp, ViewStyle } from 'react-native';
interface CloseButtonProps {
    style?: StyleProp<ViewStyle>;
    imageStyle?: StyleProp<ImageStyle>;
    image?: ImageSourcePropType;
    onPress?(): void;
}
declare const _default: React.FC<CloseButtonProps>;
export default _default;
