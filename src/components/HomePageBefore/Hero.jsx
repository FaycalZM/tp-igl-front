export default function Hero() {
  return (
    <section className="section-layout grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="col-span-1 my-auto">
        <h1 className="title-xl">Modern living for everyone</h1>
        <p className="title-description-lg my-4">
          We provide a complete service for the sale, purchase or rental of real
          estate. We have been operating in Madrid and Barcelona more than 15
          years.
        </p>
      </div>
      <img
        src=" https://files.fm/thumb_show.php?i=qk882g35x"
        alt="Building"
        className="col-span-1 order-first md:order-last my-auto"
      />
    </section>
  );
}
