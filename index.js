import path from 'node:path';
import fs from 'node:fs';
import {loadJsonFileSync} from 'load-json-file';

class Artist {
    _artistItems = {};
    _defaultLocale = 'en_US';
    _options = {};

    constructor(options) {
        this._options = options || {};
        const artistFilePath = `./locales/${this._options.locale || this._defaultLocale}/artist.json`;
        this._artistItems = fs.existsSync(path.resolve(artistFilePath)) ? loadJsonFileSync(artistFilePath) : loadJsonFileSync(path.resolve('node_modules/@fakerjs/artist/', artistFilePath));
    }

    _selectRandom(items) {
        return items[Math.floor(Math.random() * items.length)];
    }

    name() {
        return this._selectRandom(this._artistItems);
    }
}

export default function artist(options) {
    return new Artist(options);
}
