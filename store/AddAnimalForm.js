export default {
  view: "Form",
  formData: {},
  handleFormSubmit(event) {
    console.log("Form Submitted");
    event.preventDefault();
    try {
      this.formData = {
        name: document.getElementById("name").value,
        sex: document.getElementById("sex").value,
        color: document.getElementById("color").value,
        eyeColor: document.getElementById("eye-color").value,
        sire: document.getElementById("sire").value,
        dam: document.getElementById("dam").value,
        dob: document.getElementById("dob").value,
        dod: document.getElementById("dod").value || null,
        breeder: document.getElementById("breeder").value,
        owner: document.getElementById("owner").value || null
      };
      console.log(this.formData);
      this.resetForm();
    } catch (error) {
      console.log(`Something went wrong: ${error}`);
    }
  },
  resetForm() {
    document.getElementById("name").value = "";
    document.getElementById("sex").value = "";
    document.getElementById("color").value = "";
    document.getElementById("eye-color").value = "";
    document.getElementById("sire").value = "";
    document.getElementById("dam").value = "";
    document.getElementById("dob").value = "";
    document.getElementById("dod").value = "";
    document.getElementById("breeder").value = "";
    document.getElementById("owner").value = "";
    this.formData = {};
  }
};
