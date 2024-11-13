import * as React from 'react';
import { SafeAreaView, StyleSheet, Platform } from 'react-native';
import { AnimatedModal } from './AnimatedModal';
import { Modal } from './Modal';
import { useTheme } from './CountryTheme';
import { CountryModalContext } from './CountryModalProvider';
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
export const CountryModal = ({ children, withModal = true, disableNativeModal = false, animationType = 'slide', animated = true, ...props }) => {
    const { backgroundColor } = useTheme();
    const { teleport } = React.useContext(CountryModalContext);
    const content = (React.createElement(SafeAreaView, { style: [styles.container, { backgroundColor }] }, children));
    React.useEffect(() => {
        if (disableNativeModal) {
            teleport(React.createElement(AnimatedModal, { ...props }, content));
        }
    }, [disableNativeModal]);
    if (withModal) {
        if (Platform.OS === 'web') {
            return React.createElement(Modal, { ...props }, content);
        }
        if (disableNativeModal) {
            return null;
        }
        return React.createElement(Modal, { ...props }, content);
    }
    return content;
};
//# sourceMappingURL=CountryModal.js.map