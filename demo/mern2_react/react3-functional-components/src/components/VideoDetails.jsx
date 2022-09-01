// import React
import React, {useState} from 'react'
// State 
// step 1: import useState
// step 2: initialize the state

// construct the function
const VideoDetails = (props) =>{
    const [ likes, setLikes] = useState(100)
    // likes: state variable  | setLikes : function to reset likes state

    const {title} = props
    return (
        <fieldset>
            <legend> VideoDetails.jsx (Functional)</legend>
            <h1>{title} </h1>
            <p> {props.description}</p> 
                <p> Rating:  {props.rating} </p>   
                <p> Hashtags : {props.hashtags} </p>
                <ul>
                    {
                        props.hashtags.map((eachTag, i)=>{
                            return (
                                <li key={i}> {eachTag}</li>
                            )
                        })
                    }             
                </ul>

                <h3> Likes : {likes}</h3>
                <button onClick={()=>setLikes(likes +1)}> Like!</button>


        </fieldset>
    )
}

// export the function
export default VideoDetails;
