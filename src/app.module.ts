import { Module } from '@nestjs/common';
import { PrismaModule } from './core/database/prisma.module';
import { UserModule } from './modules/user/user.module';
import { PostsModule } from './modules/posts/posts.module';

@Module({
  imports: [PrismaModule, UserModule, PostsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
