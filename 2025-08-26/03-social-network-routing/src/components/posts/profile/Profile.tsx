import { useEffect, useState } from 'react'
import './Profile.css'
import profileService from '../../../services/profile'
import type PostModel from '../../../models/post';
import Post from '../post/Post';

export default function Profile() {
        const [profile, setProfile]= useState<PostModel[]>([]);

    useEffect(()=>{
        // profileService.getProfile().then(profile=>{})
        (async ()=>{
            try{
                const profile= await profileService.getProfile()
                    console.log(profile);
                setProfile(profile);
            }
            catch(e){
                alert(e);
            }
            
        })()
    },[])

  function removePost(id: string){
    setProfile(profile.filter(post=> post.id!==id))
  }
    return (
        <div className='Profile'>
          
                            {profile.map(post=><Post key={post.id} post={post} removePost={removePost} isEditAllowed={true}/>)}

            </div>
        
    )
}