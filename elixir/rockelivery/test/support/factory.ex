defmodule Rockelivery.Factory do
  use ExMachina.Ecto, repo: Rockelivery.Repo

  alias Rockelivery.User

  def user_params_factory do
    %{
      "age" => 18,
      "address" => "Street test",
      "cep" => "01001000",
      "cpf" => "12345678901",
      "email" => "johndoe@test.com",
      "password" => "123456",
      "name" => "John Doe"
    }
  end

  def user_factory do
    %User{
      age: 18,
      address: "Street test",
      cep: "01001000",
      cpf: "12345678901",
      email: "johndoe@test.com",
      password: "123456",
      name: "John Doe",
      id: "b2869b80-e17d-46dd-adaf-349d1144bba6"
    }
  end

  def cep_info_factory do
    %{
      "bairro" => "Sé",
      "cep" => "01001-000",
      "complemento" => "lado ímpar",
      "ddd" => "11",
      "gia" => "1004",
      "ibge" => "3550308",
      "localidade" => "São Paulo",
      "logradouro" => "Praça da Sé",
      "siafi" => "7107",
      "uf" => "SP"
    }
  end
end
