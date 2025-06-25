import * as crypto from 'crypto'
import type { TKey } from 'src/types/functions/TKey'

export default function keyJWT(): TKey {
    return crypto.randomBytes(64).toString('hex')
}