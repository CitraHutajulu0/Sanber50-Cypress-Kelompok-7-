describe('Choose Product on Magento', () => {
    it('selects a product', () => {
        cy.visit('https://magento.softwaretestingboard.com/') // Ganti URL dengan URL halaman utama situs URL pada quiz 3
describe('Pilih Produk', () => {
    it('Tambah Produk', () => {
      cy.visit('https://magento.softwaretestingboard.com/')

        // Misalkan Anda ingin mengklik pada produk dengan teks tertentu, seperti "Product Name".
        // Anda perlu mengidentifikasi elemen produk dan kemudian mengkliknya.
        cy.contains("Product Name").click()

        // Setelah mengklik produk, Anda dapat melanjutkan dengan tindakan lain seperti menambahkannya ke keranjang, dll.
      cy.contains('Women').click()
      cy.contains('Radiant Tee').click()
      cy.contains('XS').click()
      cy.get('#option-label-color-93-item-56').click()
      cy.get('#product-addtocart-button').click()
      cy.get('#maincontent').should('contain', 'You added Radiant Tee to your')
