function Portfolio() {
  return (
    <div className="mx-auto">
      <p className="text-5xl font-light uppercase tracking-[5px] mb-10">Мое портфолио</p>
      <div className="grid grid-cols-3 gap-2">
        <div className="h-64 bg-purple" />
        <div className="h-36 bg-purple" />
        <div className="h-96 bg-purple" />

        <div className="h-96 bg-purple" />
        <div className="h-36 bg-purple" />
        <div className="h-24 bg-purple" />
      </div>
    </div>
  );
}

export default Portfolio;
