const SideBar = () => {
  return (
    <section className="relative flex flex-col lg:w-1/3 border-2 border-double lg:rounded-br-3xl">
      <h1 className="text-3xl md:text-5xl font-bold m-6 h-fit text-white">
        Rebel <br /> Alliance <br /> Search System
      </h1>
      <p className="m-6 text-white">
        Welcome to the Rebel Alliance's secret tool for accessing the Empire's
        data. Thanks to the sacrifices of our spies, you can now search critical
        information about their bases, agents, and fleet. Use this access to
        help the Rebellion thwart the Empire's plans – may the Force be with
        you.
      </p>
    </section>
  );
};

export default SideBar;
