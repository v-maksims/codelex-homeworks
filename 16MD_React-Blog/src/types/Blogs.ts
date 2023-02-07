import { TComments } from './Comments';


export type TBlogs = {
    id?: number,
    title: string,
    content: string,
    image: string,
    comments:TComments[]
}