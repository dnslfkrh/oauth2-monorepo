import { Injectable } from "@nestjs/common";
import { UserRepository } from "src/repository/user.repository";
import { userProps } from "src/types/props";

@Injectable()
export class UserService {
    constructor(
        private readonly userRepository: UserRepository
    ) { }

    async joinOrAlready(email: string, name: string, picture: string) {
        let user = await this.userRepository.findUserByEmail(email);

        if (!user) {
            const newUser: userProps = { email, name, picture };
            user = await this.userRepository.createUser(newUser);
        }

        console.log(user);
        
        return user;
    }
}