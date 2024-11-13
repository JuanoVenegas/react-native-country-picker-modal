import React, { useState } from 'react';
import { Text, StyleSheet, PixelRatio, Switch, Button, ScrollView, } from 'react-native';
import CountryPicker, { CountryModalProvider } from './src/';
import { Row } from './src/Row';
import { DARK_THEME } from './src/CountryTheme';
const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    welcome: {
        fontSize: 17,
        textAlign: 'center',
        margin: 5,
    },
    instructions: {
        fontSize: 10,
        textAlign: 'center',
        color: '#888',
        marginBottom: 0,
    },
    data: {
        maxWidth: 250,
        padding: 10,
        marginTop: 7,
        backgroundColor: '#ddd',
        borderColor: '#888',
        borderWidth: 1 / PixelRatio.get(),
        color: '#777',
    },
});
const Option = ({ value, onValueChange, title }) => (React.createElement(Row, { fullWidth: true },
    React.createElement(Text, { style: styles.instructions }, title),
    React.createElement(Switch, { value, onValueChange })));
const App = () => {
    const [countryCode, setCountryCode] = useState('US');
    const [country, setCountry] = useState();
    const [withCountryNameButton, setWithCountryNameButton] = useState(false);
    const [withCurrencyButton, setWithCurrencyButton] = useState(false);
    const [withFlagButton, setWithFlagButton] = useState(true);
    const [withCallingCodeButton, setWithCallingCodeButton] = useState(false);
    const [withFlag, setWithFlag] = useState(true);
    const [withEmoji, setWithEmoji] = useState(true);
    const [withFilter, setWithFilter] = useState(true);
    const [withAlphaFilter, setWithAlphaFilter] = useState(false);
    const [withCallingCode, setWithCallingCode] = useState(false);
    const [withCurrency, setWithCurrency] = useState(false);
    const [withModal, setWithModal] = useState(true);
    const [visible, setVisible] = useState(false);
    const [dark, setDark] = useState(false);
    const [allowFontScaling, setFontScaling] = useState(true);
    const [disableNativeModal, setDisableNativeModal] = useState(false);
    const onSelect = (country) => {
        setCountryCode(country.cca2);
        setCountry(country);
    };
    const switchVisible = () => setVisible(!visible);
    return (React.createElement(CountryModalProvider, null,
        React.createElement(ScrollView, { contentContainerStyle: styles.container },
            React.createElement(Text, { style: styles.welcome }, "Welcome to Country Picker !"),
            React.createElement(Option, { title: 'With country name on button', value: withCountryNameButton, onValueChange: setWithCountryNameButton }),
            React.createElement(Option, { title: 'With currency on button', value: withCurrencyButton, onValueChange: setWithCurrencyButton }),
            React.createElement(Option, { title: 'With calling code on button', value: withCallingCodeButton, onValueChange: setWithCallingCodeButton }),
            React.createElement(Option, { title: 'With flag', value: withFlag, onValueChange: setWithFlag }),
            React.createElement(Option, { title: 'With font scaling', value: allowFontScaling, onValueChange: setFontScaling }),
            React.createElement(Option, { title: 'With emoji', value: withEmoji, onValueChange: setWithEmoji }),
            React.createElement(Option, { title: 'With filter', value: withFilter, onValueChange: setWithFilter }),
            React.createElement(Option, { title: 'With calling code', value: withCallingCode, onValueChange: setWithCallingCode }),
            React.createElement(Option, { title: 'With currency', value: withCurrency, onValueChange: setWithCurrency }),
            React.createElement(Option, { title: 'With alpha filter code', value: withAlphaFilter, onValueChange: setWithAlphaFilter }),
            React.createElement(Option, { title: 'Without native modal', value: disableNativeModal, onValueChange: setDisableNativeModal }),
            React.createElement(Option, { title: 'With modal', value: withModal, onValueChange: setWithModal }),
            React.createElement(Option, { title: 'With dark theme', value: dark, onValueChange: setDark }),
            React.createElement(Option, { title: 'With flag button', value: withFlagButton, onValueChange: setWithFlagButton }),
            React.createElement(CountryPicker, { theme: dark ? DARK_THEME : {}, allowFontScaling,
                countryCode,
                withFilter,
                excludeCountries: ['FR'],
                withFlag,
                withCurrencyButton,
                withCallingCodeButton,
                withCountryNameButton,
                withAlphaFilter,
                withCallingCode,
                withCurrency,
                withEmoji,
                withModal,
                withFlagButton,
                onSelect,
                disableNativeModal,
                preferredCountries: ['US', 'GB'],
                modalProps: { visible },
                onClose: () => setVisible(false),
                onOpen: () => setVisible(true) }),
            React.createElement(Text, { style: styles.instructions }, "Press on the flag to open modal"),
            React.createElement(Button, { title: 'Open modal from outside using visible props', onPress: switchVisible }),
            country !== null && (React.createElement(Text, { style: styles.data }, JSON.stringify(country, null, 0))))));
};
export default App;
//# sourceMappingURL=App.js.map