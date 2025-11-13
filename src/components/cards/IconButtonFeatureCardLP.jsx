export default function IconButtonFeatureCardLP(props) {
  const { icon, title, paragraph, className, children, colorMode } = props;

  // Definir classes de cor com base no modo
  const bgClasses = {
    dark: "bg-white",
    light: "bg-white",
    default: "bg-primary",
  };
  const textClasses = {
    dark: "text-black",
    light: "text-black",
    default: "text-black",
  };

  const bgClass = bgClasses[colorMode] || bgClasses.default;
  const textClass = textClasses[colorMode] || textClasses.default;

  return (
    <div
      className={`w-[250px] h-auto tablet1:w-[255px] desktop1:w-[250px] p-0 flex flex-col items-center ${className}`}
    >
      {/* <div
        className={`h-[64px] w-[64px] mb-[24px] rounded-md flex justify-center items-center ${bgClass}`}
      >
        {icon}
      </div> */}
      <h1
        className={`h-auto font-bold font-mainFont text-title3 text-center mb-[16px]  ${textClass}`}
      >
        {title}
      </h1>

      <p
        className={`text-center text-paragraph2 opacity-80 font-mainFont w-[90%] pb-8 tablet1:pb-4  ${textClass}`}
      >
        {paragraph}
      </p>
      {children}
    </div>
  );
}
