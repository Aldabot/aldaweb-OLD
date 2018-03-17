export default function renderFullPage(html) {
    return `
<!doctype html>
<html>
<head>
<title>Aldabot</title

    <meta name="google-site-verification" content="U7cjJ3xFANXWs-HOmv6mKJdnHzjcFk1a2UZ2VkeXJm4" />
    <meta name="viewport" content="width=device-width, initial-scale=1">

     <link href="stylesheets/main.css" rel="stylesheet">
</head>
<body class="uk-offcanvas-content">
    <div id="root" class="uk-overflow-hidden uk-position-relative"></div>
    <script type="text/javascript" src="main.js"></script>
</body>
</html>
`;
}
