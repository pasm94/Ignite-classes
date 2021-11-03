defmodule RockeliveryWeb.Plugs.RefreshToken do
  alias Plug.Conn
  alias RockeliveryWeb.Auth.Guardian

  def init(options), do: options

  def call(%Conn{private: %{guardian_default_token: token}} = conn, _opts) do
    with {:ok, _old_stuff, {new_token, _new_claims}} = Guardian.refresh_token(token) do
      %{conn | assigns: Map.merge(conn.assigns, %{new_token: new_token})}
    end
  end
end
