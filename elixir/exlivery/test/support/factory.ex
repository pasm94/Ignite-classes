defmodule Exlivery.Factory do
  use ExMachina

  alias Exlivery.Users.User

  def user_factory do
    %User{
      name: "Name test",
      email: "email@test.com",
      cpf: "123.456.789-00",
      age: 18,
      address: "Address test"
    }
  end
end
