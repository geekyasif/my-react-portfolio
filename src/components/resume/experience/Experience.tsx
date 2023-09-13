import Heading from "../Heading";
import Card from "../Card";

const ExpericesData = [
  {
    id: 1,
    role: "Fontend developer at Google",
    office: "London | Google Inc.",
    from: "May 2021",
    to: "Present",
    imageUrl: "youtube.png",
    description:
      "Hello LinkedIn fam! 👋 I hope you're all doing well. Today, I wanted to share my latest adventure with you all. 🌟 I've recently started exploring Appwrite, an amazing open-source backend-as-a-service platform 📚🚀. It simplifies app development by providing powerful APIs for user authentication, storage, and databases.",
  },
  {
    id: 1,
    role: "Backend developer at Google",
    office: "London | Google Inc.",
    from: "May 2021",
    to: "Present",
    imageUrl: "gmail.png",
    description:
      "The versatility of Appwrite, combined with its supportive community, makes it an ideal environment for developers of all levels. I'm thrilled to connect with fellow Appwrite enthusiasts and collaborate on innovative projects. Let's push boundaries together and make a positive impact in the tech world The versatility of Appwrite, combined with its supportive community, makes it an ideal environment for developers of all levels. I'm thrilled to connect with fellow Appwrite enthusiasts and collaborate on innovative projects. Let's push boundaries together and make a positive impact in the tech worldThe versatility of Appwrite, combined with its supportive community, makes it an ideal environment for developers of all levels. I'm thrilled to connect with fellow Appwrite enthusiasts and collaborate on innovative projects. Let's push boundaries together and make a positive impact in the tech world",
  },
  {
    id: 1,
    role: "Fontend developer at Linkedin",
    office: "London | Google Inc.",
    from: "May 2021",
    to: "Present",
    imageUrl: "linkedin.png",
    description:
      "Hello LinkedIn fam! 👋 I hope you're all doing well. Today, I wanted to share my latest adventure with you all. 🌟 I've recently started exploring Appwrite, an amazing open-source backend-as-a-service platform 📚🚀. It simplifies app development by providing powerful APIs for user authentication, storage, and databases.",
  },
];

function Experience() {
  return (
    <div>
      <Heading title="Work experience" position="text-center"/>
      {ExpericesData.map((data) => (
        <Card {...data} />
      ))}
    </div>
  );
}

export default Experience;
