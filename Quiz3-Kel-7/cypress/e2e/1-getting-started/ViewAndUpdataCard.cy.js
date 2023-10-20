describe('View and Update Shopping Cart on Magento', () => {
    it('views and updates the shopping cart', () => {
        cy.visit('https://magento.softwaretestingboard.com/') // menyesuaikan dengan situs url pada soal quiz 3

        // Misalkan kita ingin periksa isi keranjang belanja dengan mengklik ikon keranjang.
        cy.get('.minicart-wrapper').click()

        // Selanjutnya, kita bisa memeriksa elemen-elemen yang mewakili produk di dalam keranjang
        // dan juga tindakan seperti menghapus item dari keranjang.
        
        // Contoh: Mengklik tombol "Remove" untuk menghapus item dari keranjang
        cy.get('.action-delete').first().click()

        // Contoh: Kembali ke halaman utama setelah memeriksa atau mengupdate keranjang
        cy.visit('https://magento.softwaretestingboard.com/')

        // Lakukan tindakan lain yang sesuai sesuai dengan skenario yang ingin Anda uji.
    })
})
