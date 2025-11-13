export default function TeamMemberCards(props) {
  const { name, description } = props;

  return (
    <div className="flex flex-col items-center justify-center p-[20px] max-w-[300px] tablet1:w-[45%] desktop1:max-w-auto border-solid border-[5px] rounded-[50px]">
      <div>
        <h1 className="mb-[8px] text-title1 text-center font-bold border rounded-[30px] p-[20px]">
          {name}
        </h1>
        <div className="desktop2:h-auto flex justify-center">
          <p className="text-center text-paragraphLight desktop2:mb-[20px] tablet1:w-[80%] border rounded-[30px] p-[20px]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
