import React, { useState } from 'react'

const AddNews = ({ addNews }) => {
    const [news, setNews] = useState('');
    const [check, setCheck] = useState('');

    const handleClick = (news) => {
        if (news.trim() !== '') {
            addNews(news);
            setCheck(news);
            setNews('');
            const storedNews = JSON.parse(localStorage.getItem('news')) || [];
            localStorage.setItem('news', JSON.stringify([...storedNews, news]));
        }
    }
    return (
        <div className='container'>
            {check}
            <div className="form-group">
                <label> Add News</label>
                <textarea className="form-control bg-white" value={news} onChange={(e) => setNews(e.target.value)} id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button className='btn btn-primary' onClick={() => handleClick(news)}>Add News</button>
        </div>
    )
}

export default AddNews