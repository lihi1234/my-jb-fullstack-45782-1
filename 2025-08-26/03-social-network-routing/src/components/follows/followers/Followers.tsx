import './Followers.css'
import { useEffect, useState } from 'react';
import followersService from '../../../services/followers';
import type UserModel from '../../../models/user';
import User from '../follow/follow';

export default function Followers() {
 
        
            const [followers, setFollowers]= useState< UserModel[]>([]);

    useEffect(()=>{
        (async ()=>{
            try{
                const followers= await followersService.getFollowers()
                console.log(followers)
                setFollowers(followers);
            }
            catch(e){
                alert(e);
            }
            
        })()
    },[])

    return (
        <div className='Followers'>
            <ul>
                          {followers.map(user=><User key={user.id} user={user}/>)}

            </ul>
        </div>)}
    
        