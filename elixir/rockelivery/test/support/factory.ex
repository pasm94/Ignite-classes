defmodule Rockelivery.Factory do
  use ExMachina

  def user_params_factory do
    %{
      age: 18,
      address: "Street test",
      cep: "12345678",
      cpf: "12345678901",
      email: "johndoe@test.com",
      password: "123456",
      name: "John Doe"
    }
  end
end
