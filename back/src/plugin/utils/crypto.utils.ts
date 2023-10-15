import crypto from 'node:crypto';

export const x = crypto;

/** Generate random numeric code */
export function getNumCode(length: number): number {
    const start = Number('1' + '0'.repeat(length - 1));
    const end = Number('9'.repeat(length));
    const code = crypto.randomInt(start, end);
    return code;
}

/** Generate random hex code */
export function getHexCode(length: number): string {
    const buffer = crypto.randomBytes(length);
    const code = buffer.toString('hex');
    return code;
}

/** Generate hex hash */
export function getHash(str: string): string {
    const hash = crypto.createHash('sha256');
    hash.update(str);
    const strHash = hash.digest('hex');
    return strHash;
}
