# `site-la-plateforme`
> IMPORTANT: This is a work in progress and subject to major changes before the specified deadline.

A school project to remake it's official website (i.e. [laplateforme.io](https://laplateforme.io)), and add my personal touch to it. 
Hooooooray, let's do this!!!

## Description
> Original text in French: Aujourd’hui nous comptons sur vous et vos compétences fraîchement acquises pour réaliser une version à votre image, du site de La Plateforme_. Grâce à vos compétences fraîchement acquises refaire les pages suivantes du site de La Plateforme : la page d’accueil; la page qui-sommes-nous; la page aws Restart; la page de contact; la page news (avec des faux articles, sans redirection); la page de La Plateforme Start. En incluant des images, des textes, des vidéos... et ajoutez y votre touche personnelle.


Today we are counting on you and your newly acquired skills to create a version in your image, of the site of [La Plateforme_](https://laplateforme.io).

Thanks to your newly acquired skills, redo the following pages of the Platform site:
* The home page
* The page who are we
* The aws Restart page
* The contact page
* The news page (with fake articles, without redirection)
* The Start Platform page

By including images, texts, videos... and add your **personal touch**.

## Requirements

These are a couple of the main requirements for this school project:

1. The files must be named **accueil.html**, **qui-sommes-nous.html**, **aws-restart.html**, **contact.html**, **news.html**, **platforme-start.html**, **laplateforme.css** and must be found on github at *https://github.com/prenom-nom/site-la-plateforme*

> NOTE: In the spirit of "doing more", I added a couple of files (i.e. **manifest.json**, **laplateforme.js**) and a folder (i.e. **assets**).

## Jobs
> MOTTO: I'll always do [**more**](#More) 😜

The official deadline of the jobs below - according to [intra](https://intra.laplateforme.io) - was **10/28/2022 at 10:51 AM**.

| No. | Job | Status |
| --- | ---- | ------ |
| 1 | [*`Jour 3 - HTML + CSS + Flex`*](#Jour-3---HTML-+-CSS-+-Flex) | [Done](#)\* |

> NOTE: (\*) = still needs to be updated


## Jour 3 - HTML + CSS + Flex

Here is a list of all the names, `.html` and `.css` files to be submitted and their corresponding / current **status** for this  job:

| No. | Name | File | Status |
|:----|:-----|:-----|:-------|
| 1 | *`Acceuil`* | **accueil.html** | [Done](./accueil.html)\* | 
| 2 | *`Qui sommes nous`* | **qui-sommes-nous.html** | [Done](./qui-sommes-nous.html)\* | 
| 3 | *`AWS Restart`* | **aws-restart.html** | [Done](./aws-restart.html)\* | 
| 4 | *`Contact`* | **contact.html** | [Done](./contact.html)\* | 
| 5 | *`News`* | **news.html** | [Done](./news.html)\* | 
| 6 | *`Plateforme Start`* | **plateforme-start.html** | [Done](./plateforme-start.html)\* | 
| 7 | *`CSS - LaPlateforme_`* | **laplateforme.css** | [Done](./laplateforme.html)\* | 

> NOTE: (\*) = still needs to be updated

### Structure

The folder & file structure of this project:
  
- [**assets**](./assets/)
- - [**logos**](./assets/logos/)
- - [**images**](./assets/images/)
- LICENSE
- README.md
- manifest.json
- ...
- **accueil.html**
- **contact.html**

> NOTE: This is just a snippet.

### Installation

```sh
git clone https://github.com/abraham-ukachi/site-la-plateforme.git && cd site-la-plateforme
```

### Example usage

Just open the any of the `.html` files with your default browser, and voila !

#### Open Home page

To open the **home page**, enter the following command in your terminal:

```sh
open accueil.html
```

#### Open Contact page

To open the **contact page**, enter the follwoing command in your terminal:

```sh
open contact.html
```

#### via a local server

Start a local server at port **7777** from `site-la-plateforme` directory:

```sh
python -m SimpleHTTPServer 7777
```

---

## Testing

| Browser | Version | Status | Date | Time
|:--------|:--------|:-------|:-----|:-----
| *`Brave`* | **1.44.112** | [Tested](http://localhost:7777/accueil.html) | 2022-11-01 | 10:17:47
| *`Chrome`* | **-** | *Pending* | - | -
| *`Firefox`* | **-** | *Pending* | - | -
| *`Safari`* | **-** | *Pending* | - | -
| *`Opera`* | **-** | *Pending* | - | -
| *`Edge`* | **-** | *Pending* | - | -
| *`IE`* | **-** | *Pending* | - | -

> NOTE: *`IE`* = Internet Explorer = 👎🏽


## More 

These are some of the things I did in addition to this project's [job requirements](#Requirements):

1. **<script>**: I embedded a "little" JS script into all `.html` files
2. **laplateforme.js**: I created a JavaScript file named [laplateforme.js](./laplateforme.js) and inserted it to all `.html` files in the same directory.
3. **favicon.ico**: I created an **white** `.ico` image as the site's default icon or *`favicon`*.
4. **SplashScreen**: I made a splash screen which only gets displayed when the [accueil.html](./accueil.html) page loads.
5. **Light & Dark mode**: I added a `light` and `dark` mode feature to the site.


> NOTE: There are a few I must have forgotten, so I'll keep the above list updated obv. :)

## TODOs

- [ ] Add localization (at least: **english** & **french**)
- [ ] Align *LaPlateforme* footer logo to **left**.
- [ ] Create a *`#headerContent.container`* in **accueil.html**, to fix alignment or stretch issues.
- [ ] Create a dialog layout
- [ ] Add mobile compatibility to all pages (i.e. make it responsive)
- [ ] Optimize the [**accueil.html**](./accueil.html) file
- [ ] Update the [**qui-sommes-nous.html**](./qui-sommes-nous.html) file
- [ ] Update the [**aws-restart.html**](./aws-restart.html) file
- [ ] Update the [**contact.html**](./contact.html) file
- [ ] Update the [**news.html**](./news.html) file
- [ ] Update the [**plateforme-start.html**](./plateforme-start.html) file
- [ ] Remove unnecessary comments

