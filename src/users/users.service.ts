import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

    private users = [
        {
            id:1,
            name:'Pedro Requena',
            phone:'+584241772059',
        },
        {
            id:2,
            name:'Yubi Guerra',
            phone:'+5491127335870',
        },
    ]

    getUsers() {
        // Ejemplo para retornar un arreglo de usuarios
        return this.users;
    }
}
