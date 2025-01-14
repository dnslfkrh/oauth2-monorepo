import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/entity/user.entity";
import { userProps } from "src/types/props";
import { Repository } from "typeorm";

export class UserRepository {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ) { }

    async findUserByEmail(email: string): Promise<User | null> {
        return await this.userRepository.findOne({ where: { email } });
    }

    async createUser(user: userProps): Promise<User> {
        return await this.userRepository.save(user);
    }
}