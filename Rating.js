import React from 'react'
import './App.css'

function Rating({counter}){
    let array = Object.entries(counter)
    
    return (
        <>
            <table>
                {
                    array.map((el, index) => {
                        return  (<tr key={index}> 
                                    <td >
                                        {el[0]} 
                                    </td>
                                    <td>
                                        {el[1]}
                                    </td>
                                </tr>)
                    })
                }  
            </table>
        </>
    )
}
export default Rating
