import "./components/hero-section.component.js";
import "./components/about-preview-section.component.js";
import "/src/components/get-in-touch/get-in-touch.component.js";
import "./components/works-gallery-section.component.js";
import potter from "/src/img/promo/potter-workshop.jpg";

class PromoPage extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <section class="promo">
                <div class="container">
                    <img class="promo__section-1__potter-image" src=${potter} alt="potter" />
                    <div class="content">
                        <hero-section></hero-section>
                        <about-preview-section></about-preview-section>
                        <get-in-touch-component></get-in-touch-component>
                        <works-gallery-section></works-gallery-section>
                    </div>
                </div>
            </section>
            <footer-component></footer-component>
        `;
    }
}

customElements.define("promo-page", PromoPage);