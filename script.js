document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("send");

    console.log(btn); // HTMLButtonElement object

    // ✅ Works as expected
    btn.addEventListener("click", () => {
        let task = document.getElementById("task-form").value;
        let taskDisplay = document.getElementById("task-display");
        if (task.length > 0) {
            console.log(task);
            const div =
                `
			<div class='task'>
			<input type="checkbox" name="task1">
			<label>` +
                task +
                `</label>
			</input>
			</div>`;
            div.innerText = "test";
            taskDisplay.innerHTML += div;
            console.log(task);
            console.log(task.length);
        } else {
            alert("Pleas enter a task");
        }
    });
});
