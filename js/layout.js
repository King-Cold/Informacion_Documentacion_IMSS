class ImssHeader extends HTMLElement {
    connectedCallback() {
        this.style.display = 'block';
        const prefix = this.getAttribute('path-prefix') || '';
        const showTitle = this.getAttribute('show-title') === 'true';
        
        let unidadInfo = '';
        if (showTitle) {
            unidadInfo = `
                    <div class="unidad-info">
                        <span class="instituto">Instituto Mexicano del Seguro Social</span>
                        <span class="umf">Unidad de Medicina Familiar No. 20</span>
                    </div>
            `;
        }

        this.innerHTML = `
            <header class="panel-superior">
                <div class="container-custom flex-header ${showTitle ? '' : 'header-centrado'}">
                    <div class="logos-brand">
                        <img src="${prefix}img/logo-gobierno.png" alt="Gobierno de México" class="logo-gob-header">
                        <div class="separador-logos"></div>
                        <img src="${prefix}img/logo-imss.png" alt="IMSS" class="logo-imss">
                    </div>
                    ${unidadInfo}
                </div>
            </header>
        `;
    }
}

class ImssFooter extends HTMLElement {
    connectedCallback() {
        this.style.display = 'block';
        this.innerHTML = `
            <style>
                .footer-minimalista {
                    background-color: transparent;
                    color: #777;
                    padding: 40px 0 20px 0;
                    font-size: 13px;
                    text-align: center;
                    border-top: 1px solid rgba(0,0,0,0.06);
                    margin-top: 50px;
                    font-family: 'Poppins', sans-serif;
                }
                .link-footer {
                    color: var(--verde-imss, #006657) !important;
                    text-decoration: none !important;
                    font-weight: 600 !important;
                    transition: all 0.3s ease !important;
                }
                .link-footer:hover {
                    color: var(--dorado-gob, #B38E5D) !important;
                }
                .footer-flex {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 40px;
                }
                @media (max-width: 768px) {
                    .footer-flex { flex-direction: column; gap: 12px; }
                }
            </style>
            <footer class="footer-minimalista">
                <div class="footer-flex">
                    <span>&copy; 2024 IMSS - Unidad de Medicina Familiar No. 20</span>
                    <span>Plataforma Oficial &middot; <a href="https://www.gob.mx/imss" target="_blank" rel="noopener noreferrer" class="link-footer">gob.mx/imss</a></span>
                </div>
            </footer>
        `;
    }
}

customElements.define('imss-header', ImssHeader);
customElements.define('imss-footer', ImssFooter);
