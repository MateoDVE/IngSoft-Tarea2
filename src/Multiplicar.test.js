import Multiplicar from "./Multiplicar";

describe("Multiplicar", () => {
  it("deberia multiplicar dos numeros", () => {
    expect(Multiplicar(3, 2)).toEqual(6);
  });
});