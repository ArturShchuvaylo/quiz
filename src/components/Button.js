function Button({ title = "Next", disable }) {
  return (
    <button disabled={disable} className="btn btn-ui">
      {title}
    </button>
  );
}

export default Button;
