import { useForm } from 'react-hook-form';
import type PostComment from '../../../models/post-comment'
import './NewComment.css'
import type CommentDraft from '../../../models/comment-draft';
import profileService from '../../../services/profile';

interface NewCommentProps {
    renderNewComment(comment: PostComment): void
}

export default function NewComment(props: NewCommentProps) {
    const { renderNewComment } = props;

    const { register, handleSubmit, reset, formState } = useForm<CommentDraft>()

    async function submit(draft: CommentDraft) {
        try {
            const comment = await profileService.newComment(draft)
            reset()
            renderNewComment(comment)
        } catch (e) {
            alert(e)
        }
    }

    return (
        <div className='NewComment'>
            <form onSubmit={handleSubmit(submit)}>
                <textarea placeholder='add a comment' {...register('body', {
                    required: {
                        value: true,
                        message: 'Post content is required'
                    },
                    minLength: {
                        value: 20,
                        message: 'Post content must be at least 20 characters long'
                    }
                })}></textarea>
                <div className='formError'>{formState.errors.body?.message}</div>

                <button >add</button>
            </form>
        </div>
    )
}