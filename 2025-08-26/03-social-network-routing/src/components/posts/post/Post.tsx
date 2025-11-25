import type PostModel from '../../../models/post'
import profileService from '../../../services/profile'
import './Post.css'

interface PostProps {
    post: PostModel,
    isEditAllowed: boolean,
    removePost(id: string): void
}
export default function Post(props: PostProps) {
    const { id, title, user: { name }, createdAt, comments, body, imageUrl } = props.post
    const { removePost } = props
    const {isEditAllowed}= props
    async function removeMe() {

        try {
            if (confirm('are you sure?')) {
                await profileService.remove(id)
                removePost(id);
            }
        } catch (e) {
            alert(e)
        }

    }
    return (
        <div className='Post'>
            <div><h3>{title}</h3></div>
            <div>{(new Date(createdAt)).toLocaleDateString()}</div>
            <div>{body}</div>
            {imageUrl&& <div><img src={imageUrl}/></div>}
                {isEditAllowed &&<button  onClick={removeMe}>delete</button>}
               
           
        </div>
    )
}