import React, { memo } from 'react';
import { Emoji } from './Emoji';
import { useContext } from './CountryContext';
import { useAsync } from 'react-async-hook';
import { Image, StyleSheet, PixelRatio, Text, View, ActivityIndicator, } from 'react-native';
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 30,
        marginRight: 10,
    },
    emojiFlag: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1 / PixelRatio.get(),
        borderColor: 'transparent',
        backgroundColor: 'transparent',
    },
    imageFlag: {
        resizeMode: 'contain',
        width: 25,
        height: 19,
        borderWidth: 1 / PixelRatio.get(),
        opacity: 0.8,
    },
});
const ImageFlag = memo(({ countryCode, flagSize }) => {
    const { getImageFlagAsync } = useContext();
    const asyncResult = useAsync(getImageFlagAsync, [countryCode]);
    if (asyncResult.loading) {
        return React.createElement(ActivityIndicator, { size: 'small' });
    }
    return (React.createElement(Image, { resizeMode: 'contain', style: [
            styles.imageFlag,
            { borderColor: 'transparent', height: flagSize },
        ], source: { uri: asyncResult.result } }));
});
const EmojiFlag = memo(({ countryCode, flagSize }) => {
    const { getEmojiFlagAsync } = useContext();
    const asyncResult = useAsync(getEmojiFlagAsync, [countryCode]);
    if (asyncResult.loading) {
        return React.createElement(ActivityIndicator, { size: 'small' });
    }
    return (React.createElement(Text, { style: [styles.emojiFlag, { fontSize: flagSize }], allowFontScaling: false },
        React.createElement(Emoji, { name: asyncResult.result })));
});
export const Flag = ({ countryCode, withEmoji = true, withFlagButton = true, flagSize, }) => withFlagButton ? (React.createElement(View, { style: styles.container }, withEmoji ? (React.createElement(EmojiFlag, { countryCode, flagSize })) : (React.createElement(ImageFlag, { countryCode, flagSize })))) : null;
//# sourceMappingURL=Flag.js.map