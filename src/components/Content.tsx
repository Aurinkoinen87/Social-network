import s from './Content.module.css'
import {User} from './User'
import {MyPosts} from './MyPosts'
import {Post} from './Post'
import {v1} from 'uuid'
import {useState} from 'react'

export type MessageType = {
    id: string
    message: string
    likes: number
}

export function Content() {


    let[messages, setMessage] = useState<MessageType[]>([{id: v1(), message: 'Hi Max!', likes: 5}])

    const updatePost = (message: string) => setMessage([...messages, {id: v1(), message, likes: 0}])

    const addLike = (id: string) => {let likedPostArr = messages.map(p => p.id === id? {...p, likes: p.likes + 1} : p)
                             setMessage(likedPostArr)}

    const post = messages.map(m => <Post key={m.id} post={m} addLike={addLike}/>)

    return(
        <main>
        <div className={s.content}>
            <User />
            <MyPosts updatePost={updatePost} />
            {post}
        </div>   
        </main>

    )
}