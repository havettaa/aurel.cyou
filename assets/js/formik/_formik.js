import { formikCreate } from "./formikCreate.js";

export const formik = {
  create: () => {
    console.log(`formik: create`);
  },

  init: () => {
    console.log(`formik: Init`);

    formikCreate.init();
  },
};

const formikTemplate = document.createElement("template");
formikTemplate.innerHTML = `
<div>
    <!--Healine-->
    <p>Rating</p>
    <!--rating-stars-->
    <div class="rating-stars">
        <span class="rating-star star-1">inside</span>
    </div>
</div>
`;

export class Formik extends HTMLElement {
  constructor() {
    console.log(`formik: constructor`);

    super();

    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(formikTemplate.content.cloneNode(true));

    formikCreate.init(shadowRoot);
  }

  static get observedAttributes() {
    return ["uniqueid", "datajson"];
  }

  // A getter/setter for an uniqueid property.
  get uniqueid() {
    return this.hasAttribute("uniqueid");
  }

  set uniqueid(val) {
    if (val) {
      this.setAttribute("uniqueid", "");
    } else {
      this.removeAttribute("uniqueid");
    }
  }

  // A getter/setter for an datajson property.
  get datajson() {
    console.warn(`get datajson: ${this._datajson}`);
    return this._datajson;
  }

  set datajson(val) {
    console.warn(`set datajson: ${val}`);
    if (val) this._datajson = val;
  }

  adoptedCallback() {
    console.log(`formik: adoptedCallback`);
  }

  attributeChangedCallback(name, oldVal, newVal) {
    console.log(`formik: attributeChangedCallback`);

    if (oldVal !== newVal) {
      console.log(`${name} changed to ${newVal}`);
    }
  }

  render() {
    console.log(`formik: render`);
    return "<hr/>";
  }

  disconnectedCallback() {
    console.log(`formik: disconnectedCallback`);
  }

  connectedCallback() {
    console.log(`formik: connectedCallback`);
  }
}
console.warn(`formik: customElements.define`);
window.customElements.define("formik-js", Formik);

class Parent extends HTMLElement {
  connectedCallback() {
    console.log("PARENT COMPONENT");
    this.innerHTML = " <b>Parent</b>";
  }
}

class Child extends Parent {
  connectedCallback() {
    super.connectedCallback();
    console.log("CHILD COMPONENT");

    this.innerHTML = "<b>Child</b>";
  }
}

window.customElements.define("my-child", Child);
