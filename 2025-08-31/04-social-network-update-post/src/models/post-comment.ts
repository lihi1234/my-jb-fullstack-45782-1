import type CommentDraft from "./comment-draft";
import type User from "./user";

export default interface PostComment extends CommentDraft {
    id: string,
    postId: string,
    userId: string,
    createdAt: string,
    user: User

}