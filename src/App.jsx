import "./App.css";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "India",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
    comments: false,
    candidates: false,
    offers: false,
    pushNotifications: "",
  });

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();

    console.log("Finally Printing Form Data");
    console.log(formData);
  }

  return (
    <div className="max-w-[650px] mx-auto p-6 border-2">
      <h1 className="text-center font-bold text-3xl">React Forms</h1>
      <form onSubmit={submitHandler}>
        <label htmlFor="firstName" className="font-semibold text-sm">
          First Name
        </label>
        <br></br>
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={changeHandler}
          required
          className="w-[100%] border-2 rounded-md p-3 mt-2"
        />
        <br></br>
        <label htmlFor="lastName" className="font-semibold text-sm">
          Last Name
        </label>
        <br></br>
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={changeHandler}
          className="w-[100%] border-2 rounded-md p-3 mt-2"
          required
        />

        <br></br>
        <label htmlFor="email" className="font-semibold text-sm">
          Email Address
        </label>
        <br></br>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="abc@xyz.com"
          value={formData.email}
          onChange={changeHandler}
          className="w-[100%] border-2 rounded-md p-3 mt-2"
          required
        />

        <br></br>
        <label htmlFor="country" className="font-semibold text-sm">
          Country
        </label>
        <br></br>
        <select
          type="text"
          name="country"
          id="country"
          onChange={changeHandler}
          value={formData.country}
          className="w-[100%] border-2 rounded-md p-3 mt-2"
          required
        >
          <option>India</option>
          <option>US</option>
          <option>Cananda</option>
          <option>Mexico</option>
        </select>

        <br></br>
        <label htmlFor="streetAddress" className="font-semibold text-sm">
          Street Address
        </label>
        <br></br>
        <input
          type="text"
          name="streetAddress"
          id="streetAddress"
          placeholder="Street Address"
          value={formData.streetAddress}
          onChange={changeHandler}
          className="w-[100%] border-2 rounded-md p-3 mt-2"
          required
        />

        <br></br>
        <label htmlFor="city" className="font-semibold text-sm">
          City
        </label>
        <br></br>
        <input
          type="text"
          name="city"
          id="city"
          placeholder="City"
          value={formData.city}
          onChange={changeHandler}
          className="w-[100%] border-2 rounded-md p-3 mt-2"
          required
        />

        <br></br>
        <label htmlFor="state" className="font-semibold text-sm">
          State/Province
        </label>
        <br></br>
        <input
          type="text"
          name="state"
          id="state"
          placeholder="Bihar"
          value={formData.state}
          onChange={changeHandler}
          className="w-[100%] border-2 rounded-md p-3 mt-2"
          required
        />

        <br></br>
        <label htmlFor="postalCode" className="font-semibold text-sm">
          Postal Code
        </label>
        <br></br>
        <input
          type="text"
          name="postalCode"
          id="postalCode"
          placeholder="221003"
          value={formData.postalCode}
          onChange={changeHandler}
          className="w-[100%] border-2 rounded-md p-3 mt-2"
          required
        />

        <br></br>

        <fieldset>
          <legend className="font-semibold text-sm">By Email</legend>
          <div className="flex gap-2">
            <div className="flex items-center">
              <input
                id="comments"
                name="comments"
                type="checkbox"
                checked={formData.comments}
                onChange={changeHandler}
                className="h-4 w-6 rounded-md"
              />
            </div>

            <div className="pt-4 text-sm">
              <label htmlFor="comments" className="font-semibold">
                Comments
              </label>
              <p className="text-gray-500">
                Get notified when someones posts a comment on a posting.
              </p>
            </div>
          </div>

          <div className="flex gap-2">
            <div className="flex items-center">
              <input
                id="candidates"
                name="candidates"
                type="checkbox"
                checked={formData.candidates}
                className="h-4 w-6 rounded-md"
                onChange={changeHandler}
              />
            </div>
            <div className="pt-4 text-sm">
              <label htmlFor="candidates" className="font-semibold">
                Candidates
              </label>
              <p className="text-gray-500">
                Get notified when a candidate applies for a job.
              </p>
            </div>
          </div>

          <div className="flex gap-2">
            <div className="flex items-center">
              <input
                id="offers"
                name="offers"
                type="checkbox"
                checked={formData.offers}
                onChange={changeHandler}
                className="h-4 w-6 rounded-md"
              />
            </div>
            <div className="pt-4 text-sm">
              <label htmlFor="offers" className="font-semibold">
                Offers
              </label>
              <p className="text-gray-500">
                Get notified when a candidate accepts or rejects an offer.
              </p>
            </div>
          </div>
        </fieldset>
        <br></br>
        <fieldset>
          <legend className="font-semibold leading-6 text-gray-900 text-sm contents">
            Push Notifications
          </legend>
          <p className="text-sm text-gray-500">
            These are delivered via SMS to your mobile phone.
          </p>
          <div className="mt-4 space-y-2">
            <div className="flex items-center">
              <input
                id="pushEverything"
                name="pushNotifications"
                type="radio"
                value="Everything"
                className="h-4 w-4"
                onChange={changeHandler}
              />
              <label
                htmlFor="pushEverything"
                className="ml-3 text-sm font-medium leading-6 text-gray-900"
              >
                Everything
              </label>
            </div>

            <div className="flex items-center">
              <input
                id="pushEmail"
                name="pushNotifications"
                type="radio"
                value="Same as Email"
                className="h-4 w-4"
                onChange={changeHandler}
              />
              <label
                htmlFor="pushEmail"
                className="ml-3 text-sm font-medium leading-6 text-gray-900"
              >
                Same as a Email
              </label>
            </div>

            <div className="flex items-center">
              <input
                id="pushNothing"
                name="pushNotifications"
                type="radio"
                value="No Notifications"
                className="h-4 w-4"
                onChange={changeHandler}
              />
              <label
                htmlFor="pushNothing"
                className="ml-3 text-sm font-medium leading-6 text-gray-900"
              >
                No Push Notifications
              </label>
            </div>
          </div>
        </fieldset>
        <div className="my-3">
          <button className="bg-blue-500 hover:bg-blue-700 text-white rounded-md font-bold py-2 px-4">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
