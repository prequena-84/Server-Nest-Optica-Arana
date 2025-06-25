import type { TEmail,TPassword } from "src/types/users/users.type"

interface IAuthUser {
    email:TEmail,
    password:TPassword,
}

export type {
    IAuthUser,
}