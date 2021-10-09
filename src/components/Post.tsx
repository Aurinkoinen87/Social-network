import s from './Post.module.css'
import avatar from './../pics/smile.jpg'
import {MessageType} from './Content'
import {FavoriteBorder} from '@mui/icons-material';
import {Favorite} from '@mui/icons-material';
import { red } from '@mui/material/colors';



type PostType = {
    post: MessageType
    addLike: (id:string) => void
}

export function Post(props: PostType) {

let{id, message, likes} = props.post

const onClickHandler = () => props.addLike(id)
    return(
        <div className={s.post_block}>
            <img src={avatar} alt="avatar" />
            <div>{message}</div>
            <div onClick={onClickHandler}>{likes > 0? <Favorite sx={{ color: red[500] }}/> : <FavoriteBorder />}</div>
            <span>{likes}</span>
        </div>
    )
}