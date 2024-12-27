const { useState } = React;

const RegFrm = () => {
  const [user, setUser] = useState({
    name: "Lax Panch",
    age: 26,
    gender: "Male",
    isMarried: true,
    country: "India",
    bio: "Write Someting about you",
  });

  function changeHandler(e) {
    const name = e.target.name;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value; // Correctly handle 'checkbox'
    setUser({ ...user, [name]: value });
  }

  return (
    <>
      <table>
        <tbody>
          <tr>
            <td>Name</td> <td>{user.name}</td>
          </tr>
          <tr>
            <td>Age</td> <td>{user.age}</td>
          </tr>
          <tr>
            <td>Gender</td> <td>{user.gender}</td>
          </tr>
          <tr>
            <td>Marriage Status</td>{" "}
            <td>{user.isMarried ? "Married" : "Not Married"}</td>
          </tr>
          <tr>
            <td>country</td> <td>{user.country}</td>
          </tr>
          <tr>
            <td>Bio</td> <td>{user.bio}</td>
          </tr>
        </tbody>
      </table>

      <form>
        <input
          type="text"
          placeholder="Enter Full Name"
          value={user.name}
          onChange={changeHandler}
          name="name"
        />
        <input
          type="number"
          placeholder="Enter Age"
          value={user.age}
          onChange={changeHandler}
          name="age"
        />
        <div className="gender">
          <label htmlFor="male">
            <input
              type="radio"
              name="gender"
              id="male"
              onChange={changeHandler}
              checked={user.gender === "Male"}
              value="Male"
            />
            Male
          </label>
          <label htmlFor="female">
            <input
              type="radio"
              name="gender"
              id="female"
              onChange={changeHandler}
              checked={user.gender === "Female"}
              value="Female"
            />
            Female
          </label>
        </div>
        <label htmlFor="isMarried">
          <input
            type="checkbox"
            id="isMarried"
            name="isMarried"
            onChange={changeHandler}
            checked={user.isMarried}
          />
          Is Married
        </label>
        <div className="select-div">
          <label htmlFor="country">Select Country:</label>
          <select
            name="country"
            id="country"
            value={user.country} // Correctly bind the value
            onChange={changeHandler} // Attach the event handler here
          >
            <option value="India">India</option>
            <option value="Srilanka">Srilanka</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
          </select>
        </div>
        <textarea
          name="bio"
          id="bio"
          cols="30"
          rows="5"
          placeholder="Write about you"
          value={user.bio}
          onChange={changeHandler}
        ></textarea>
      </form>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RegFrm />);

