// hello.test.js
it('always passes', () => {
  expect(true).toBe(true);
});

"scripts": {
  "test": "jest --reporters=default --reporters=\"@shelex/jest-allure2-reporter\" --outputDirectory=allure-results"
}
