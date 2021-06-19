const expect = require("chai").expect;
const request = require("supertest");
const app = require("../server");

describe("height complex", () => {
  it("height complex", async () => {
    const res = await request(app).get("/api/v1/Height/1,2,3,4,5,6");
    expect(res.status).to.equal(200);
    expect(res.body.heigth).to.equal(5);
  });
});

describe("height simple", () => {
  it("height simple", async () => {
    const res = await request(app).get("/api/v1/Height/15,10");
    expect(res.status).to.equal(200);
    expect(res.body.heigth).to.equal(1);
  });
});

describe("height more in right", () => {
  it("height more in right", async () => {
    const res = await request(app).get("/api/v1/Height/2,3,4,5,1,0");
    expect(res.status).to.equal(200);
    expect(res.body.heigth).to.equal(3);
  });
});

describe("height more in left", () => {
  it("height more in left", async () => {
    const res = await request(app).get("/api/v1/Height/10,9,8,7,11,12");
    expect(res.status).to.equal(200);
    expect(res.body.heigth).to.equal(5);
  });
});

describe("height 1 arguments", () => {
  it("height 1 arguments", async () => {
    const res = await request(app).get("/api/v1/Height/2");
    expect(res.status).to.equal(200);
    expect(res.body.heigth).to.equal(0);
  });
});
