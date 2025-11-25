import type PostComment from '../../../models/post-comment'
import './PostComments.css'
import Comment from '../comment/Comment'
import NewComment from '../newComment/NewComment';
import { useState } from 'react';


interface PostCommentsProps{
    comments: PostComment[];
}

export default function PostComments(props: PostCommentsProps){
    const {comments}= props;
     const [existedComments, setExistedComments] = useState<PostComment[]>([])

     function renderNewComment(comment: PostComment): void {
            setExistedComments([comment, ...existedComments])
        }
    

    return(
        <div className='PostComments'>
            <div>total comments: {comments.length}</div>
            <NewComment renderNewComment={renderNewComment}/>
             {comments.map(comment=> <Comment key={comment.id} comment={comment}/>)}

        </div>
    )

}