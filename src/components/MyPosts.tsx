import {useState, ChangeEvent, KeyboardEvent} from 'react'
import s from './MyPosts.module.css'
import {Button} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';



const theme = createTheme({
    palette: {
      secondary: {
        // This is green.A700 as hex.
        main: '#11cb5f',
      },
    },
  });

type MyPostsType = {
    updatePost: (message:string)=> void
}


export function MyPosts(props: MyPostsType) {

    let[text, setText] = useState('')
    let[error, setError] = useState(false)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {setText(e.currentTarget.value);setError(false)}

    const onClickHandler = () => {if(text !== '' && text.trim() !== ''){props.updatePost(text);setText('')}else{setError(true)}}

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {if(e.key === 'Enter'){onClickHandler()}}


    return (
        <div>
            <TextField value={text} onChange={onChangeHandler} onKeyPress={onEnter} onFocus={()=>setError(false)} className={error? s.error : ''} tabIndex={0} id="standard-basic" error={error} helperText={error? "Enter your text" : ''} variant="standard"/>
            <ThemeProvider theme={theme}>
<Button color='secondary' size="large" onClick={onClickHandler}>Post</Button>
</ThemeProvider>

        </div>
    )
}