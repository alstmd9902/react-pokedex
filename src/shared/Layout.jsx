import { Search } from "lucide-react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

export default function Layout() {
  const navigate = useNavigate(); //search 경로
  return (
    <>
      <header className="text-6xl mb-5 pokemon-name">Pokédex</header>
      <nav className="flex items-center gap-3 mb-3 justify-center">
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "text-[#9c9a9a]")}
          to="/"
        >
          메인
        </NavLink>
        {/* <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/detail:pokemonId"
        >
          상세
        </NavLink> */}
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "text-[#9c9a9a]")}
          to="/favorite"
        >
          찜 목록
        </NavLink>
        {/* <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/search"
        >
          검색
        </NavLink> */}

        <div className="relative">
          <Search className="absolute right-2 top-2 text-[#797878]" />
          <input
            // 경로 설정 : navigate => /search?pokemon?${e.target.value}
            onChange={(e) => navigate(`/search?pokemon=${e.target.value}`)}
            placeholder="검색어 를 입력해주세요"
            className="p-2 w-[240px] nav-search"
          />
        </div>
      </nav>

      <main className="mt-12 px-4 max-w-6xl mx-auto">
        <Outlet />
      </main>
    </>
  );
}
