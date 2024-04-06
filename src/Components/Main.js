import react, { useEffect, useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Card from "./Card";
let API_key = '&api_key=a565cb06d4351194789db5dc672bbcfe';
let base_url = 'https://api.themoviedb.org/3';
let url=base_url+"/discover/movie?sort_by=popularity.desc"+API_key;
let arr=["Popular","Theater","Kids","Drama","Comedie"];

const Main = () => {
    const [movieData, setData]=useState([]);
    const [url_set, setUrl]=useState(url);
    const [search, setSearch]=useState();

    useEffect(()=>{
        fetch(url_set).then(res=>res.json()).then(data=>{
            //console.log(data.results);
            setData(data.results);
        });
    },[url_set]);
    const getData=(movieType)=>{
        if(movieType=="Popular")
        {
            url=base_url+"/discover/movie?sort_by=popularity.desc"+API_key;
        }
        if(movieType=="Theater")
        {
            url=base_url+"/discover/movie?primary_release_date.gte=2021-09-15&primary_release_date.lte=2021-10-22"+API_key;
        }
        if(movieType=="Kids")
        {
            url=base_url+"/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc"+API_key;
        }
        if(movieType=="Drama")
        {
            url=base_url+"/discover/movie?with_genres=18&primary_release_year=2021"+API_key;
        }
        if(movieType=="Comedie")
        {
            url=base_url+"/discover/movie?with_genres=35&primary_release_year=2021"+API_key;
        }
        setUrl(url);
    }
    const searchMovie=(evt)=>{
        if(evt.key=="Enter")
        {
            url=base_url+"/search/movie?api_key=a565cb06d4351194789db5dc672bbcfe&query="+search;
            setUrl(url);
            setSearch('');
        }
    }
    return (
        <>
            <div className='header'>
                <nav>
                    <ul>
                        {
                            arr.map((value)=>{
                                return(
                                    <li><a href='#' name={value} onClick={(e)=>{getData(e.target.name)}}>{value}</a></li>
                                )
                            })
                        }
                    </ul>
                </nav>
                <form>
                    <div className='search-btn'>
                        <input type='text' placeholder='Search' className='inputText' onChange={(e)=>{setSearch(e.target.value)}} value={search} onKeyPress={searchMovie}>
                        </input>
                        <button>
                        <i class="fa fa-search" aria-hidden="true"></i>
                        </button>
                    </div>
                </form>
            </div>
            <div className='container'>
                {
                    (movieData.length==0)?<p className='notFound'>Not Found</p>:movieData.map((res,pos)=>{
                        return(
                            <Card info={res} key={pos}/>
                        )
                    })
                }
            </div>
        </>
    )
}
export default Main;