import { Link } from "react-router-dom";
import SkillTag from "../../SkillTag";
import { Github, Link2, Navigation } from "lucide-react";

interface IProjectCardProps {
  imageUrl: string;
  title: string;
  tags: string[];
  codeUrl: string;
  liveUrl: string;
  slug: string;
  description: string;
}

function ProjectCard({
  imageUrl,
  title,
  tags,
  codeUrl,
  liveUrl,
  slug,
  description,
}: IProjectCardProps) {
  return (
    <div className="relative w-[100%] max-w md:w-[49%] lg:w-[49%] border p-4 rounded-md my-2 bg-gray-50">
      {/* Image Wrapper */}
      <div className="relative group cursor-pointer">
        <img
          alt="img"
          src={imageUrl || `https://placehold.co/1250x650?text=${title}`}
          className="rounded-md w-[100%] md:h-[200px] lg:h-[300px] object-fit"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md">
          <div className="flex gap-4">
            {/* Source Code Button */}
            <Link
              to={codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-200 text-black p-2 rounded-full hover:bg-gray-300 transition w-[30px] h-[30px] flex items-center justify-center"
            >
              <Github width={30} height={30} />
            </Link>

            {/* Live Preview Button */}
            <Link
              to={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-200 text-black p-2 rounded-full hover:bg-gray-300 transition w-[30px] h-[30px] flex items-center justify-center"
            >
              <Link2 width={30} height={30} />
            </Link>

            {/* Details Button */}
            <Link
              to={`/project-details/${slug}`}
              className="bg-gray-200 text-black p-2 rounded-full hover:bg-gray-300 transition w-[30px] h-[30px] flex items-center justify-center"
            >
              <Navigation width={30} height={30} />
            </Link>
          </div>
        </div>
      </div>

      {/* Title & Tags */}
      <h1 className="font-bold text-xl mt-4 mb-2">{title}</h1>
      <p className="text-sm py-4">{description}</p>
      <div className="flex items-center flex-wrap gap-3">
        {tags.map((item, i) => (
          <SkillTag title={item} key={i} bgColor="bg-gray-200" />
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;
