// LoginScreen.test.tsx
import { render, screen } from "@testing-library/react-native";
import LoginScreen from "./LoginScreen";

describe("HomeScreen", () => {
  test("Shows title", async () => {
    render(<LoginScreen />);
    const textElement = await screen.getByText("Users", { exact: false });
    expect(textElement.children).toContain("Users");
  });

  test("Makes request", async () => {
    render(<LoginScreen />);

    const john = await screen.findByText(/John/);
    expect(john).toBeTruthy();
  });

  test("Shows error", async () => {
    render(<LoginScreen />);
    const error = await screen.findByText(/Hata/);
    expect(error).toBeTruthy();
  });
});
