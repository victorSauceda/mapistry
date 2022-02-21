const Checkbox = (props: any) => {
  const { difficultyLevel, setDifficultyLevel } = props;
  return (
    <div style={{ display: "block", marginTop: "1rem" }}>
      <label>
        <input
          type="checkbox"
          checked={difficultyLevel.easy}
          onClick={() =>
            setDifficultyLevel({
              easy: true,
              hard: false,
            })
          }
        />
        Easy
      </label>
      <label>
        <input
          type="checkbox"
          checked={difficultyLevel.hard}
          onClick={() =>
            setDifficultyLevel({
              easy: false,
              hard: true,
            })
          }
        />
        Hard
      </label>
    </div>
  );
};
export default Checkbox;
