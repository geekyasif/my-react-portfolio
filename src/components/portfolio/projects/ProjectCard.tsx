import SkillTag from "../../SkillTag";

interface IProjectCardProps {
    imageUrl: string,
    title: string
    skills: string[]
}


function ProjectCard({imageUrl, title, skills}: IProjectCardProps) {
  return (
    <div className="w-[100%] md:w-[49%] lg:w-[49%] border p-4 rounded-md  my-2 bg-gray-50">
      <img src={imageUrl} className="rounded-md w-[100%] md:h-[200px] lg:h-[400px]" />
      <h1 className="font-bold text-xl mt-4 mb-2">
        {title}
      </h1>
      <div className="flex items-center flex-wrap">
        {
            skills.map((item, i) => (
                <SkillTag title={item} key={i} bgColor="bg-gray-100"/>
            ))
        }
       

      </div>
    </div>
  );
}

export default ProjectCard;
