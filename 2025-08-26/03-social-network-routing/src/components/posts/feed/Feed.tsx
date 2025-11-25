import { useEffect, useState } from 'react';
import './Feed.css'
import type PostModel from '../../../models/post';
import FeedService from '../../../services/feed';
import Post from '../post/Post';

export default function Feed() {
         const [feed, setFeed]= useState<PostModel[]>([]);

    useEffect(()=>{
        // profileService.getProfile().then(profile=>{})
        (async ()=>{
            try{
                const feed= await FeedService.getFeed()
                setFeed(feed);
            }
            catch(e){
                alert(e);
            }
            
        })()
    },[])

    return (
        <div className='Feed'>
            
                 {feed.map(post=><Post 
                     key={post.id}
                     post={post}
                     isEditAllowed={false}
                      removePost={function (id: string): void {} }
                        />)}
          
        </div>
    )
}