describe('Choose Product on Magento', () => {
    it('selects a product', () => {
        cy.visit('https://magento.softwaretestingboard.com/') // Ganti URL dengan URL halaman utama situs URL pada quiz 3

        // Misalkan Anda ingin mengklik pada produk dengan teks tertentu, seperti "Product Name".
        // Anda perlu mengidentifikasi elemen produk dan kemudian mengkliknya.
        cy.contains("Product Name").click()

        // Setelah mengklik produk, Anda dapat melanjutkan dengan tindakan lain seperti menambahkannya ke keranjang, dll.
    })
})
