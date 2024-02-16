function Progress() {
  return (
    <header className="progress">
      <p>
        <strong>2</strong> / 5
      </p>
      <progress max={5} value={2} />
    </header>
  );
}

export default Progress;
