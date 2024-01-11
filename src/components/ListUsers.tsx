import { useQuery } from '@tanstack/react-query';

import { fetchUsers } from '@homework-task/api';
import { User } from '@homework-task/types';

const ListUsers = () => {
    const users = useQuery<User[], Error>({
        queryKey: ['users'],
        queryFn: fetchUsers,
    });
    if (users.isLoading) {
        return <div>Loading...</div>;
    }

    if (users.isError) {
        return <div>{users.error.message}</div>;
    }

    return (
        <>
            <h1 className="text-3xl font-bold text-red text-center mb-3">
                Users
            </h1>
            <div className="grid grid-cols-3 mx-10">
                {users.data?.map((user) => (
                    <div
                        key={user.id}
                        className="bg-white shadow-md rounded-lg p-4 mb-4 w-8/12"
                    >
                        <div className="font-bold text-lg">{user.name}</div>
                        <div className="text-gray-500">{user.username}</div>
                        <div className="text-gray-500">{user.email}</div>
                        <div className="text-gray-500">{user.phone}</div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default ListUsers;
