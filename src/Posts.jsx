import React from 'react'

function Posts({posts}) {
   return (
      <>
         
            {posts.map(post => {
               return (
                  <div>
                     <div className="listItemHeader">
                        <div>User Id:{post.userId}</div>
                        <div>POST #{post.id}</div>
                        <div className="flexFiller"></div>
                        <span>Title:{post.title}</span>
                     </div>
                     <p> Body: {post.body} </p>
                     <hr />
                  </div>
               )
            })}
         
      </>
   )
}

export default Posts
