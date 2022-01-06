import React from 'react'
import Content from '../content/Content'
import './counter.scss'
import items from '../../data'
const Counter = () => {
    return (
        <div className="counter">
            <div className="wrapper">
                {items.map((item)=>{
                    return (<Content 
                        key={item.id}
                        icon={item.icon}
                        span={item.span}
                        info={item.info}
                        duration={item.duration}
                    />);
                })}
            
            {/* <Content />
            <Content />
            <Content /> */}
            </div>
        </div>
    )
}

export default Counter
