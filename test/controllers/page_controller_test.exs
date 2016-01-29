defmodule PhoenixTrello.PageControllerTest do
  use PhoenixTrello.ConnCase

  test "GET /", %{conn: conn} do
    conn = get conn, "/"
    assert html_response(conn, 200) =~ "main_container"
  end
end
