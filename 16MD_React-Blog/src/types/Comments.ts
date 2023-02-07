type TUser = {
    firstName: string,
    lastName: string
}

export type TComments = {
    id: number,
    user:TUser,
    comment: string,
    userImage: string
}