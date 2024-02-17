import { useTranslation } from "react-i18next";

function Button({ title = "Next", disable }) {
  const { t } = useTranslation();
  const changedTitle = title.split(" ").join("-").toLowerCase();
  console.log(changedTitle);

  return (
    <button disabled={disable} className="btn btn-ui">
      {t(`buttons.button-${changedTitle}`)}
    </button>
  );
}

export default Button;
