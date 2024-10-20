type AddressType = {
    street: string; // ПОДПРАВЛЯЕМ any
    city: string; // ПОДПРАВЛЯЕМ any
};

type UserType = {
    users: Array<any>  // ПРИДЕТСЯ САМОМУ)
};

type UserListPropsType = {
    address: any;
    users: UserType[]; // ПО МОЕМУ ЧЕГО-ТО НЕ ХВАТАЕТ...
    id: number,
    age: number,
    name: string,
    
    

};

export const UserList = (props: any) => {

    return (
        <div id={'hw01-users'}>
            <h2>{props.UserType}</h2>

            <ul>
                {props.users.map((user: UserListPropsType, id: number, ) => ( // ВСЕ ТОВАРЫ В СТРАНУ ПРИЕЗЖАЮТ В КОНТЕЙНЕРАХ, А В РЕАКТЕ...
                    <li key={user.id} id={`hw01-user-${user.id}`}>
                        <strong>{user.name}</strong> (Age: {user.age})<strong> Address:</strong>
                        {user.address.street}, {user.address.city}
                    </li>
                ))}
            </ul>
        </div>
    );
};
