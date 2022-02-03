import * as bcrypt from '@node-rs/bcrypt';

export const Encrypt = {

    cryptPassword: async (password: string):Promise<string> =>
        bcrypt.hash(password, 10),

    comparePassword: (password: string, hashPassword: string) =>
        bcrypt.verify(password, hashPassword)

}
export default Encrypt

