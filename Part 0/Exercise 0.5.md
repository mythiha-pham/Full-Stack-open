sequenceDiagram
    participant User
    participant Browser
    participant Server

    User->>Browser: Navigate to the single-page app version of the notes app
    Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate Server
    Server-->>Browser: HTML document (minimal skeleton)
    deactivate Server

    Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate Server
    Server-->>Browser: CSS file
    deactivate Server

    Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    activate Server
    Server-->>Browser: SPA JavaScript file
    deactivate Server

    Note right of Browser: JS executes immediately after loading
    Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate Server
    Server-->>Browser: [{ "content": "single page app does not reload the whole page", "date": "2019-05-25T15:15:59.905Z" }, ... ]
    deactivate Server

    Note right of Browser: No page reload needed for future actions