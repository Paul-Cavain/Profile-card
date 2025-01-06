const SkillsList = () => {
  const skillsItems = [
    {
      id: 1,
      name: "React",
      emoji: "/images/react.png",
      color: "#123456",
    },
    {
      id: 2,
      name: "HTML + CSS",
      emoji: "images/html.png",
      color: "orangered",
    },
    {
      id: 3,
      name: "Javascript",
      emoji: "images/js.png",
      color: "#FFA600FF",
    },
    {
      id: 4,
      name: "Git and Github",
      emoji: "images/github.png",
      color: "red",
    },
    {
      id: 5,
      name: "Web design",
      emoji: "/images/figma.png",
      color: "#0EC4B1FF",
    },
    {
      id: 6,
      name: "Svelte",
      emoji: "/images/svelte.png",
      color: "#561249FF",
    },
  ];

  return (
    <div className="flex justify-center items-start pb-8">
      <div className="grid grid-cols-2 gap-2">
        {skillsItems.map((skill) => (
          <div
            key={skill.id}
            style={{ background: skill.color }}
            className="flex items-center px-2 gap-3 rounded-sm shadow-md p-1.5"
          >
            <p className="">{skill.name}</p>
            <img
              src={skill.emoji}
              alt={`${skill.name} icon`}
              className="w-4 h-4"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsList;
