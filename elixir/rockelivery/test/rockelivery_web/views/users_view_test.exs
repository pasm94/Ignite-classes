defmodule RockeliveryWeb.UsersViewTest do
  use RockeliveryWeb.ConnCase, async: true

  import Phoenix.View
  import Rockelivery.Factory

  alias RockeliveryWeb.UsersView

  test "renders create.json" do
    user = build(:user)

    response = render(UsersView, "create.json", user: user)

    expected_response = %{
      message: "User created!",
      user: %Rockelivery.User{
        address: "Street test",
        age: 18,
        cep: "12345678",
        cpf: "12345678901",
        email: "johndoe@test.com",
        id: "b2869b80-e17d-46dd-adaf-349d1144bba6",
        inserted_at: nil,
        name: "John Doe",
        password: "123456",
        password_hash: nil,
        updated_at: nil
      }
    }

    assert response == expected_response
  end
end
