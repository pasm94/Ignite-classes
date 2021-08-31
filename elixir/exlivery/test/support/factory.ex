defmodule Exlivery.Factory do
  use ExMachina

  alias Exlivery.Orders.Item
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

  def item_factory do
    %Item{
      category: :pizza,
      description: "Pizza test",
      quantity: 3,
      unity_price: Decimal.new("22.99")
    }
  end
end
