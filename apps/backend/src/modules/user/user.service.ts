import { Injectable } from "@nestjs/common";
import { UserRepository } from "src/repository/user.repository";
import { UserProps } from "src/common/types/props";

@Injectable()
export class UserService {
    constructor(
        private readonly userRepository: UserRepository
    ) { }

    async joinOrAlready(email: string, name: string, picture: string) {
        let user = await this.userRepository.findUserByEmail(email);

        if (!user) {
            const newUser: UserProps = { email, name, picture };
            user = await this.userRepository.createUser(newUser);
        }

        console.log(user);
        
        return user;
    }
}