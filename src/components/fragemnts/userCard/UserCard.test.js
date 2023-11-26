import { render, screen } from "@testing-library/react";
import UserCard from "./UserCard";

describe("UserCard component", () => {
  const mockUser = {
    name: { first: "Jane", last: "Doe" },
    picture: { large: "https://example.com/image.jpg" },
    location: { country: "USA" },
  };

  test("renders user data", () => {
    render(<UserCard user={mockUser} />);

    // Check if the user data is displayed
    expect(screen.getByText("Jane")).toBeInTheDocument();
    expect(screen.getByText("Doe")).toBeInTheDocument();
    expect(screen.getByText("USA")).toBeInTheDocument();

    // Check if the image is rendered
    const userImage = screen.getByAltText("Jane Doe");
    expect(userImage).toBeInTheDocument();
    expect(userImage.src).toBe("https://example.com/image.jpg");
  });
});
