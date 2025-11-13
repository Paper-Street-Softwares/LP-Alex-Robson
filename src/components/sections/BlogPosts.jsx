import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import WordPressBlogCard from "../cards/WordPressBlogCard";
import SectionArea from "../sectionElements/SectionArea";
import SectionWrapper from "../sectionElements/SectionWrapper";
import SectionHeader from "../sectionElements/SectionHeader";
import Paragraphs from "../sectionElements/Paragraphs";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import content from "../../content/content";

function BlogPosts() {
  const { t } = useTranslation();
  const [posts, setPosts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    fetch(
      `https://public-api.wordpress.com/rest/v1.1/sites/${content.texts.blog.blogLink}/posts/`
    )
      .then((response) => response.json())
      .then((data) => setPosts(data.posts || []))
      .catch((error) => console.error("Erro ao buscar posts:", error));
  }, []);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth >= 1441) {
        setVisibleCount(6);
      } else {
        setVisibleCount(3);
      }
    };

    updateVisibleCount(); // roda ao carregar
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  return (
    <div>
      <SectionArea className="bg-bgSectionDark" id="blog">
        <SectionWrapper>
          <SectionHeader
            className="text-center mb-[26px] tablet1:mb-[40px] desktop1:mb-[72px]"
            miniTitle={t("blog.miniTag")}
            sectionHeaderTitle={t("blog.title")}
            sectionHeaderSubtitle={t("blog.subtitle")}
            color=""
            type=""
            titleColorSet="text-white"
            subtitleColorSet="text-white"
          />

          <ul className="flex flex-wrap gap-[30px] justify-center mb-[80px]">
            {posts.slice(0, visibleCount).map((post) => (
              <li key={post.ID}>
                <WordPressBlogCard
                  img={
                    post.featured_image && (
                      <img
                        src={post.featured_image}
                        alt="Imagem do post"
                        className="rounded-2xl"
                      />
                    )
                  }
                  title={
                    <h1
                      className=""
                      dangerouslySetInnerHTML={{ __html: post.title }}
                    />
                  }
                  subtitle={
                    <p
                      dangerouslySetInnerHTML={{
                        __html:
                          post.excerpt.length > 100
                            ? post.excerpt.substring(0, 60) + "..."
                            : post.excerpt,
                      }}
                    />
                  }
                  link={post.URL}
                />
              </li>
            ))}
          </ul>

          <MotionDivDownToUp>
            <Paragraphs className="text-center text-white underline transition hover:scale-110">
              <a
                href={`https://${content.texts.blog.blogLink}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("blog.label")}
              </a>
            </Paragraphs>
          </MotionDivDownToUp>
        </SectionWrapper>
      </SectionArea>
    </div>
  );
}

export default BlogPosts;
