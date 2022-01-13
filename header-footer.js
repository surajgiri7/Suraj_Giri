// I tried to make a custom footer element using JS but could not make it work. So I used
// txt file hack (footer.txt) that I found on google.

class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <p>Copyright &copy; <script>document.write(new Date().getFullYear());</script>, Suraj Giri</p>
    `;
  }
}

customElements.define('my-footer', MyFooter);
