import "../styles/reset.css";
import Board from "./Board";

export const App = () => (
  <main>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        paddingTop: "20rem",
      }}
    >
      <Board />
    </div>
  </main>
);
