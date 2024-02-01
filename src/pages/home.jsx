import LogOut from "./auth/logout";

function Home() {
  return (
    <section>
      <nav className="flex justify-between">
        <h1>AyG</h1>
        <LogOut></LogOut>
      </nav>
      <div>Home</div>
    </section>
  );
}

export default Home;
