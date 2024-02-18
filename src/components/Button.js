import { useTranslation } from "react-i18next";

const Button = ({ title = "Next", isDisabled, onClick = null }) => {
  const { t } = useTranslation();
  const changedTitle = title.split(" ").join("-").toLowerCase();

  return (
    <button disabled={isDisabled} onClick={onClick} className="btn btn-ui">
      {t(`buttons.button-${changedTitle}`)}
    </button>
  );
};

export default Button;
