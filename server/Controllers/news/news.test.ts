import request from "supertest";
import { Express } from "express";
import MainRouter from "../../Routes/main_routes";
import AxiosService from "../../Services/AxiosService";

beforeAll(() => {
  const router = new MainRouter();
}, 10000);

afterAll(() => {
  setTimeout(() => {
    process.exit(1);
  }, 5000);
}, 10000);

describe("GET /api/v1/news/", () => {
  it("should return 200", (done) => {
    const url = `http://localhost:${process.env.PORT}/api/v1/news/?country=in`;
    const proRes = AxiosService.axiosClient.get(url);
    proRes
      .then((resp) => {
        expect(resp).toHaveProperty("status", 200);
        expect(resp.data).toHaveProperty("status", "ok");
        expect(resp.data).toHaveProperty("totalResults");
        expect(resp.data.totalResults).toBeGreaterThan(0);
        expect(resp.data).toHaveProperty("articles");
        expect(resp.data.articles.length).toBeGreaterThan(0);
        done();
      })
      .catch((err) => {
        done(err);
      });
  }, 10000);
});

describe("GET /api/v1/news/?country=in&page=1&pageSize=20", () => {
  it("should return 200 and have 20 articles", (done) => {
    const url = `http://localhost:${process.env.PORT}/api/v1/news/?country=in&page=1&pageSize=20`;
    const proRes = AxiosService.axiosClient.get(url);
    proRes
      .then((resp) => {
        expect(resp).toHaveProperty("status", 200);
        expect(resp.data).toHaveProperty("status", "ok");
        expect(resp.data).toHaveProperty("totalResults");
        expect(resp.data.totalResults).toBeGreaterThan(0);
        expect(resp.data).toHaveProperty("articles");
        expect(resp.data.articles.length).toBe(20);
        done();
      })
      .catch((err) => {
        done(err);
      });
  }, 10000);
});

describe("GET /api/v1/news/search", () => {
  it("should return 200", (done) => {
    const url = `http://localhost:${process.env.PORT}/api/v1/news/search?q=tesla`;
    const proRes = AxiosService.axiosClient.get(url);
    proRes
      .then((resp) => {
        expect(resp).toHaveProperty("status", 200);
        expect(resp.data).toHaveProperty("status", "ok");
        expect(resp.data).toHaveProperty("totalResults");
        expect(resp.data.totalResults).toBeGreaterThan(0);
        expect(resp.data).toHaveProperty("articles");
        expect(resp.data.articles.length).toBeGreaterThan(0);
        done();
      })
      .catch((err) => {
        done(err);
      });
  }, 10000);
});

describe("GET /api/v1/news/search", () => {
  it("should return 200 and have 20 articles", (done) => {
    const url = `http://localhost:${process.env.PORT}/api/v1/news/search?q=tesla&page=1&pageSize=20`;
    const proRes = AxiosService.axiosClient.get(url);
    proRes
      .then((resp) => {
        expect(resp).toHaveProperty("status", 200);
        expect(resp.data).toHaveProperty("status", "ok");
        expect(resp.data).toHaveProperty("totalResults");
        expect(resp.data.totalResults).toBeGreaterThan(0);
        expect(resp.data).toHaveProperty("articles");
        expect(resp.data.articles.length).toBe(20);
        done();
      })
      .catch((err) => {
        done(err);
      });
  }, 10000);
});

describe("GET /api/v1/news/search", () => {
  it("should return 200 and have 20 articles", (done) => {
    const url = `http://localhost:${process.env.PORT}/api/v1/news/search?q=tesla&page=3&pageSize=20`;
    const proRes = AxiosService.axiosClient.get(url);
    proRes
      .then((resp) => {
        expect(resp).toHaveProperty("status", 200);
        expect(resp.data).toHaveProperty("status", "ok");
        expect(resp.data).toHaveProperty("totalResults");
        expect(resp.data.totalResults).toBeGreaterThan(0);
        expect(resp.data).toHaveProperty("articles");
        expect(resp.data.articles.length).toBe(20);
        done();
      })
      .catch((err) => {
        done(err);
      });
  }, 10000);
});
