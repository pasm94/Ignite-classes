defmodule Exlivery.Users.CreateOrUpdateTest do
  use ExUnit.Case

  alias Exlivery.Users.Agent, as: UserAgent
  alias Exlivery.Users.CreateOrUpdate

  import Exlivery.Factory

  describe "call/1" do
    setup do
      UserAgent.start_link(%{})

      :ok
    end

    test "when all params are valid, saves the user" do
      response = CreateOrUpdate.call(build(:user))

      expected_response = {:ok, "User created or updated successfully"}

      assert response == expected_response
    end

    test "when there are invalid params, returns an error" do
      response = CreateOrUpdate.call(build(:user, cpf: 15))

      expected_response = {:error, "Invalid parameters"}

      assert response == expected_response
    end
  end
end
