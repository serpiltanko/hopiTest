// HomeScreen.test.tsx
import { render, screen } from "@testing-library/react-native";
import HomeScreen from "./HomeScreen";

describe("HomeScreen", () => {
  test("Shows title", async () => {
    render(<HomeScreen />);
    const textElement = await screen.getByText("Users", { exact: false });
    expect(textElement.children).toContain("Users");
  });

  test("Makes request", async () => {
    render(<HomeScreen />);

    const john = await screen.findByText(/John/);
    expect(john).toBeTruthy();
  });

  test("Shows error", async () => {
    render(<HomeScreen />);
    const error = await screen.findByText(/Hata/);
    expect(error).toBeTruthy();
  });
});
