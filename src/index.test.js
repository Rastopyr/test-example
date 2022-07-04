import { DoublerCanonical, HelloWorld } from "./index";

const doubler = new DoublerCanonical(1);

describe("DoublerCanonical", () => {
  it("increment", () => {
    doubler.increment();
    expect(doubler.value).toBe(2);
  });

  it("doubled", () => {
    doubler.increment();
    expect(doubler.double).toBe(4);
  });
});

describe("snapshot example", () => {
  it("example 1", () => {
    expect(HelloWorld({ title: "Roman" })).toMatchSnapshot();
  });

  it("example 2", () => {
    expect(HelloWorld({ title: "Max" })).toMatchSnapshot();
  });

  it("example 2", () => {
    expect(HelloWorld({ title: "Vadym" })).toMatchSnapshot();
  });
});
