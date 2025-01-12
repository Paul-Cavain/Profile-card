import Avatar from "./Avatar";
import Intro from "./Intro";
import SkillsList from "./SkillsList";

const levelEmojis = {
  Beginner: "🤒 ",
  Intermediate: "👉 ",
  Advanced: "👊 ",
};

const skillsItems = [
  {
    id: 1,
    name: "React",
    level: "Advanced",
    color: "#123456",
  },
  {
    id: 2,
    name: "HTML + CSS",
    level: "Beginner",
    color: "orangered",
  },
  {
    id: 3,
    name: "Javascript",
    level: "Advanced",
    color: "#FFA600FF",
  },
  {
    id: 4,
    name: "Git and Github",
    level: "Intermediate",
    color: "red",
  },
  {
    id: 5,
    name: "Web design",
    level: "Intermediate",
    color: "#0EC4B1FF",
  },
  {
    id: 6,
    name: "Svelte",
    level: "Beginner",
    color: "#561249FF",
  },
];

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="App border-4 border-black w-11/12 sm:w-1/2 md:w-1/4 flex flex-col justify-center items-center p-8 bg-white rounded-lg shadow-lg">
        <Avatar />
        <Intro />
        <SkillsList skillsItems={skillsItems} levelEmojis={levelEmojis} />
      </div>
    </div>
  );
}

export default App;
