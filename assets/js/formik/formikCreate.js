export const formikCreate = {
  init: (shadowRoot) => {
    console.log(`formik::create: init`);

    let wrapper = document.createElement("span");
    wrapper.setAttribute("class", "wrapper");
    let icon = document.createElement("span");
    icon.setAttribute("class", "icon");
    icon.setAttribute("tabindex", 0);
    let info = document.createElement("span");
    info.setAttribute("class", "info");

    // Take attribute content and put it inside the info span
    let text = "data-text";
    info.textContent = text;

    // Insert icon
    let imgUrl = "assets/images/logo.svg";
    let img = document.createElement("img");
    img.src = imgUrl;
    icon.appendChild(img);

    let style = document.createElement("style");

    style.textContent = `
        .wrapper {
          position: relative;
        }
        
        .info {
          font-size: 0.8rem;
          width: 200px;
          display: inline-block;
          border: 1px solid black;
          padding: 10px;
          background: white;
          border-radius: 10px;
          opacity: 0;
          transition: 0.6s all;
          position: absolute;
          bottom: 20px;
          left: 10px;
          z-index: 3;
        }
        
        img {
          width: 1.2rem;
        }
        
        .icon:hover + .info, .icon:focus + .info {
          opacity: 1;
        }`;

    // attach the created elements to the shadow dom
    shadowRoot.appendChild(style);
    shadowRoot.appendChild(wrapper);
    wrapper.appendChild(icon);
    wrapper.appendChild(info);

    formikCreate.createForm(shadowRoot);
  },

  createForm: (shadowRoot) => {
    // Create a break line element
    var br = document.createElement("img");
    // Create a form synamically
    var form = document.createElement("form");
    form.setAttribute("method", "post");
    form.setAttribute("action", "submit.php");

    // Create an input element for Full Name
    var FN = document.createElement("input");
    FN.setAttribute("type", "text");
    FN.setAttribute("name", "FullName");
    FN.setAttribute("placeholder", "Full Name");

    // Create an input element for date of birth
    var DOB = document.createElement("input");
    DOB.setAttribute("type", "text");
    DOB.setAttribute("name", "dob");
    DOB.setAttribute("placeholder", "DOB");

    // Create an input element for emailID
    var EID = document.createElement("input");
    EID.setAttribute("type", "text");
    EID.setAttribute("name", "emailID");
    EID.setAttribute("placeholder", "E-Mail ID");

    // Create an input element for password
    var PWD = document.createElement("input");
    PWD.setAttribute("type", "password");
    PWD.setAttribute("name", "password");
    PWD.setAttribute("placeholder", "Password");

    // Create an input element for retype-password
    var RPWD = document.createElement("input");
    RPWD.setAttribute("type", "password");
    RPWD.setAttribute("name", "reTypePassword");
    RPWD.setAttribute("placeholder", "ReEnter Password");

    // create a submit button
    var s = document.createElement("input");
    s.setAttribute("type", "submit");
    s.setAttribute("value", "Submit");

    // Append the full name input to the form
    form.appendChild(FN);

    // Inserting a line break
    form.appendChild(br.cloneNode());

    // Append the DOB to the form
    form.appendChild(DOB);
    form.appendChild(br.cloneNode());

    // Append the emailID to the form
    form.appendChild(EID);
    form.appendChild(br.cloneNode());

    // Append the Password to the form
    form.appendChild(PWD);
    form.appendChild(br.cloneNode());

    // Append the ReEnterPassword to the form
    form.appendChild(RPWD);
    form.appendChild(br.cloneNode());

    // Append the submit button to the form
    form.appendChild(s);

    shadowRoot.appendChild(form);
  },
};
