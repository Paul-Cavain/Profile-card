const SkillsList = ({ skillsItems }) => {
  return (
    <div className="flex justify-center items-start pb-8 px-4 md:px-0">
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
