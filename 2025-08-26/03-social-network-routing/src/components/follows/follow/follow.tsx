import type UserModel from '../../../models/user'
import './follow.css'


interface FollowProps {
    user: UserModel

}
export default function User(props: FollowProps) {
    const { name }= props.user
    return (
        <div className='User'>
            <li > {name} </li>
        </div>
    )
}