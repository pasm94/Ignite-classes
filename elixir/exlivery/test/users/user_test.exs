defmodule Exlivery.Users.UserTest do
  use ExUnit.Case

  alias Exlivery.Users.User

  import Exlivery.Factory

  describe "build/5" do
    test "when all params are valid, returns the user" do
      response =
        User.build(
          "Address test",
          "Name test",
          "email@test.com",
          "123.456.789-00",
          18
        )

      expected_response = {:ok, build(:user)}

      assert response == expected_response
    end

    test "when there are invalid params, returns an error" do
      response =
        User.build(
          "Address test",
          "Name test invalid age",
          "email@test.com",
          "123.456.789-00",
          15
        )

      expected_response = {:error, "Invalid parameters"}

      assert response == expected_response
    end
  end
end
