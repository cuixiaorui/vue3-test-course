import { list } from "./todoService";
describe("test jest init", () => {
  it("init", () => {
    expect(true).toBe(true);
  });
  it("list", () => {
    expect(list()).toEqual([]);
  });
});
