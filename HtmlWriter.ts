import IWritable from "./IWritable";
import Menu from "./Menu";
import { writeFile } from "node:fs/promises";

export default class HtmlWriter implements IWritable {
  constructor() {}
  async write(menus: Menu[]): Promise<void> {
    //implementation
    let html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Menu</title>
    </head>
    <body>`;

    const types: string[] = [];
    menus.map((data) => {
      if (!types.includes(data.type)) {
        types.push(data.type);
      }
    });
    for (const type of types) {
      html += `<h2> ${type} items </h2>`;
      html += `<ul>`;
      menus
        .filter((data) => data.type === type)
        .map((data) => {
          html += `<li>${data.price} ${data.name} ${data.quantity}</li>`;
        });
      html += `</ul>`;
    }

    html += `</body>
    </html>`;

    await writeFile("menu.html", html);
  }
}
