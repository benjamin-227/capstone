import html from "html-literal";

export default form => html`
  <main>
    <div class="container">
      <div class="animal-form">
        <h1>Add New Animal</h1>
        <form id="animal-form">
          <div class="row">
            <div class="more">
              <label for="name">Name</label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Name"
                required
              />
            </div>
            <div class="less">
              <label for="sex">Sex</label>
              <select id="sex" name="sex" required>
                <option value="" disabled selected hidden>Select sex</option>
                <option value="m">Male</option>
                <option value="f">Female</option>
                <option value="u">Unsexed</option>
              </select>
            </div>
          </div>
          <div class="row">
            <div class="input-box">
              <label for="color">Color</label>
              <select id="color" name="color" required>
                <option value="" disabled selected hidden>Select color</option>
                <option value="Black">Black</option>
                <option value="Grey">Grey</option>
                <option value="Brown">Brown</option>
                <option value="Caramel">Caramel</option>
                <option value="Albino">Albino</option>
                <option value="Apricot">Apricot</option>
                <option value="Cinnacot">Cinnacot</option>
                <option value="Cinnamon">Cinnamon</option>
                <option value="Platinum">Platinum</option>
                <option value="Leusistic">Leusistic</option>
                <option value="Piebald">Piebald</option>
              </select>
            </div>
            <div class="input-box">
              <label for="eye-color">Eye Color</label>
              <select id="eye-color" name="eyeColor" required>
                <option value="" disabled selected hidden
                  >Select eye color</option
                >
                <option value="Black">Black</option>
                <option value="black-red">Odd Eyed (Black & Red)</option>
                <option value="red-ruby">Odd Eyed (Red & Ruby)</option>
                <option value="Red">Red</option>
                <option value="Ruby">Ruby</option>
              </select>
            </div>
          </div>
          <div class="row">
            <div class="input-box">
              <label for="sire">Sire</label>
              <input
                type="text"
                name="sire"
                id="sire"
                placeholder="Enter sire name"
                required
              />
            </div>
            <div class="input-box">
              <label for="dam">Dam</label>
              <input
                type="text"
                name="dam"
                id="dam"
                placeholder="Enter dam name"
                required
              />
            </div>
          </div>
          <div class="row">
            <div class="input-box">
              <label for="dob">Date of Birth</label>
              <input type="date" name="dob" id="dob" required />
            </div>
            <div class="input-box">
              <label for="dod">Date of Death</label>
              <input type="date" name="dod" id="dod" />
            </div>
          </div>
          <div class="row">
            <div class="input-box">
              <label for="breeder">Breeder</label>
              <input
                type="text"
                name="breeder"
                placeholder="Enter name of breeder"
                id="breeder"
                required
              />
            </div>
            <div class="input-box">
              <label>Owner</label>
              <input
                type="text"
                name="owner"
                id="owner"
                placeholder="Enter name of current owner"
              />
            </div>
          </div>
          <div class="submit-button">
            <button class="clear-form" type="button">
              clear
            </button>
            <input type="submit" value="submit" />
          </div>
        </form>
      </div>
    </div>
  </main>
`;
