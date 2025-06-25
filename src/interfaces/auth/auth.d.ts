import type { TEmail,TPassword } from "src/types/users/TUsers"

interface IAuthUser {
    email:TEmail,
    password:TPassword,
}

export type {
    IAuthUser,
}