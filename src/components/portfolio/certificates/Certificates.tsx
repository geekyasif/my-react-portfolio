import Heading from "../../Heading";
import CertificateCard from "./CertificateCard";

function Certificates() {
  return (
    <div>
      <Heading title="Certificates" buttonText="Add new certificate" />
      <div className=" flex justify-between flex-wrap">
        <CertificateCard
          title="Advanced theoretical Javascript"
          imageUrl="https://cdn-icons-png.flaticon.com/512/888/888859.png?w=826&t=st=1689113641~exp=1689114241~hmac=42c44d2eaad744f8395528df699572b433bd107c4b72a52ca5791d19a953a7b7"
          date="Issued on Dec 16th, 2022"
          credentials=""
        />
        <CertificateCard
          title="Docker for beginners"
          imageUrl="https://cdn-icons-png.flaticon.com/512/919/919853.png?w=826&t=st=1689114008~exp=1689114608~hmac=23c5f49181a4de0f37b1e160061577deeecfca4fbb71e7af950ee9579c421467"
          date="Issued on Dec 16th, 2022"
          credentials=""
        />
        <CertificateCard
          title="Crash course on python"
          imageUrl="https://cdn-icons-png.flaticon.com/512/919/919852.png?w=826&t=st=1689114024~exp=1689114624~hmac=21efab2a8d1ae3359d589e8088c239d6ce7dc6adddfae94e9a6019502d974929"
          date="Issued on Dec 16th, 2022"
          credentials=""
        />
        <CertificateCard
          title="Fontend master javacript"
          imageUrl="https://cdn-icons-png.flaticon.com/512/376/376244.png?w=826&t=st=1689113986~exp=1689114586~hmac=ef39596eb58e3de7bb37898c878dcacc3ce1df9a8f7a8f0095cc7656679bf56e"
          date="Issued on Dec 16th, 2022"
          credentials=""
        />
      </div>
    </div>
  );
}

export default Certificates;
