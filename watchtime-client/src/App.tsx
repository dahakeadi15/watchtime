import tvLogo from "/tv.svg";

function App() {
  return (
    <>
      <div className="min-h-screen w-full">
        <div className="px-3 flex items-center gap-1 bg-secondary py-2">
          <img src={tvLogo} className="w-10" />
          <h1 className="text-2xl pt-3">Watchtime</h1>
        </div>
      </div>
    </>
  );
}

export default App;
