import { render, screen } from "@testing-library/react";
import useHighlightField from "./useHighlightField"; // Update the import path accordingly


describe("useHighlightField", () => {
  it("should update highlight state when user properties change", () => {
    const TestComponent = ({ user }) => {
      const highlight = useHighlightField(user);

      return (
        <div>
          <span data-testid="first">{highlight.first.toString()}</span>
          <span data-testid="last">{highlight.last.toString()}</span>
          <span data-testid="largeImg">{highlight.largeImg.toString()}</span>
          <span data-testid="country">{highlight.country.toString()}</span>
        </div>
      );
    };

    const user1 = {
      name: { first: "John", last: "Doe" },
      picture: { large: "image1" },
      location: { country: "USA" },
    };

    const user2 = {
      name: { first: "Jane", last: "Doe" },
      picture: { large: "image2" },
      location: { country: "Canada" },
    };

    const { rerender } = render(<TestComponent user={user1} />);

    // Initial render, all highlight fields should be false
    expect(screen.getByTestId("first").textContent).toBe("false");
    expect(screen.getByTestId("last").textContent).toBe("false");
    expect(screen.getByTestId("largeImg").textContent).toBe("false");
    expect(screen.getByTestId("country").textContent).toBe("false");

    // Update the user to trigger a change in the hook
    rerender(<TestComponent user={user2} />);

    // After the update, highlight.first should be true, others should be false
    expect(screen.getByTestId("first").textContent).toBe("true");
    expect(screen.getByTestId("last").textContent).toBe("false");
    expect(screen.getByTestId("largeImg").textContent).toBe("true");
    expect(screen.getByTestId("country").textContent).toBe("true");
  });


});
