# PWA Learn

> In this repository we will learn how build a PWA from scratch, from concepts to practice.

## What is a PWA?

> "PWA is the supremacy of web development" - SENA, Matheus

PWA (Progressive Web App) is a website that has ability to work as a app, with PWA we were able to do amazing things that until recently was impossible in the web development environment, for example:
- Push notification
- Splash Screen
- Access to mobile API like camera<br/>
**AND IN MY OPINION THE MOST SPECTACULAR FUNCTIONALY**
- PWA's can work offline!

## Chapter 1 - Manifest

Web App Manifest give some informations about your web app (like: name, icon, color theme and etc), **it's used when a user install your page on smartphone home screen.**

### What is the structure like?

> In this example I'm using a JSON file

```json
{
    "name": "Your APP name",
    "short_name": "Your App short name (when name don't fit on screen)",
    "lang": "Lang of your app",
    "orientation": "Orientation of screen",
    "theme_color": "Hexdecimal code of color theme",
    "background_color": "Hexdecimal code of color theme",
    "description": "Tell something about your app :p",
    "display": "display mode e.g standalone(native app), fullscreen etc..",
    "starts_url": "path of initial url",
    "scope": "defines the navigation scope",
    "icons": [
        {
            "src": "path of img",
            "sizes": "WxH in px>",
            "type": "image/<extension e.g png>"
        }
    ]
}
```
### How add this on my website?

is really simple and you'll use **ONLY ONE LINE!**
```html
 <link rel="manifest" href="manifest.json">
```
I recommend these links to learn more about manifest

- [Developer Mozilla](https://developer.mozilla.org/en-US/docs/Web/Manifest)
- [Developers Google](https://developers.google.com/web/fundamentals/web-app-manifest)

