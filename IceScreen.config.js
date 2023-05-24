const ColorsVar = [
  /* Escala de grises */
  "#000000",
  "#333333",
  "#666666",
  "#999999",
  "#cccccc",
  "#e6e6e6",
  "#f2f2f2",
  "#ffffff",

  "#e6f4ff",
  "#c3e0ff",
  "#a2ceff",
  "#80baff",
  "#5d9bff",
  "#397dff",
  "#1652ff",
  "#004cff",
  "#0039cc",

  /* Tonos de rojo */
  "#ffebe6",
  "#ffc2b3",
  "#ff9980",
  "#ff704d",
  "#ff471a",
  "#d92700",
  "#a60000",
  "#7a0000",
  "#4d0000",

  /* Tonos de verde */
  "#e3f9e5",
  "#c1e7c4",
  "#a0d5a4",
  "#7ec479",
  "#5cb15a",
  "#3a913c",
  "#176e2f",
  "#0f5723",
  "#0d4218",

  /* Tonos de amarillo */
  "#fffce0",
  "#fff4b3",
  "#ffe680",
  "#ffd24d",
  "#ffc200",
  "#d9a400",
  "#a66b00",
  "#804c00",
  /* Tonos de cyan */
  "#e0ffff",
  "#b3ffff",
  "#80ffff",
  "#4dffff",
  "#1affff",
  "#00e6e6",
  "#00b3b3",
  "#008080",
  "#004d4d",

  /* Tonos de Sky */
  "#e0f2ff",
  "#b3e6ff",
  "#80d4ff",
  "#4dc2ff",
  "#1aafff",
  "#00a3cc",
  "#008fb3",
  "#006680",
  "#003d4d",

  /* Tonos de amber */
  "#fff4e0",
  "#ffe0b3",
  "#ffce80",
  "#ffba4d",
  "#ffa11a",
  "#cc8a00",
  "#997a00",
  "#664c00",
  "#332600",

  /* Tonos de violeta */
  "#f2e0ff",
  "#e6b3ff",
  "#d480ff",
  "#c24dff",
  "#a11aff",
  "#8a00cc",
  "#6600a3",
  "#4c0080",
  "#33004d",

  /* Tonos de fuchsia */
  "#ffe0f2",
  "#ffb3e6",
  "#ff80d4",
  "#ff4dc2",
  "#ff1aa1",
  "#cc008a",
  "#990066",
  "#66004c",
  "#330026",

  /* Tonos de rosa */
  "#fff2f2",
  "#ffe6e6",
  "#ffd4d4",
  "#ffc2c2",
  "#ffafaf",
  "#cc8a8a",
  "#996666",
  "#663333",
  "#330000",

  /* Tonos de morado */
  "#f4e6ff",
  "#e0c3ff",
  "#cea2ff",
  "#ba80ff",
  "#9b5dff",
  "#7d39ff",
  "#5216ff",
  "#4c00ff",
  "#3900cc",

  /* Tonos de naranja */
  "#fff4e0",
  "#ffe0c3",
  "#ffcea2",
  "#ffba80",
  "#ff9b5d",
  "#ff7d39",
  "#ff5216",
  "#ff4c00",
  "#cc3900",
];

module.exports = {
  Fonts: [
    {
      "fs-Cat0": './Fonts/Cat.tfs',
      "fs-Cat1": './Fonts/Cat.tfs',
      "fs-Cat2": './Fonts/Cat.tfs',
      "fs-Cat3": './Fonts/Cat.tfs',
    }
  ],
  Colors: {
    Dual_Theme: [
      {
        Name: "BackgroundColor",
        "Dark-Name": "0x343434",
        "Light-Name": "0xfff",
      },      {
        Name: "IconColor",
        "Dark-Name": "0x343434",
        "Light-Name": "0xfff",
      },
    ],
    Simple: [
      {
        Name: "Text",
        "Dark-Name": "0x343434",
      },
      {
        Name: "Text",
        "Dark-Name": "0x343434",
      },
    ],
  },
  Icons: {
      "IAmerican": 'AmericanExpress.svg',
      "IPayPal": 'PayPal.svg',
      "IVisa": 'Visa.svg',
      "IMasterCard": 'MasterCard.svg',
  },
  IconList: "./Media/Icons/"
};
