import { CountryCode, Country, TranslationLanguageCode, FlagType, Region, Subregion } from './types';
import Fuse from 'fuse.js';
type CountryMap = {
    [key in CountryCode]: Country;
};
export declare const loadDataAsync: (dataType?: FlagType) => Promise<CountryMap>;
export declare const getEmojiFlagAsync: (countryCode?: CountryCode) => Promise<string>;
export declare const getImageFlagAsync: (countryCode?: CountryCode) => Promise<string>;
export declare const getCountryNameAsync: (countryCode?: CountryCode, translation?: TranslationLanguageCode) => Promise<string>;
export declare const getCountryCallingCodeAsync: (countryCode: CountryCode) => Promise<string>;
export declare const getCountryCurrencyAsync: (countryCode: CountryCode) => Promise<string>;
export declare const getCountriesAsync: (flagType: FlagType, translation?: TranslationLanguageCode, region?: Region, subregion?: Subregion, countryCodes?: CountryCode[], excludeCountries?: CountryCode[], preferredCountries?: CountryCode[], withAlphaFilter?: boolean) => Promise<Country[]>;
export declare const search: (filter?: string, data?: Country[], options?: Fuse.FuseOptions<Country>) => Country[];
export declare const getLetters: (countries: Country[]) => string[];
export interface CountryInfo {
    countryName: string;
    currency: string;
    callingCode: string;
}
export declare const getCountryInfoAsync: ({ countryCode, translation, }: {
    countryCode: CountryCode;
    translation?: "common" | "cym" | "deu" | "fra" | "hrv" | "ita" | "jpn" | "nld" | "por" | "rus" | "spa" | "svk" | "fin" | "zho" | "isr" | undefined;
}) => Promise<CountryInfo>;
export {};
