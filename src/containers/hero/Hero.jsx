const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col" id="summarizer">
      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="blue_gradient ">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Simplify your reading with ChatGPT, that transforms lengthy articles
        into clear and concise summaries
      </h2>
    </header>
  );
};

export default Hero;
