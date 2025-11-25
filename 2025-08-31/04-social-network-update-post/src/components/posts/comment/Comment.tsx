import type PostComment from '../../../models/post-comment'
import './Comment.css'


interface CommentProps {
    comment: PostComment
}

export default function Comment(props: CommentProps) {
    const { body, createdAt, user:{name} } = props.comment;
    return (
        <div className='Comment'>
            <div>{body}</div>
            <div>{createdAt}</div>
            <div>{name}</div>
        </div>
    )
}