import Head from "next/head";
import React, { useRef } from "react";
import { titleHead } from ".";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import article1 from "../../public/images/articles/pagination component in reactjs.jpg";
import article2 from "../../public/images/articles/create loading screen in react js.jpg";
import article3 from "../../public/images/articles/form validation in reactjs using custom react hook.png";
import article4 from "../../public/images/articles/smooth scrolling in reactjs.png";
import article5 from "../../public/images/articles/todo list app built using react redux and framer motion.png";
import article6 from "../../public/images/articles/What is higher order component in React.jpg";
import article7 from "../../public/images/articles/What is Redux with easy explanation.png";
import { motion, useMotionValue } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const MovinImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }

  function handleMouseLeave(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }

  return (
    <Link
      href={link}
      target={"_blank"}
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-xl font-semibold hover:underline">
        {title}
      </h2>
      <FramerImage
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        ref={imgRef}
        src={img}
        alt={title}
        className="z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden"
      />
    </Link>
  );
};

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light md:flex-col"
    >
      <MovinImg title={title} img={img} link={link} />
      <span className="text-primary font-semibold pl-4 dark:text-primaryDark md:self-start md:pl-0 xs:text-sm">
        {date}
      </span>
    </motion.li>
  );
};

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className="relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl dark:bg-dark dark:border-light">
      <div className="absolute top-0 -right-3 -z-10 w-[100.8%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl" />
      <Link
        href={link}
        target={"_blank"}
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          50vw"
        />
      </Link>
      <Link href={link} target={"_blank"}>
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2">{summary}</p>
      <span className="text-primary font-semibold dark:text-primaryDark">
        {time}
      </span>
    </li>
  );
};

const contact = () => {
  return (
    <>
      <Head>
        <title>{titleHead}Blog</title>
        <meta name="EvS Developer" content="Blog" />
      </Head>

      <TransitionEffect />

      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Mantenha-se informado!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
            <FeaturedArticle
              title="Crie um componente de paginação personalizado em Reactjs do zero."
              summary="Aprenda a criar um componente de paginação personalizado no ReactJS do zero. Siga este guia passo a passo para integrar o componente Pagination em seu projeto ReactJS."
              time="9 min de leitura"
              link="/"
              img={article1}
            />
            <FeaturedArticle
              title="Crie um componente de loading de sua preferência, simples e prático."
              summary="Aprenda a criar um loading personalizado para o seu site, utilizando ReactJS. Cada detalhe para a criação do seu site é importante!"
              time="7 min de leitura"
              link="/"
              img={article2}
            />
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
            Todos os Artigos
          </h2>
          <ul>
            <Article
              title="Validação de formulário em Reactjs"
              date="20 de Abril, 2023"
              link="/"
              img={article3}
            />
            <Article
              title="Utilização do Smooth Scrolling com React"
              date="16 de Março, 2023"
              link="/"
              img={article4}
            />
            <Article
              title="Crie uma lista de tarefas personalizada"
              date="3 de Março, 2023"
              link="/"
              img={article5}
            />
            <Article
              title="Entenda como funciona o HOC"
              date="7 de Fevereiro, 2023"
              link="/"
              img={article6}
            />
            <Article
              title="Aprenda como utilizar REDUX"
              date="27 de Janeiro, 2023"
              link="/"
              img={article7}
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default contact;
