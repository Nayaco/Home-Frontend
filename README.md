## The front-end of the QSC Homepage

## API
/console/insert
```
 @ param {
   id:[optional]string
   filename: string
   description: string
 }
 @ res {
   status: 0/1
 }
```

---
/console/upload
```
 @ param {
  tag: [1...n]number
  file: binary
  }

 @ res {
   status: 0/1
 }

```
---

## ChangeLog

[2018/5/24] The font-end for binary-file upload can work now


## If there's any questions please contect with QSC-Gangdou