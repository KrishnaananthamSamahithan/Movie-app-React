import react from 'react';
import Card from "./Card";

const Main = () => {
    return (
        <>
            <div className='header'>
                <nav>
                    <ul>
                        <li><a href='#'>Poster</a></li>
                        <li><a href='#'>Theater</a></li>
                        <li><a href='#'>Kids</a></li>
                        <li><a href='#'>Drama</a></li>
                        <li><a href='#'>Comedie</a></li>
                    </ul>
                </nav>
                <form>
                    <div className='search-btn'>
                        <input type='text' placeholder='Search' className='inputText'/>
                        <button>
                        <i class="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </div>
                </form>
            </div>
            <div className='container'>
                <Card/>
            </div>
        </>
    )
}
export default Main;