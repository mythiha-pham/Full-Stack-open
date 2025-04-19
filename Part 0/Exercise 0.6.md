::: mermaid

sequenceDiagram
    participant User
    participant Browser
    participant Server

    Note left of User: Types note content and clicks the "Save" button

    User->>Browser: Submit form

    Note right of Browser: Intercepts form submit (preventDefault)
    Browser->>Browser: Creates a new note,<br> adds it to the note list and rerenders DOM

    Browser->>Server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate Server
    Server->>Server: Processes JSON and adds to notes
    Server-->>Browser: HTTP 201 created
    deactivate Server

    Note right of Browser: No page reload needed