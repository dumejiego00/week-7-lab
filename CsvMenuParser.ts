import IWritable from "./IWritable";
import { readFile } from "node:fs/promises";
import * as path from "path";
import { EOL } from "node:os";

export default class CsvMenuParser {
  private _csvData: string;
  private _items: Object[] = [];

  private constructor(data: string) {
    this._csvData = data;
    this.parseFile(this._csvData);
  }

  static async buildMenu(fileName: string):Promise<CsvMenuParser> {
    const data = await readFile(fileName, "utf8");
    return new CsvMenuParser(data);
  }

  private parseFile(fileContent: string) {
    fileContent.split("\n").map((data) => {
      const itemInfo = data.split(",");
      this._items.push({
        type: itemInfo[0],
        name: itemInfo[1],
        quantity: itemInfo[2],
        price: itemInfo[3],
      });
    });
  }

  public print(): void {
    console.log(this._items);
  }
  public async writeMenu(writer: IWritable) {
    writer.write(this._items);
  }
}
