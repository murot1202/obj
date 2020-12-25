let a, b, c
for (let i = 1; i < 11; i++) {
    a = prompt('Ismingizni kiriting', ': Ismini yozomidgon dodr')
    b = prompt("Yoshingizni kiriting", ': Yoshiniyam bilmidgon dodr')

    client = {
        seria: 'Foydalanuvchi' + ' ' + i,
        ism: 'Sizning ismingiz' + ' ' + a,
        yosh: 'Sizning yosh' + ' ' + b,
    }
    
    console.log(client.seria);
    console.log(client.ism);
    console.log(client.yosh);
    console.log(client);
}