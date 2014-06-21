# Türkçe Deasciifier

Deasciifier yabancı metinleri Türkçeye çevirmenize yarayan bir uygulamadır.

## Gereksinimler

- Mac OS X
- node / npm

## Yükleme

```bash
npm install deasciifier -g
```

Yüklemeyi tamamladıktan sonra, aşağıdaki pencereye onay verin:

![Service Install](_asset/ss.png)

## Kullanım

```bash
$ echo "Nasilsiniz?" | deasciify
Nasılsınız?
```

```bash
$ echo "Saka mi bu?" | deasciify
Şaka mı bu?
```

### Node.js Kullanımı

```javascript
var Deasciifier = require("deasciifier");

var deascii = new Deasciifier();
deascii.deasciify("Nasilsiniz?"); //=> Nasılsınız?
deascii.deasciify("Saka mi bu?"); //=> Şaka mı bu?
```

## Lisans

MIT

---
Turkish text deasciifier and asciifier JavaScript library.
Deasciifier code directly converted by Mustafa Emre Acer from 
Dr. Deniz Yuret's Emacs Turkish Extension: http://www.denizyuret.com/turkish

