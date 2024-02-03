import react, { useState } from "react";

function App() {
  const [formData, setFromData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "India",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
    comments: false,
    candidate: false,
    offers: false,
    pushNotifications: "",
  });

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFromData((prev) => {
      return {
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log("PRINTING FORM DATA..............");
    console.log(formData);
  }
  return (
    <div className="flex flex-col mx-auto w-[65%] mt-10 shadow-md rounded-sm mb-20 p-4">
      <form onSubmit={submitHandler} className="mx-auto flex flex-col w-[100%]">
        <label htmlFor="firstName" className="font-bold text-xl font-sans">
          First Name
        </label>
        <br />
        <input
          type="text"
          id="firstName"
          value={formData.firstName}
          onChange={changeHandler}
          name="firstName"
          placeholder="First Name"
          className="outline-indigo-300 rounded-md p-2 border border-orange-300"
        />
        <br />
        <label htmlFor="lastName" className="font-bold text-xl font-sans">
          Last Name
        </label>
        <br />
        <input
          type="text"
          id="lastName"
          value={formData.lastName}
          onChange={changeHandler}
          name="lastName"
          placeholder="Last Name"
          className="outline-indigo-300 rounded-md p-2 border border-orange-300"
        />
        <br />
        <label htmlFor="email" className="font-bold text-xl font-sans">
          Email
        </label>
        <br />
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={changeHandler}
          name="email"
          placeholder="Email"
          className="outline-indigo-300 rounded-md p-2 border border-orange-300"
        />
        <br />
        <label htmlFor="country" className="font-bold text-xl font-sans">
          Country
        </label>
        <br />

        <select
          name="country"
          id="country"
          value={formData.country}
          onChange={changeHandler}
          className="outline-indigo-300 rounded-md p-2 border border-orange-300"
        >
          <option value="india">India</option>
          <option value="usa">USA</option>
          <option value="uk">UK</option>
          <option value="uae">UAE</option>
        </select>

        <br />
        <label htmlFor="streetAddress" className="font-bold text-xl font-sans">
          Street Address
        </label>
        <br />
        <input
          type="text"
          name="streetAddress"
          placeholder="street Address"
          value={formData.streetAddress}
          onChange={changeHandler}
          className="outline-indigo-300 rounded-md p-2 border border-orange-300"
          id="streetAddress"
        />

        <br />
        <label htmlFor="city" className="font-bold text-xl font-sans">
          City
        </label>
        <br />
        <input
          type="text"
          id="city"
          name="city"
          value={formData.city}
          onChange={changeHandler}
          className="outline-indigo-300 rounded-md p-2 border border-orange-300"
          placeholder="city"
        />

        <br />
        <label htmlFor="state" className="font-bold text-xl font-sans">
          State
        </label>
        <br />
        <input
          type="text"
          placeHolder="State"
          id="state"
          onChange={changeHandler}
          className="outline-indigo-300 rounded-md p-2 border border-orange-300"
          name="state"
          value={formData.state}
        />

        <br />
        <label htmlFor="postalCode" className="font-bold text-xl font-sans">
          ZIP/PostalCode
        </label>
        <br />
        <input
          type="number"
          placeHolder="PostalCode"
          id="postalCode"
          onChange={changeHandler}
          className="outline-indigo-300 rounded-md p-2 border border-orange-300"
          name="postalCode"
          value={formData.postalCode}
        />

        <br />
        <fieldset>
          <legend className="font-bold text-lg font-sans mb-2">By Email</legend>
          <div className="flex items-baseline gap-2">
            <input
              type="checkbox"
              id="comments"
              name="comments"
              value={formData.comments}
              onChange={changeHandler}
            />

            <div>
              <label htmlFor="comments" className="font-bold text-md font-sans">
                Comments
              </label>
              <p>Get notified when someones posts a comment on a posting</p>
            </div>
          </div>

          <div className="flex items-baseline gap-2">
            <input
              type="checkbox"
              id="candidate"
              name="candidate"
              value={formData.candidate}
              onChange={changeHandler}
            />

            <div>
              <label htmlFor="comments" className="font-bold text-md font-sans">
                Candidate
              </label>
              <p>Get notified when someones posts a comment on a posting</p>
            </div>
          </div>

          <div className="flex items-baseline gap-2">
            <input
              type="checkbox"
              id="offers"
              name="offers"
              value={formData.offers}
              onChange={changeHandler}
            />

            <div>
              <label htmlFor="offers" className="font-bold text-md font-sans">
                Offers
              </label>
              <p>Get notified when someones posts a comment on a posting</p>
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend className="font-bold text-lg">Push Notifications</legend>
          <p className="font-sans">
            These are delivered by SMS to your mobile number
          </p>

          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <input
                type="radio"
                id="pushEverything"
                name="pushNotifications"
                value="Everything"
                onChange={changeHandler}
              />
              <label htmlFor="pushEverything">Everything</label>
            </div>

            <div className="flex gap-2">
              <input
                type="radio"
                id="pushEmail"
                name="pushNotifications"
                value="Same as email"
                onChange={changeHandler}
              />
              <label htmlFor="pushEmail">Same as Email</label>
            </div>

            <div className="flex gap-2">
              <input
                type="radio"
                id="pushNothing"
                name="pushNotifications"
                value="no Push Notifications"
                onChange={changeHandler}
              />
              <label htmlFor="pushNothing">No Push Notification</label>
            </div>
          </div>
        </fieldset>
        <button className="bg-sky-600 cursor-pointer rounded-md w-[20%] mt-4 px-4 py-2 text-white font-sans text-xl hover:bg-sky-400">
          Save
        </button>
      </form>
    </div>
  );
}

export default App;
