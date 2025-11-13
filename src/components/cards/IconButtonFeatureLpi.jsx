import Button from "../interactives/Button";
import content from "../../content/content";

export default function IconButtonFeatureLpi(props) {
  const { icon, title, paragraph, className, children } = props;

  return (
    <div
      className={`w-full p-0 tablet1:w-[200px] desktop1:w-[220px] flex flex-col items-center desktop1:hover:scale-110 transition desktop1:p-0 ${className}`}
    >
      <div className="h-[64px] w-[64px] mb-[24px]  rounded-md flex justify-center items-center text-secondary">
        {icon}
      </div>
      <h1 className="h-auto font-bold font-mainFont text-title1 text-center mb-[16px] text-secondary">
        {title}
      </h1>
      <p className="text-center text-black opacity-70 font-mainFont w-[90%] pb-4">
        {paragraph}
      </p>
    </div>
  );
}
