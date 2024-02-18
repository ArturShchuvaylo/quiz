import { useTranslation } from "react-i18next";

function Button({ title = "Next", disable, onClick = null }) {
  const { t } = useTranslation();
  const changedTitle = title.split(" ").join("-").toLowerCase();

  return (
    <button disabled={disable} onClick={onClick} className="btn btn-ui">
      {t(`buttons.button-${changedTitle}`)}
    </button>
  );
}

export default Button;
