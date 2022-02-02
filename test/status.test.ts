import request from "supertest";
import app from "../src/app";
import { StatusCodes } from "http-status-codes";

describe("GET /", () => {
  it("should return 200 OK", (done) => {
    request(app).get("/api/v1/status")
      .expect(StatusCodes.OK, done);
  });

  it("should return as healthy", (done) => {
    request(app).get("/api/v1/status")
      .end(function(err, res) {
        expect(res.body.data.status).toBe("healthy");
        done();
      });
  });
});
