defmodule Rockelivery.UserTest do
  use Rockelivery.DataCase, async: true

  alias Ecto.Changeset
  alias Rockelivery.User

  describe "changeset/2" do
    test "when all params are valid, returns a valid changeset" do
      params = %{
        age: 18,
        address: "Street test",
        cep: "12345678",
        cpf: "12345678901",
        email: "johndoe@test.com",
        password: "123456",
        name: "John Doe"
      }

      response = User.changeset(params)

      assert %Changeset{changes: %{name: "John Doe"}, valid?: true} = response
    end

    test "when updating a changeset, returns a valid changeset with the given changes" do
      params = %{
        age: 18,
        address: "Street test",
        cep: "12345678",
        cpf: "12345678901",
        email: "johndoe@test.com",
        password: "123456",
        name: "John Doe"
      }

      update_params = %{name: "Another Doe", password: "654321"}

      response =
        params
        |> User.changeset()
        |> User.changeset(update_params)

      assert %Changeset{changes: %{name: "Another Doe"}, valid?: true} = response
    end

    test "when there are some error, returns an invalid changeset" do
      params = %{
        age: 15,
        address: "Street test",
        cep: "1234",
        cpf: "1234",
        email: "johndoe@test.com",
        password: "12345",
        name: "John Doe"
      }

      response = User.changeset(params)

      expected_response = %{
        age: ["must be greater than or equal to 18"],
        cep: ["should be 8 character(s)"],
        cpf: ["should be 11 character(s)"],
        password: ["should be at least 6 character(s)"]
      }

      assert errors_on(response) == expected_response
    end
  end
end
