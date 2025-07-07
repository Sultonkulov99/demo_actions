import { PrismaService } from 'src/core/database/prisma.service';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    getUser(name: string): Promise<{
        id: string;
        name: string;
        email: string;
        password: string;
        age: number;
        isActive: boolean;
        createdAt: Date;
    } | null>;
    getAllUsers(): Promise<{
        id: string;
        name: string;
        isActive: boolean;
        posts: {
            id: string;
            title: string;
            body: string;
        }[];
    }[]>;
    createUser(payload: any): Promise<{
        success: boolean;
        message: string;
        data: {
            id: string;
            name: string;
            email: string;
            password: string;
            age: number;
            isActive: boolean;
            createdAt: Date;
        };
    }>;
    updateUser(id: string, payload: any): Promise<{
        success: boolean;
        message: string;
        data: {
            id: string;
            name: string;
            email: string;
            password: string;
            age: number;
            isActive: boolean;
            createdAt: Date;
        };
    }>;
}
