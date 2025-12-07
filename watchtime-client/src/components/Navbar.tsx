import tvLogo from "/tv.svg";

const Navbar = () => {
  return (
    <div className="bg-secondary px-3 flex items-center gap-1 py-2">
      <img src={tvLogo} className="w-10" />
      <h1 className="text-2xl pt-3">Watchtime</h1>
    </div>
  );
};

export default Navbar;
