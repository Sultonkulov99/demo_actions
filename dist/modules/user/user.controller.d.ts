import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getUser(name: string): Promise<{
        id: string;
        name: string;
        email: string;
        password: string;
        age: number;
        isActive: boolean;
        createdAt: Date;
    } | null>;
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
