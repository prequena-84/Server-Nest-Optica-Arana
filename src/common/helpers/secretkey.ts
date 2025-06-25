import * as crypto from 'crypto'
import type { TKey } from 'src/types/helpers/key.type'

export default function keyJWT(): TKey {
    return crypto.randomBytes(64).toString('hex')
}