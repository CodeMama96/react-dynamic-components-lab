//your code here
import React, { Component } from 'react'

class Comment extends React.Component {

    render(){
        const commentsArray = [

        ]
        return (

        <div id="comment" className="comment" >
        {this.props.commentText}
        </div>
        )

    }
   
}




export default Comment 