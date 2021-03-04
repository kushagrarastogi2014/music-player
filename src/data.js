import { v4 as uuidv4 } from "uuid";

function ChillHop() {
  return [
    {
      name: "Kinsfolk",
      artist: "Aarigod",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/02/7f102bdde417f6ead9a120b2b931449e5c12b4da-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=12997",
      color: ["#13160B", "#45502E"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Woodnote",
      artist: "Aarigod, imagiro",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/02/7f102bdde417f6ead9a120b2b931449e5c12b4da-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=13014",
      color: ["#13160B", "#45502E"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Splendour",
      artist: "Aarigod",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/02/7f102bdde417f6ead9a120b2b931449e5c12b4da-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=13013",
      color: ["#13160B", "#45502E"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Hereafter",
      artist: "Makzo",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/11/f78c39b4bb6313ddd0354bef896c591bfb490ff8-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=12997",
      color: ["#EB847C", "#6374AA"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Sleepover",
      artist: "Nymano, JK the Sage",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/09fb436604242df99f84b9f359acb046e40d2e9e-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10130",
      color: ["#545281", "#A16F87"],
      id: uuidv4(),
      active: false,
    },
  ];
}

export default ChillHop;
