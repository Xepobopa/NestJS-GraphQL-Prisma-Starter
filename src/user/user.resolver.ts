import {Query, Resolver} from '@nestjs/graphql';

@Resolver('User')
export class UserResolver {
    constructor() {
    }

    @Query(() => String)
    sayHello(): string {
        return 'Hello World!';
    }
}
