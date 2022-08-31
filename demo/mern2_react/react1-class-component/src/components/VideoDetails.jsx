// import React
import React, {Component} from 'react'

// constructing the class
class VideoDetails extends Component{
    render(){
        const {title} = this.props
        return(
            <fieldset>
                <legend> VideoDetails.jsx</legend> 
                <h2> {title}</h2>  
                <p> {this.props.description}</p> 
                <p> Rating:  {this.props.rating} </p>   
                <p> Hashtags : {this.props.hashtags} </p>
                <ul>
                    {
                        this.props.hashtags.map((eachTag, i)=>{
                            return (
                                <li key={i}> {eachTag}</li>
                            )
                        })
                    }             
                </ul>


            </fieldset>
        )
    }
}

// export the class
export default VideoDetails;