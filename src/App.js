import Avatar from "./Avatar";
import Intro from "./Intro";
import SkillsList from "./SkillsList";

const skillsItems = [
  {
    id: 1,
    name: "React",
    level: "Advanced",
    emoji: "/images/react.png",
    color: "#123456",
  },
  {
    id: 2,
    name: "HTML + CSS",
    level: "Beginner",
    emoji: "images/html.png",
    color: "orangered",
  },
  {
    id: 3,
    name: "Javascript",
    level: "Advanced",
    emoji: "images/js.png",
    color: "#FFA600FF",
  },
  {
    id: 4,
    name: "Git and Github",
    level: "Intermediate",
    emoji: "images/github.png",
    color: "red",
  },
  {
    id: 5,
    name: "Web design",
    level: "Intermediate",
    emoji: "/images/figma.png",
    color: "#0EC4B1FF",
  },
  {
    id: 6,
    name: "Svelte",
    level: "Beginner",
    emoji: "/images/svelte.png",
    color: "#561249FF",
  },
];

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="App border-4 border-black w-11/12 sm:w-1/2 md:w-1/4 flex flex-col justify-center items-center p-8 bg-white rounded-lg shadow-lg">
        <Avatar />
        <Intro />
        <SkillsList skillsItems={skillsItems} />
      </div>
    </div>
  );
}

export default App;
