import { render, fireEvent, screen } from "@testing-library/react";

//test block
test("Test input and search button", () => {


  const input = {repo: 'leongaban'};
  
  const repoInput = screen.getByTestId('input');
  repoInput.value = input.repo;
  expect(repoInput).toHaveTextContent('leongaban');

//select the elements you want to interact with
// const input = screen.getByTestId("input");
// const button = screen.getByTestId("button");

// //interact with those elements

// fireEvent.click(button);

//assert the expected result
// expect(input).toHaveTextContent("1");
});