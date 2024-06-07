import "../CSS/Home.css";
import { Cursor, Typewriter } from "react-simple-typewriter";
function Home(){
    return(
        <div className="home">
            <header>Welcome to Tek Pyramid</header>
            <h2>
                Skills Required:{' '}
                <span>
                <Typewriter words={['HTML','CSS','Javascript','Reactjs','Redux','SASS']} loop={false}/>
                </span>
                <span>
                    <Cursor cursorStyle='|' />
                </span>
            </h2>
            <button>Get Started</button>
            <video autoPlay loop muted className="bg-vid">
                <source src="src\assets\8207246-uhd_2560_1440_30fps.mp4" type="video/mp4" />
            </video>
        </div>
    )
}

export default Home;