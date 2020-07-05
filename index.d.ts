declare module "emoji-flags" {
  export type CountryData = {
    code: string;
    emoji: string;
    unicode: string;
    name: string;
    title: string;
    dialCode: string;
  };

  type EmojiFlagsType = {
    data: CountryData[];
    emojis: string[];
    codes: string[];
    names: string[];
    unicodes: string[];
    countryCode(countryCode: string): CountryData;
    [countryCode: string]:
      | CountryData
      | CountryData[]
      | string[]
      | ((countryCode: string) => CountryData);
  };

  const EmojiFlags: EmojiFlagsType;
  export = EmojiFlags;
  export default EmojiFlags;
}
