import React, { useEffect, useState } from "react";

export type Todo = {
	value: string;
	isCompleted: boolean;
	id: number;
};

function TodoList() {
	const [task, setTask] = useState("");
	const [todos, setTodos] = useState<Todo[]>(() => {
		const storedTodos = localStorage.getItem("todos");
		return storedTodos ? JSON.parse(storedTodos) : [];
	});

	const handleChangeTask = (e: any) => {
		setTask(e.target.value);
	};

	const handleTodoList = () => {
		if (task === "") {
			alert("please add task");
			return;
		}
		const newTodo = todos.map((item: any) => {
			return { ...item };
		});
		newTodo.push({ value: task, isCompleted: false, id: new Date().getTime() });
		setTodos(newTodo);
		setTask("");
	};

	const handleKeyDown = (e: any) => {
		if (e.key === "Enter") {
			handleTodoList();
		}
	};
	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);

	const handleDeleteList = (id: any) => {
		const filteredList = todos.filter((item: Todo) => {
			return item.id !== id;
		});

		setTodos(filteredList);
	};

	const handleCompleteTask = (id: any) => {
		const newTodo = todos.map((item: any) => {
			return { ...item };
		});
		newTodo.forEach((item) => {
			if (item.id === id) {
				item.isCompleted = !item.isCompleted;
			}
		});
		setTodos(newTodo);
	};

	return (
		<div>
			<div>
				<input
					placeholder="Add task"
					value={task}
					onChange={handleChangeTask}
					type="text"
					onKeyDown={handleKeyDown}
				/>
				<button onClick={handleTodoList}>Add Task</button>
			</div>
			<div>
				{todos.map((item) => {
					return (
						<div
							style={{ display: "flex", flexDirection: "row" }}
							key={item.id}
						>
							{item.isCompleted ? (
								<p style={{ textDecoration: "line-through" }}>{item.value}</p>
							) : (
								<p>{item.value}</p>
							)}

							<div
								onClick={() => handleCompleteTask(item.id)}
								style={{ marginLeft: "20px", marginTop: "15px" }}
							>
								☑️
							</div>
							<div
								onClick={() => handleDeleteList(item.id)}
								style={{ marginLeft: "20px", marginTop: "15px" }}
							>
								❌
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default TodoList;
