export default function IconButtonFeatureCard(props) {
  const { icon, title, paragraph, className, children, colorMode } = props;

  // Definir classes de cor com base no modo
  const bgClasses = {
    dark: "bg-primary",
    light: "bg-iconButtons",
    default: "bg-iconButtons",
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
      className={`w-[250px] phone2:w-[300px] phone3:w-[350px] tablet1:h-auto tablet1:max-w-[255px] desktop1:max-w-[250px] flex flex-col items-center py-4 px-6 rounded-md ${className}`}
    >
      <div
        className={`h-[64px] mb-4 w-[64px] rounded-md flex justify-center items-center ${bgClass}`}
      >
        {icon}
      </div>
      <h1
        className={`h-auto mb-4 font-bold font-mainFont text-title1 text-center flex items-start  ${textClass}`}
      >
        {title}
      </h1>

      <p
        className={`text-center opacity-70 font-secondFont w-[90%] ${textClass}`}
      >
        {paragraph}
      </p>
      {children}
    </div>
  );
}
