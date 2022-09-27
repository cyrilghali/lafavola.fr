import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Herr+Von+Muellerhoff&display=swap" rel="stylesheet" /> 
        <script
          async
          id="chiffre:analytics"
          src="https://chiffre.io/analytics.js"
          data-chiffre-project-id="CftpjbMo3wqA2GBo"
          data-chiffre-public-key="pk.wcpsC0AJieEYzKdLlQWx2h0AFhQvpCHne05ehkJnA0k"
          referrerpolicy="origin"
          crossOrigin="anonymous"
        />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
