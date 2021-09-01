defmodule Exlivery.Orders.CreateOrUpdate do
  alias Exlivery.Orders.Agent, as: OrderAgent
  alias Exlivery.Orders.Order
  alias Exlivery.Users.Agent, as: UserAgent

  def call(%{user_cpf: user_cpf, items: items}) do
    with {:ok, user} <- UserAgent.get(user_cpf),
         {:ok, items} <- build_items.get(items),
         {:ok, order} <- Order.build(user, items) do
      OrderAgent.save(order)
    else
      error -> error
    end
  end
end
