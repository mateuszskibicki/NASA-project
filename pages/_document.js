import Document, {Head, Main, NextScript} from 'next/document';

export default class MyDocument extends Document {
    render(){
        return (
            <html lang="en-UK">
                <Head>
                    {
                        //Manifest.json/icons/meta
                    }
                    <link rel="manifest" href="manifest.json" />
                    <meta name='keywords' content='NASA, nasa, next.js, node.js, react.js' />
                    <meta name="mobile-web-app-capable" content="yes" />
                    <meta name="apple-mobile-web-app-capable" content="yes" />
                    <meta name="application-name" content="NASA project - Mateusz Skibicki" />
                    <meta name="apple-mobile-web-app-title" content="NASA project - Mateusz Skibicki" />
                    <meta name="theme-color" content="#6B5B95" />
                    <meta name="msapplication-navbutton-color" content="#6B5B95" />
                    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
                    <meta name="msapplication-starturl" content="/" />
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                    <link rel="icon" type="image/png" sizes="512x512" href="/static/icons/icon-512x512.png" />
                    <link rel="apple-touch-icon" type="image/png" sizes="512x512" href="/static/icons/icon-512x512.png" />
                    <link rel="icon" type="image/png" sizes="384x384" href="/static/icons/icon-384x384.png" />
                    <link rel="apple-touch-icon" type="image/png" sizes="384x384" href="/static/icons/icon-384x384.png" />
                    <link rel="icon" type="image/png" sizes="192x192" href="/static/icons/icon-192x192.png" />
                    <link rel="apple-touch-icon" type="image/png" sizes="192x192" href="/static/icons/icon-192x192.png" />
                    <link rel="icon" type="image/png" sizes="152x152" href="/static/icons/icon-152x152.png" />
                    <link rel="apple-touch-icon" type="image/png" sizes="152x152" href="/static/icons/icon-152x152.png" />
                    <link rel="icon" type="image/png" sizes="144x144" href="/static/icons/icon-144x144.png" />
                    <link rel="apple-touch-icon" type="image/png" sizes="144x144" href="/static/icons/icon-144x144.png" />
                    <link rel="icon" type="image/png" sizes="128x127" href="/static/icons/icon-128x128.png" />
                    <link rel="apple-touch-icon" type="image/png" sizes="128x127" href="/static/icons/icon-128x128.png" />
                    <link rel="icon" type="image/png" sizes="96x96" href="/static/icons/icon-96x96.png" />
                    <link rel="apple-touch-icon" type="image/png" sizes="96x96" href="/static/icons/icon-96x96.png" />
                    <link rel="icon" type="image/png" sizes="72x72" href="/static/icons/icon-72x72.png" />
                    <link rel="apple-touch-icon" type="image/png" sizes="72x72" href="/static/icons/icon-72x72.png" />
                    {
                        //Oswald font  
                    }
                    <link href="https://fonts.googleapis.com/css?family=Oswald:200,300,400,700" rel="stylesheet" />
                    {
                        //Bootstrap 4.2.1
                    }
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous"/>
                    {
                        //Custom CSS
                    }
                    <link rel="stylesheet" href="static/main.css"/>
                    {
                        //Fontawesome
                    }
                    <script defer src="https://use.fontawesome.com/releases/v5.6.3/js/all.js" integrity="sha384-EIHISlAOj4zgYieurP0SdoiBYfGJKkgWedPHH4jCzpCXLmzVsw1ouK59MuUtP4a1" crossorigin="anonymous"></script>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                    {
                        //Bootstrap 4.2.1 JS files
                    }
                    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous" />
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js" integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut" crossorigin="anonymous" />
                    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js" integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k" crossorigin="anonymous" />
                </body>
            </html>
        )
    }
}