# QR
Small program that runs in the terminal using NodeJS and the package [qrcode-svg](https://www.npmjs.com/package/qrcode-svg) to generate an svg-image of a qr-code to a specified url.

The options in the terminal are:
* Url: The url the qr-code should point to.
* Padding: Whitespace padding.
* Size: Size in pixels (the qr-code here is a square).
* Correction level: Error correction level, L, M, H, or Q.
* Filename: Name of the output file with the qr-code. It will be put in the same location this program is run in.

## Note
The generated qr-code will be black on a white background.

## Customization
More customizations requires editing the code. Check out the homepage to [qrcode-svg](https://www.npmjs.com/package/qrcode-svg) for more options.