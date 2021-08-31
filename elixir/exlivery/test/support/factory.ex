defmodule Exlivery.Factory do
  use ExMachina

  alias Exlivery.Orders.{Item, Order}
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

  def order_factory do
    %Order{
      delivery_address: "Address test",
      items: [
        build(:item),
        build(:item, description: "Pizza test 2", quantity: 5)
      ],
      total_price: Decimal.new("183.92"),
      user_cpf: "123.456.789-00"
    }
  end
end
