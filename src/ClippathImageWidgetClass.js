import * as Scrivito from "scrivito";

const ClippathImageWidget = Scrivito.provideWidgetClass("ClippathImageWidget", {
  attributes: {
    image: ["reference", { only: "Image" }],
    alignment: ["enum", { values: ["left", "center", "right"] }],
    alternativeText: "string",
    link: "link",

    form: [
      "enum",
      {
        values: [
          "triangle",
          "trapezoid",
          "parallelogram",
          "rhombus",
          "pentagon",
          "hexagon",
          "heptagon",
          "octagon",
          "nonagon",
          "decagon",
          "bevel",
          "rabbet",
          "left-arrow",
          "right-arrow",
          "left-point",
          "right-point",
          "left-chevron",
          "right-chevron",
          "star",
          "cross",
          "message",
          "close",
          "frame",
        ]
      }
    ]
  },
});

export default ClippathImageWidget;
