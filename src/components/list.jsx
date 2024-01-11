import React from 'react';
import { useState, useEffect } from 'react';
import Next from '../assets/next.svg';
import Previous from '../assets/previous.svg';
import contactPage from './contactPage';
import '../App.css'


function removeHTMLTags(content) {
    return content.replace(/<[^>]*>/g, '');
}

function list() {
    const [data, setData] = useState([]);
    const [show, setShow] = useState(-1);
    const [page, setPage] = useState(0);

    useEffect(() => {
        fetch('https://midaiganes.irw.ee/api/list?limit=500')
            .then((Response) => Response.json())
            .then((data) => {
                data.list.forEach(contact => {
                    contact.intro = removeHTMLTags(contact.intro);
                });
                setData(data);
                console.log(data)}
            );
    }, []);

    return (
        <div className='table-container'>
            <h1 className='title'>NIMEKIRI</h1>
            <table>
                <thead> 
                    <tr>
                        <th>Eesnimi</th>
                        <th>Perekonnanimi</th>
                        <th>sugu</th>
                        <th>Sünnikuupäev</th>
                        <th>Telefon</th>
                    </tr>
                </thead>
                <tbody>
                    {data.list && data.list.slice(page * 10, (page + 1) * 10).map((contact, index) => (
                        <>
                            <tr key={contact.id} onClick={() => setShow(show === index ? -1 : index)}>
                                <td>{contact.firstname}</td>
                                <td>{contact.surname}</td>
                                <td>{contact.sex === 'f' ? 'Naine' : 'Mees'}</td>
                                <td>{contact.personal_code}</td>
                                <td>{contact.phone}</td>
                            </tr>
                            {show === index && <tr>
                                <td className='preview-box'>
                                    <img className="list-img" src= {contact.image.small} />
                                    <div className='preview-text-btn'>
                                        <p>{contact.intro}</p>
                                        <a className='preview-btn' href={<contactPage/>}>LOE ROHKEM</a>
                                    </div>
                                </td>
                            </tr>} 
                        </>
                    ))}
                </tbody>
            </table>
            <div className='list-btns'>
                <button className='list-page-btn' onClick={() => setPage(page > 0 ? page - 1 : 0)}><img src={Previous}/></button>
                <button className='list-page-btn' onClick={() => setPage(page + 1)}><img src={Next}/></button>
            </div>
        </div>
    )
}

export default list
