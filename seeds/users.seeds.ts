import Roles from "../src/enums/roles.enum";
import User from "../src/entity/Users";
import Encrypt from "../services/hash";

const usersData = [
    {
        firstName: 'test1',
        lastName: 'test1',
        login: 'test1',
        password: 'test1',
        role: Roles.user,
        phoneNumber: '0661234567'
    },
    {
        firstName: 'test2',
        lastName: 'test2',
        login: 'test2',
        password: 'test2',
        role: Roles.user,
        phoneNumber: '0661234567'
    },
    {
        firstName: 'test1',
        lastName: 'test1',
        login: 'test1',
        password: 'test1',
        role: Roles.user,
        phoneNumber: '0661234567'
    }
]

export default async function getUsers ():Promise<User[]> {
    const mapped = []
    for (let i =0; i<usersData.length; i++) {
        const userData = usersData[i]
        const user = new User();
        user.phoneNumber = userData.phoneNumber
        user.role = userData.role
        const password = await Encrypt.cryptPassword(userData.password)
        user.password = password
        user.login = userData.login
        user.lastName = userData.lastName
        user.firstName = userData.firstName
        mapped.push(user)
    }

    return mapped;
}

export {User as entity};