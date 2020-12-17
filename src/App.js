
import './App.css';
import './style.css';
import myImage from './steveJobs.jpg';


function App() {
  return (

    <div className="App" >
      
      <div  style={{border:"solid 1px black",maxWidth:"100vw"}}>

        <h1 className="titleRed">Randa Chaieb</h1>
        <br />
        <img src={myImage} alt='imageInSrc' />
        <br />
        <img src="/quote.jpg" alt="imageInPublic"  />  

      </div>

      <video style ={{width:"320", height:"240", controls}}>

      <source src={"myVideo.mp4"} type={"video/mp4"} />

      </video>
      
    </div>
  );
}

export default App;
