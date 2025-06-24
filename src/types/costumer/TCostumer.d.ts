import type { TUserName, TPassword, TName, TLastName, TEmail, TTelefono,TTokenConfirmacion,TSessionExpiration } from "../users/TUsers";

type TIdCostumer = number;
type TTypeDocument = 'Cedula'|'Cedula Extranjera'|'Pasaporte'|'RIF'|'DNI'|'CUIL'|'RUT';
type TNumberDocument = number;
type TNationality = 'Venezuela'|'Colombia'|'Argentina'|'Peru'|'Chile' |'Bolivia' |'Uruguay' |'Paraguay' |'Ecuador'|'Guatemala'|'Honduras'|'Nicaragua'|'Panamá'|'Costa Rica'|'México'|'España'|'Portugal'|'Italia'|'Francia'|'Alemania'|'Reino Unido'|'Paises Bajos'|'Estados Unidos'|'Cuba'|'Brasil'|'Republica Dominicana';
type TAddress = string;
type TAge = number;


export type {
    TIdCostumer,
    TUserName,
    TPassword,
    TName,
    TLastName,
    TTypeDocument,
    TNumberDocument,
    TNationality,
    TAge,
    TAddress,
    TEmail,
    TTelefono,
    TTokenConfirmacion,
    TSessionExpiration
}