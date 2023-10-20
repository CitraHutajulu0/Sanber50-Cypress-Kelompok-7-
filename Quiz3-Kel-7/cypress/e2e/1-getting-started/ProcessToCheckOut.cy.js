describe('Process to Checkout on Magento', () => {
    it('performs the checkout process', () => {
        cy.visit('https://magento.softwaretestingboard.com/') // Ganti URL dengan URL halaman utama situs Anda

        // Misalnya kita ingin memilih produk dan menambahkannya ke keranjang.
        cy.contains("Product Name").click() // Ganti dengan teks produk yang ingin kita pilih
        cy.get('.tocart').click() // Misalkan ini adalah tombol untuk menambahkan ke keranjang

        // Setelah menambahkan produk ke keranjang, Anda dapat melanjutkan ke halaman checkout.
        cy.get('.action.primary.checkout').click() // Misalkan ini adalah tombol untuk checkout

        // Selanjutnya, Anda bisa mengisi formulir informasi pengiriman dan metode pembayaran sesuai dengan kebutuhan.

        // Contoh: Mengisi informasi pengiriman
        cy.get('#firstname').type("John")
        cy.get('#lastname').type("Doe")
        cy.get('#street_1').type("123 Main St")
        // Lanjutkan dengan mengisi elemen lainnya sesuai kebutuhan.

        // Contoh: Pilih metode pembayaran
        cy.get('#p_method_checkmo').click() // Misalkan ini adalah metode pembayaran yang dipilih

        // Contoh: Lanjutkan ke halaman konfirmasi pesanan
        cy.get('.primary').click() // Misalkan ini adalah tombol untuk melanjutkan

        // Lakukan tindakan lain yang sesuai sesuai dengan skenario yang ingin Anda uji.
    })
})
