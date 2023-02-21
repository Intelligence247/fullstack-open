import React from 'react'
import Part from './Part'

const Content = ({content1}) => {
  return (
    <div>
{/* <p>{props.content1}</p>
<p>{props.content2}</p>
<p>{props.content3}</p>   */}

<Part content={content1}/>
{/* <Part content={content2}/> */}
{/* <Part content={content3}/> */}
</div>
)
}

export default Content