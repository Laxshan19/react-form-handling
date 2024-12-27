const { useState } = React;

function MyForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
     console.log(event.target.value);
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    alert(
      `User Name ${inputs.username} user age ${inputs.age} comment ${inputs.comment} car ${inputs.car}`
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your name:
        <input
          type="text"
          name="username"
          value={inputs.username || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        Enter your age:
        <input
          type="number"
          name="age"
          value={inputs.age || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        comment:
        <textarea
          type="text"
          name="comment"
          value={inputs.comment || ""}
          onChange={handleChange}
        />
      </label>
      Car:
      <select value={inputs.car || ""} name="car" onChange={handleChange}>
        <option value="Ford">Ford</option>
        <option value="Volvo">Volvo</option>
        <option value="Fiat">Fiat</option>
      </select>
      <input type="submit" />
    </form>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MyForm />);
