import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import Button from "../interactives/Button";

export default function WordPressBlogCard({ img, title, subtitle, link }) {
  return (
    <div>
      <MotionDivDownToUp>
        <div
          id="cardBlog"
          className="w-[290px] phone2:w-[300px] phone3:w-[350px] tablet1:w-[400px] font-mainFont flex flex-col desktop1:max-w-[500px] desktop3:max-w-[375px] bg-bgSectionLight rounded-2xl p-[20px] border border-black"
        >
          <div className="w-full max-h-[220px] tablet1:h-[300px] flex justify-center items-center overflow-hidden rounded-2xl">
            <div className="w-full">{img}</div>
          </div>
          <h1
            className="mt-4 text-title1 leading-[25px] font-medium mb-[12px]"
            title="blogTitle"
          >
            {title}
          </h1>
          <h2
            className="text-paragraph2 desktop2:text-paragraph3 mb-[32px] text-colorBlack/60 leading-[18px] desktop1:leading-[21px]  "
            title="blogSubtitle"
          >
            {subtitle}
          </h2>
          <div className="flex ">
            <Button
              label="Ver matéria completa"
              buttonLink={link}
              className="text-labelButtons"
              size="small"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-corner-down-right"
                >
                  <polyline points="15 10 20 15 15 20" />
                  <path d="M4 4v7a4 4 0 0 0 4 4h12" />
                </svg>
              }
            />
          </div>
        </div>
      </MotionDivDownToUp>
    </div>
  );
}
