import { PostFormData, User } from './types';

export const fetchUsers = async (): Promise<User[]> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = (await response.json()) as User[];
    return data;
};

export const postFormData = (newData: PostFormData) => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newData),
    }).then((res) => res.json());
};
