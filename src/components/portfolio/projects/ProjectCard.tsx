import SkillTag from "../../SkillTag";

interface IProjectCardProps {
  imageUrl: string;
  title: string;
  skills: string[];
  codeUrl: string;
  liveUrl: string;
}

function ProjectCard({
  imageUrl,
  title,
  skills,
  codeUrl,
  liveUrl,
}: IProjectCardProps) {
  return (
    <div className="w-[100%] max-w md:w-[49%] lg:w-[49%] border p-4 rounded-md  my-2 bg-gray-50">
      <img
        alt="img"
        src={imageUrl}
        className="rounded-md w-[100%] md:h-[200px] lg:h-[400px]"
      />
      <h1 className="font-bold text-xl mt-4 mb-2">{title}</h1>
      <div className="flex items-center flex-wrap">
        {skills.map((item, i) => (
          <SkillTag title={item} key={i} bgColor="bg-gray-100" />
        ))}
      </div>
      <div className="mt-2">
        <a
          rel="noreferrer"
          href={codeUrl}
          target="_blank"
          className="bg-indigo-500 text-white p-1 px-2 rounded mr-2 text-sm"
        >
          Source Code
        </a>
        <a
          rel="noreferrer"
          href={liveUrl}
          target="_blank"
          className="bg-indigo-500 text-white p-1 px-2 rounded text-sm"
        >
          Live Preview
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
