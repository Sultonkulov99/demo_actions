import { PrismaService } from 'src/core/database/prisma.service';
export declare class PostsService {
    private prisma;
    constructor(prisma: PrismaService);
    createPost(payload: any): Promise<{
        success: boolean;
        message: string;
        data: {
            id: string;
            createdAt: Date;
            title: string;
            body: string;
            userId: string;
        };
    }>;
}
