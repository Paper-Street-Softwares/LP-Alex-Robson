export default function ButtonWithIcon(props) {
  const { icon, label, link, className } = props;

  return (
    <a href={link} target="_blank">
      <button
        className={`${className} flex flex-row items-center justify-center transition rounded-[10px] px-[18px] py-[10px] bg-primary hover:bg-secondary text-secondary hover:text-primary hover:border-primary hover:border-solid border-[1px] border-primary`}
      >
        <div className="flex items-center text-center gap-[10px]">
          <div className="flex flex-col justify-end">{icon}</div>
          <p className="flex items-center text-paragraph3 font-secondFont">
            {label}
          </p>
        </div>
      </button>
    </a>
  );
}
