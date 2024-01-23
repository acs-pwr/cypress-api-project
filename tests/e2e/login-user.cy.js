import { VALID_LOGIN } from "../data/login.data";
import { INVALID_LOGIN } from "../data/login.data";
import { INVALID_LOGIN_PASSWORD } from "../data/login.data";
import { LOGIN } from "../const/routes";
import { BASE_URL } from "../const/routes";

describe("Login feature", () => {
  it("should successfully log in with valid credentials", () => {
    cy.request({
      method: "POST",
      url: BASE_URL.baseUrl + LOGIN.login,
      form: true,
      body: {
        email: VALID_LOGIN.email,
        password: VALID_LOGIN.password,
      },
    }).then((response) => {
      cy.log(response.body);
      expect(response.body).to.equal(
        '{"responseCode": 200, "message": "User exists!"}'
      );
    });
  });
  it("should fail log in with invalid email", () => {
    cy.request({
      method: "POST",
      url: BASE_URL.baseUrl + LOGIN.login,
      form: true,
      body: {
        email: INVALID_LOGIN.email,
        password: INVALID_LOGIN.password,
      },
    }).then((response) => {
      cy.log(response.body);
      expect(response.body).to.equal(
        '{"responseCode": 404, "message": "User not found!"}'
      );
    });
  });
  it("should fail log in with invalid password", () => {
    cy.request({
      method: "POST",
      url: BASE_URL.baseUrl + LOGIN.login,
      form: true,
      body: {
        email: INVALID_LOGIN_PASSWORD.email,
        password: INVALID_LOGIN_PASSWORD.password,
      },
    }).then((response) => {
      cy.log(response.body);
      expect(response.body).to.equal(
        '{"responseCode": 404, "message": "User not found!"}'
      );
    });
  });
});
