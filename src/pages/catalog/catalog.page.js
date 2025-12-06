import { API_BASE } from "/src/config/constants.js";
import "./components/catalog-element.component";
import {CatalogService} from "/src/services/catalog.service.js";

class CatalogPage extends HTMLElement {
    items = [];
    categories = [];
    categorizedItems = {};
    currentCategory = "";

    getElements() {
        const service = new CatalogService(API_BASE);
        service.getItems().then(items => {
            this.items = items;
            this.categories = [...new Set(items.flatMap(item => item.category))];
            
            items.forEach(item => {
                if (this.categorizedItems[item.category] === undefined) {
                    this.categorizedItems[item.category] = [];
                }
                this.categorizedItems[item.category].push(item);
            });

            this.currentCategory = Object.keys(this.categorizedItems)[0];
            this.render();
        });
    }

    render() {
        let elementsHTML;
        let nav = "";

        if (this.categories.length !== 0) {
            nav = `
                <div class="catalog__nav">
                    ${
                        this.categories.map(category => `
                            <a class="catalog__nav__link">${category}</a>
                        `).join('')
                    }
                </div>
            `;
        }
        
        if (this.currentCategory && this.categorizedItems[this.currentCategory]) {
            elementsHTML = `
                ${
                    this.categorizedItems[this.currentCategory].map(item =>`
                        <catalog-element
                            imgsrc="${item.image}"
                            name="${item.title}"
                            price="${item.price}"
                            currency="${item.currency}"
                        ></catalog-element>
                    `).join('')
                }
            `;
        } else {
            elementsHTML = "<p>No items available</p>";
        }

        this.innerHTML = `
            <section class="catalog">
                <div class="container">
                    <div class="content">
                        <header-component></header-component>
                        <h2 class="h2-default catalog__title">our pottery</h2>
                        <div class="catalog__content">
                            ${nav}
                            <div class="catalog__elements">
                                ${elementsHTML}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer-component></footer-component>
        `;

        if (nav) {
            const navLinks = this.querySelectorAll('.catalog__nav__link');
            navLinks.forEach(link => {
                if (link.textContent === this.currentCategory) {
                    link.classList.add('catalog__nav__link--selected');
                } else {
                    link.classList.remove('catalog__nav__link--selected');
                }
                link.addEventListener('click', () => {
                    this.currentCategory = link.textContent;
                    this.render();
                });
            });
        }
    }

    connectedCallback() {
        this.render();
        this.getElements();
    }
}

customElements.define("catalog-page", CatalogPage);

