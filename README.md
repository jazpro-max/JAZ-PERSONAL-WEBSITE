# Josephat Personal Website

A responsive personal portfolio website built with Node.js, Express, HTML, CSS and JavaScript.

## Run locally

Make sure Node.js 18+ is installed.

```bash
npm install
npm start
```

Then open:

http://localhost:3000

## Deploy to Render

### Option 1: Using GitHub

1. Create a GitHub repository.
2. Upload all files in this project.
3. Go to Render and sign in.
4. Choose **New +** → **Web Service**.
5. Connect your GitHub repository.
6. Use these settings:
   - Runtime: Node
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Plan: Free
7. Click **Create Web Service**.
8. Wait for the build and deployment to finish.
9. Open the Render URL.

### Important

The Express server uses:

```js
const PORT = process.env.PORT || 3000;
```

This allows Render to provide its own port.

The server also listens on:

```js
app.listen(PORT, "0.0.0.0", ...)
```

which is suitable for Render.

## Customize before publishing

Open `public/index.html` and change:

- Email address
- GitHub URL
- LinkedIn URL
- About text
- Skills
- Projects
- Location if desired

You can also replace the `JA` profile circle with your own photo later.

## Contact form

The current form validates and accepts messages through the Express API, but it does not send email.

To receive messages in your email inbox, connect an email provider/API later and store its credentials as Render environment variables.

## Health check

After deployment, this endpoint can be used to check that the server is running:

`/health`

Example:

`https://YOUR-RENDER-DOMAIN.onrender.com/health`
