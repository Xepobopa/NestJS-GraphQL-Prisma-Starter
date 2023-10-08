import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {GraphQLISODateTime, GraphQLModule} from "@nestjs/graphql";
import {ApolloDriver, ApolloDriverConfig} from "@nestjs/apollo";
import {ConfigModule} from "@nestjs/config";
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { UserModule } from './user/user.module';

@Module({
    imports: [
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            playground: false,
            resolvers: { DateTime: GraphQLISODateTime },
            plugins: [ApolloServerPluginLandingPageLocalDefault()],
            typePaths: ['./**/*.graphql'],
            context: ({ req, res }) => ({ req, res })
        }),
        ConfigModule.forRoot(),
        UserModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
