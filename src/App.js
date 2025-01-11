import Avatar from "./Avatar";
import Intro from "./Intro";
import SkillsList from "./SkillsList";

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="App border-4 border-black w-11/12 sm:w-1/2 md:w-1/4 flex flex-col justify-center items-center p-8 bg-white rounded-lg shadow-lg">
        <Avatar />
        <Intro />
        <SkillsList />
      </div>
    </div>
  );
}

export default App;
