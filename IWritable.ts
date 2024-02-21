export default interface IWritable {
  write(menuStr: Object[]): Promise<void>;
}
