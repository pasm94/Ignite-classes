defmodule Rockelivery.Stack do
  use GenServer

  # server callbacks

  @impl true
  def init(stack) do
    {:ok, stack}
  end

  @impl true
  # funcao sincrona
  def handle_call({:push, element}, _from, stack_state) do
    new_stack = [element | stack_state]
    {:reply, new_stack, new_stack}
  end

  @impl true
  def handle_call(:pop, _from, [head | tail]) do
    {:reply, head, tail}
  end

  @impl true
  def handle_call(:pop, _from, []) do
    {:reply, nil, []}
  end

  @impl true
  # funcao assincrona
  def handle_cast({:push, element}, stack_state) do
    {:noreply, [element | stack_state]}
  end
end
