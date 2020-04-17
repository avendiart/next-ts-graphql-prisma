import Document, { Html, Head, Main, NextScript } from 'next/document'

class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <div id="modal">{/* Modals will be rendered here */}</div>
          <div id="portal">{/* Portals will be rendered here */}</div>
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default CustomDocument
