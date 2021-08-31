defmodule Exlivery.Orders.ItemTest do
  use ExUnit.Case

  alias Exlivery.Orders.Item

  import Exlivery.Factory

  describe "build/4" do
    test "when all params are valid, returns an item" do
      response = Item.build("Pizza test", :pizza, "22.99", 3)

      expected_response = {:ok, build(:item)}

      assert response == expected_response
    end

    test "when all is an ivalid category, returns an error" do
      response = Item.build("Pizza test", :invalid, "22.99", 3)

      expected_response = {:error, "Invalid parameters"}

      assert response == expected_response
    end

    test "when there is a invalid price, returns an error" do
      response = Item.build("Pizza test", :pizza, "invalid", 3)

      expected_response = {:error, "Invalid price"}

      assert response == expected_response
    end

    test "when there is a invalid quantity, returns an error" do
      response = Item.build("Pizza test", :pizza, "22.99", 0)

      expected_response = {:error, "Invalid parameters"}

      assert response == expected_response
    end
  end
end
