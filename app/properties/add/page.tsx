const PropertyForm = () => {
  return (
    <main>
      <div>
        <h2>The essentials</h2>
        <label htmlFor="name">
          {" "}
          Property Name
          <input type="text" />
        </label>
        <label htmlFor="description">
          {" "}
          Description
          <input type="text" />
        </label>

        <select id="property-type">
          <option value="">---Please choose an option</option>
          <option value="apartment">Apartment</option>
          <option value="house">House</option>
          <option value="condo">Condo</option>
          <option value="townhouse">Townhouse</option>
        </select>
      </div>
    </main>
  );
};
export default PropertyForm;
