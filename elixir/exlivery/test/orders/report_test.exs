defmodule Exlivery.Orders.ReportTest do
  use ExUnit.Case

  import Exlivery.Factory

  alias Exlivery.Orders.Agent, as: OrderAgent
  alias Exlivery.Orders.Report

  describe "create/1" do
    test "creates the report file" do
      OrderAgent.start_link(%{})

      :order
      |> build
      |> OrderAgent.save()

      :order
      |> build
      |> OrderAgent.save()

      expected_response =
        "123.456.789-00,pizza,3,22.99,pizza,5,22.99,183.92\n" <>
          "123.456.789-00,pizza,3,22.99,pizza,5,22.99,183.92\n"

      Report.create("report_test.csv")

      response = File.read!("report_test.csv")
      assert response == expected_response
    end
  end
end
