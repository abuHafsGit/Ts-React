
type user1 = {
    users: {
        name: string;
        age: number;
        address: string;
    }[]
}

const User = ({ users }: user1) => {
    console.log(users)
    return (
        <div>
            {users?.map((user) => (
                <p>{user?.name}</p>
            ))}
        </div>
    )
}

export default User
