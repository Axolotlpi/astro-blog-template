# Astro Blog Template

This template is meant to be a starting point for a blog, or similar article site based on Astro js and biased towards using Sanity io.

This is by no means generic to any use case and is mainly for my preferences, but feel free to use it if you like.

**This template was based off of Jaydan Urwin's "[Astro Sanity Minimal Starter](http://https://github.com/jaydanurwin/astro-sanity-minimal-starter 'Astro Sanity Minimal Starter')"  
Thank you Jaydan for the good SEO**

### Features

- RSS
- Structured Data in JSONLD format
- Typescript
- use of dynamic paths for blog pages + author pages
- No styles, and minimal content layout (you get to define it)
- Schema types based off of sanity's blog template
- Basic Sanity helpers
- My taste in organization

## Usage

These are the same as the Astro defaults

**Use this template and install**  
 npm i  
**Start your dev server**  
 npm run dev  
**Build to ./dist**  
 npm run build

## Organization Explained (work in progress)

Here I'll go over why I made the decisions I did in making this template,  
that way you can decide for yourself if this template is any good for you.  
But it's also mainly for my own reference.

### File Structure

Nothing too weird here, just note that I've added a "compositions" directory.  
The main reason for this is to place anything that is to specific to be placed in components,  
and reusable enough not to go directly in pages. As the name implies this usually results in a  
"composition" of components or plain tags. Either way I made it up, feel free to delete it.

### Site Config

This one may not be for everyone, but I sliced everything that could be considered a  
site-wide configuration and pulled it into here.
That's the reason behind the generate rss and structured data functions.  
Both happen in the pages, but you can change them from here.  
I added types to make the seperation more bearable.

### Queries

This one is my favorite. I've built this with Sanity io in mind,  
but I tried to decouple it as best as it made sense to. This file will contain  
a sort of mapping from the query+transforms and the types specified in the file.  
This way the coupling between your props and the queries are defined in the types you define here.

### Helpers

These are hard to define. Their main benifit is the abstracting out of npm modules  
you may be using. They serve to hide implementation logic that clutters your pages.  
In general I try to make them reusable and generic, but things like the imgUrlBuillder  
just have to be coupled to the creation of the site anyway.

### General Tips

I prefer to keep components simple and uncoupled to the site.  
That is, they can be reused in another project. Then compose them in reusable,  
but more specific, "compositions".  
Define types that benifit from being typed. Don't type everything.
