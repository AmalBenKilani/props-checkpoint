import Profile from "./Profile/Profile"
import Pic from "./pic4.png"

function App() {
  const handleName = name => alert(name);
  return (
    <div style={{ backgroundColor:"grey" ,textAlign:"center" }}>
      <Profile fullName="Amal Ben Kilani" bio="xxxxxx" profession="Engineer" handleName={handleName}>
        <img src={Pic} alt="" ></img>
      </Profile>

    </div>

  );
}

export default App;
