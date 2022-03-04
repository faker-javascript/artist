interface Options {
    locale?: string;
}
type Items = Record<string, string>;
declare class Artist {
    _artistItems: Items;
    _defaultLocale: string;
    _options?: Options;
    name(): string;
    _selectRandom(items: Items): string;
}
export default function artist(options?: Options): Artist;
