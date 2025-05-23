import monkeyGiphy from "../assets/monkey newspaper giphy.gif";

function Home() {
  return (
    <div>
      <img id="monkey" src={monkeyGiphy}></img>
      <footer>
        <strong>
          To be updated! in the meantime enjoy this monkey reading a newspaper
        </strong>
      </footer>
    </div>
  );
}

export default Home;
