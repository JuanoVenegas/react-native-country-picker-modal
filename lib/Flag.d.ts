import React from 'react';
import { CountryCode } from './types';
interface FlagType {
    countryCode: CountryCode;
    withEmoji?: boolean;
    withFlagButton?: boolean;
    flagSize: number;
}
export declare const Flag: ({ countryCode, withEmoji, withFlagButton, flagSize, }: FlagType) => React.JSX.Element | null;
export {};
