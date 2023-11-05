const fs = require("fs");
const cheerio = require("cheerio");

const filePath = "Styles";

const watcher = fs.watch(filePath, (event, filename) => {
  if (event === "change") {
    console.log(`File ${filename} has been change`);

    const html = fs.readFileSync("Styles/"+filename, "utf-8");

    const $ = cheerio.load(html);

    $("body *").each((index, element) => {
       const tagName = element.tagName;
       const classAttribute = $(element).attr("class");
       const idAttribute = $(element).attr("id");

       // Print the information
       console.log(`Tag Name: ${tagName}`);
       console.log(`Class: ${classAttribute || "N/A"}`);
       console.log(`ID: ${idAttribute || "N/A"}`);
       console.log("----------------------");
    });
  }
  else if(event === 'rename')
  {
    console.log(`File ${filename} has been renamed`);
  }
});

watcher.on("error", (err) => {
  console.error(`Error watching file: ${err}`);
});
