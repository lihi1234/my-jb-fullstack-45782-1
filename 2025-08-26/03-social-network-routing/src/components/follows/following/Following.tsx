import { useEffect, useState } from 'react';
import './Following.css'
import type UserModel from '../../../models/user';
import followingService from '../../../services/following';
import User from '../follow/follow';

export default function Following() {
    
        
            const [following, setFollowing]= useState< UserModel[]>([]);

    useEffect(()=>{
        (async ()=>{
            try{
                const following= await followingService.getFollowing()
                console.log(following)
                setFollowing(following);
            }
            catch(e){
                alert(e);
            }
            
        })()
    },[])

    return (
        <div className='Following'>
            <ul>
                             {following.map(user=><User key={user.id} user={user}/>)}
                            

            </ul>
        </div>)
}