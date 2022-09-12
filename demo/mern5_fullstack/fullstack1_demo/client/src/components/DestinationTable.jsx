import React from 'react'


const DestinationTable = (props) => {


    return (
        <table>
            <thead>
                <tr>
                    <th> Location</th>
                    <th> Rating</th>
                    <th> Season</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.destinations.map((eachDest, i)=>{
                        return(
                            <tr key={i}>
                                <td> {eachDest.location}</td>
                                <td> {eachDest.rating}</td>
                                <td> {eachDest.season}</td>
                            </tr>
                        )
                    })
                }
            </tbody>

        </table>
    )
}

export default DestinationTable