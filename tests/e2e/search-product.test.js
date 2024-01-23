import { VALID_PRODUCT_TOP } from "../data/product.data";
import { SEARCH_PRODUCT } from "../const/routes";
import { BASE_URL } from "../const/routes";

describe("search feature", () => {
  it.only("should successfully search with valid keywords", () => {
    cy.request({
      method: "POST",
      url: BASE_URL.baseUrl + SEARCH_PRODUCT.searchProduct,
      form: true,
      body: {
        search_product: VALID_PRODUCT_TOP.search_product,
      },
    }).then((response) => {
      return new Promise((resolve) => {
        expect(response.body.responseCode)
          .property("responseCode")
          .to.equal(200);
        // expect(response.body).property("products").to.not.be.oneOf([null, ""]);
        // const respBody = response.body;
        // products = respBody["id"];
        // resolve(products);
      });
    });
  });
  it("should fail log in with invalid email", () => {
    cy.request({
      method: "POST",
      url: BASE_URL.baseUrl + SEARCH_PRODUCT.searchProduct,
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
      url: BASE_URL.baseUrl + SEARCH_PRODUCT.searchProduct,
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
