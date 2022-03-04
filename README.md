# Astro Blog Template

This template is meant to be my go to for a blog or similar article site based on Astro js and biased towards using Sanity io.

This is by no means generic to any use case and is mainly for my preferences, but feel free to use it if you like.

**This template was based off of Jaydan Urwin's "[Astro Sanity Minimal Starter](http://https://github.com/jaydanurwin/astro-sanity-minimal-starter 'Astro Sanity Minimal Starter')"  
Thank you Jaydan for the good SEO**

### Features:

- RSS
- Structured Data in JSONLD format
- Typescript
- use of dynamic paths for blog pages + author pages
- No styles, and minimal content layout (you get to define it)
- Schema types based off of sanity's blog template
- Basic Sanity helpers
- My taste in organization

## Usage

As I add to this template, I will keep the most minimal setup here in main,  
and additional features will go in seperate branches.

Therefore, if you wish to use any of the branches I suggest  
checking the box when you choose "use this template" and  
rebase main onto the ones you want then delete the branches.

**Use this template**

**Rebase features you want**

```
git rebase tailwind
```

**Install dependencies**

```
npm i
```

**Start your dev server**

```
npm run dev
```

**Build to ./dist**

```
npm run build
```

## Organization Explained (work in progress)

Here I'll go over why I made the decisions I did in making this template,  
that way you can decide for yourself if this template is any good for you.  
But it's also mainly for my own reference.

### File Structure

Nothing too weird here, just note that I've added a "compositions" directory.  
The main reason for this is to place anything that is too specific to be placed in components,  
and reusable enough not to go directly in pages. As the name implies this usually results in a  
"composition" of components or plain tags. Either way I made it up, feel free to delete it.

### Site Config

This one may not be for everyone, but I sliced everything that could be considered a  
site-wide configuration and pulled it into here.
That's the reason behind the generate rss and structured data functions.  
Both happen in the pages, but you can change them from here.  
I added types to make the seperation more bearable.

### Queries

This one is my favorite. I tried to decouple it as best as it made sense to. This file will contain  
a sort of mapping from the query+projections and the types specified in the file.  
If you're using something without projections (eg. GQL) you can still reformat the query here  
by creating a reformat function for that query. Basically the relationship between your  
types and queries are defined here so you only have to worry about the types in the rest of the code.

### Helpers

These are hard to define. Their main benifit is the abstracting out of npm modules  
you may be using. They serve to hide implementation logic that clutters your pages.  
In general I try to make them reusable and generic, but things like the imgUrlBuillder  
just have to be coupled to the creation of the site for now.
