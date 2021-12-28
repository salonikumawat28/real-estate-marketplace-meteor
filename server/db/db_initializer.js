import { user1 } from "../constant";
import { createUser } from './users';

const createTestUser = () => {
    createUser(user1.firstName, user1.lastName, user1.email, user1.password);
}

export const prePopulate = () => {
    createTestUser();
}