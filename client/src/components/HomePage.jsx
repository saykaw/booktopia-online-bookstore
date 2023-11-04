import React,{useState, useEffect} from 'react';
import './HomePage.css';
import Card from './Card.jsx';
import axios from 'axios';


const HomePage = () => {
    //fetching bookdata : using search functionality
    const[search,setSearch] = useState('') ;
    const[bookData,setData] = useState([]);

    const apiKey = 'AIzaSyC231Sh3d7Pxtm3u7nbPAAum-kcCGAjkMM';
    const searchBook = (evt) => {
        if(evt.key === "Enter"){
            console.log('hello');
            axios.get(`https://www.googleapis.com/books/v1/volumes?q=`+search+`&key=${apiKey}`+'&maxResults=40')
            .then(res=>setData(res.data.items))  //difference between res, res.data, res.data.items & what is setData
            .catch(err=>console.log(err))
        }

    }
    // // Make a request to the Google Books API
    // fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&key=${apiKey}`)
    return (
        <div>
            <div className = "navbar" >
                <div className= "brand">Booktopia</div>
                <div className="search">
                    <input type="text" placeholder="Search by title, author" value={search} onChange={e => setSearch(e.target.value)} onKeyPress={searchBook}/>  {/*onkeypress is deprecated*/}
                    <button>Search</button>
                </div>
                <ul className = "nav-links">
                    <li>Home</li>
                    <li>About</li>
                    <li>Profile</li>
                </ul>
            </div>
            <div className="container">
                {
                    <Card book={bookData}/>

                }
            </div>
        </div>

  )
}

export default HomePage;