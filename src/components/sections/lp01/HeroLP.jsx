import SectionArea from "../../sectionElements/SectionArea";
import SectionWrapper from "../../animation/MotionDivDownToUp";
import MotionDivDownToUp from "../../animation/MotionDivDownToUp";
import Button from "../../interactives/Button";
import contentLp01 from "../../../content/contentLp01";
import { useNavigate } from "react-router-dom";
import FullImg from "../../sectionElements/Lp01/hero/FullImg";
import DefaultHero from "../../sectionElements/Lp01/hero/DefaultHero";

export default function HeroLP({ fullImg }) {
  const navigate = useNavigate();

  return fullImg ? <FullImg obs={false} /> : <DefaultHero />;
}
