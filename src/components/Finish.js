import { Link } from "react-router-dom";
import Button from "./Button";
import { useTranslation } from "react-i18next";

function Finish() {
  const { t } = useTranslation();
  return (
    <>
      <div className="main">
        <div className="question-head">
          <h4>{t(`finish.title`)}</h4>
          <p> {t(`finish.subtitle`)}</p>
        </div>
        <div className="image-container">
          <img
            src="https://s3-alpha-sig.figma.com/img/0c24/5cb5/ebdf2417d7fde04bf86fa1469f3d7f00?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=faguHX9cLxAGKFiFyBCIwbii83B3x2n~sCbiYDZvKIFJeOpiGz8BMmkKXLVJ-y3Qpmt2ZlUDY-Byi8Tk74Gt7K2zgzBa75gKt8MOAOS6h-koDAUZiKcZ8wntB1ZsmnuQj1e3psGOLZV1W-PBcWSPkMVqQIeHYKpz0A0~vb3j3RsIl18BxklCvlSRrZ1FoEKedXXM1iITkLTlOmQmWNY7kQoYFFf7dzEl-Nqj0wtZh0hK4OlSPH2DrCGR2nEHor51~IG1gvGry-svo~2oO8jHo-VJeSR0ogP9gjSeiNHoubLwNP9ON~71iktwjSwBgR0QfyJbZt-WhBZ1KUhVqzDA0A__"
            alt="Thank you image"
            className="thank-you-image"
          />
        </div>
        <div className="download-container">
          <div className="download-icon">
            <img
              src="https://s3-alpha-sig.figma.com/img/f6c9/297b/ea932914bfb8e0c8d2e7450798a37696?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fFFadPS0uLnN5nChqHmrIjfbM06lavC4bWpXegiGvPTiJwRkyAnsLkIQw7Vnj8g4l9VEaX68M8HrmqINvUGxAt1ZH2qOSLErrlEO2MVENS8JPTbCa3lgmuyY8bPoCgTIQTwxftmQ9VdIso~JhDq1G2g1K0~cXG6H11Zeth0GwGYoofE68lcKhcuDhyb0ASmBIoIaAVJOtEcXRiC4KE4u5gftzOjVjksxnMViiO70fDEeQA3mTA~TzvNIAdLU4GEYLcKssg4wlfZCMMfxbs6HRKAq6A-ij0JjN-OlVK6dNVITfxpFOQmMg88GKMRgwaTVZuxLZ1zQeCkJKzsQtsVcSQ__"
              alt="Download image"
              className="download-image"
            />
          </div>
          <p className="download-text">{t(`finish.download`)}</p>
        </div>
        <Link to="/quiz/1" className="link nex-button  ">
          <Button title="Retake quiz" />
        </Link>
      </div>
    </>
  );
}

export default Finish;
