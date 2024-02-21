import IWritable from "./IWritable";
import Menu from "./Menu";
import { writeFile } from "node:fs/promises";

export default class TextWriter implements IWritable {
  constructor() {}
  async write(menus: Menu[]): Promise<void> {
    //implementation
    let finalString = "";
    const types: string[] = [];
    menus.map((data) => {
      if (!types.includes(data.type)) {
        types.push(data.type);
      }
    });
    for (const type of types) {
      finalString += `* ${type} items *\n`;
      menus
        .filter((data) => data.type === type)
        .map((data) => {
          finalString += `${data.price} ${data.name} ${data.quantity}\n`;
        });
      finalString += "\n";
    }

    await writeFile("menu.txt", finalString);
  }
}
