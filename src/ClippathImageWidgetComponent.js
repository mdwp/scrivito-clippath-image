import * as React from "react";
import * as Scrivito from "scrivito";

Scrivito.provideComponent("ClippathImageWidget", ({ widget }) => {
  const style = widget.get("form");

  let image = (
    <Scrivito.ImageTag
      content={widget}
      attribute="image"
      alt={alternativeText(widget)}
      className={style}
    />
  );

  const link = widget.get("link");
  if (link) {
    image = <Scrivito.LinkTag to={link}>{image}</Scrivito.LinkTag>;
  }

  const classNames = [];
  if (["center", "right"].includes(widget.get("alignment"))) {
    classNames.push(`text-${widget.get("alignment")}`);
  }

  return (
      <div className={classNames.join(" ")}>{image}</div>
  );
});

function alternativeText(widget) {
  const widgetAlternativeText = widget.get("alternativeText");
  if (widgetAlternativeText) {
    return widgetAlternativeText;
  }
  const image = widget.get("image");
  if (image) {
    return image.get("alternativeText");
  }
  return "";
}
