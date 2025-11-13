import SectionArea from "../sectionElements/SectionArea";
import SectionWrapper from "../sectionElements/SectionWrapper";
import SectionHeader from "../sectionElements/SectionHeader";
import WordPressBlogCard from "../cards/WordPressBlogCard";
import imgNews1 from "../../assets/imgs/news/news1.png";
import imgNews2 from "../../assets/imgs/news/news2.png";
import imgNews3 from "../../assets/imgs/news/news3.png";

function NwesPosts() {
  // Array de posts
  const posts = [
    {
      link: "https://revistapegn.globo.com/negocios/noticia/2023/03/nove-em-dez-brasileiros-pesquisam-online-antes-de-comprar-diz-google.ghtml",
      title: "Cerca de 90% dos consumidores pesquisam online antes de comprar",
      subtitle:
        "Se você não tem um site, seus clientes estão indo direto para a concorrência que já está online.",
      img: <img src={imgNews1} alt="Notícia 1" className="rounded-2xl" />,
    },
    {
      link: "https://www.terra.com.br/noticias/marketing-de-conteudo-custa-62-menos-do-que-o-marketing-tradicional-e-gera-ate-3x-mais-resultados-aponta-pesquisa,0725c89939e94bfecc870cc1c6d75df169729jr6.html",
      title: "Empresas com site profissional vendem até 3x mais",
      subtitle:
        "Um site bem feito aumenta a credibilidade, confiança e gera leads mesmo enquanto você dorme.",
      img: <img src={imgNews2} alt="Notícia 2" className="rounded-2xl" />,
    },
    {
      link: "https://itforum.com.br/sites-moveis-necessitam-bem-mais-que-um-layout-responsivo/amp/",
      title: "Sites responsivos atraem mais clientes móveis",
      subtitle:
        "Mais de 60% do tráfego na web vem de smartphones. Se seu site não funciona bem neles, você perde oportunidades.",
      img: <img src={imgNews3} alt="Notícia 3" className="rounded-2xl" />,
    },
  ];

  return (
    <SectionArea className="squares" id="blog" paddingbot={true}>
      <SectionWrapper>
        <SectionHeader
          className="text-center"
          miniTitle="NOTÍCIAS E TENDÊNCIAS"
          sectionHeaderTitle="O mundo digital não espera. Seu negócio precisa estar online."
          sectionHeaderSubtitle=""
          color=""
          titleColorSet="text-black"
          subtitleColorSet="text-black"
          type=""
        />

        <ul className="flex flex-wrap gap-[30px] justify-center ">
          {posts.map((post, index) => (
            <li key={index}>
              <WordPressBlogCard
                img={post.img}
                title={post.title}
                subtitle={post.subtitle}
                link={post.link}
              />
            </li>
          ))}
        </ul>
      </SectionWrapper>
    </SectionArea>
  );
}

export default NwesPosts;
