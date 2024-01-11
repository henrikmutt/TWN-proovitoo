import { useState, useEffect } from "react";
import '../App.css';


function article() {
    const [data, setData] = useState([]);
    
    
    useEffect (() => {
        fetch('https://midaiganes.irw.ee/api/list/972d2b8a')
            .then((response) => response.json())
            .then((data) => { 
                setData(data);
                console.log(data)}   
            );       
    }, []);
   
    return (
        <div className='article-content'>
            <h1 className='title'>{data.title}</h1>
            <p className='intro'>{data.intro}</p>
            <img className='img1' src='https://midaiganes.irw.ee/api/imgs/large/a3dac073.jpg' />
            <p className='body'>{data.body}</p>
            {data.tags && data.tags.map((tag) => {
                return <button className='btn'>{tag}</button>
            })}
            
        </div>
    );
}

export default article