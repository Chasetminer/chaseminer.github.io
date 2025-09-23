---
layout: single
title: "Image Gallery Post Example"
date: 2025-09-17
header:
  image: https://via.placeholder.com/1200x400
  caption: "Photo credit: [**Placeholder**](https://placeholder.com)"
gallery:
  - url: https://via.placeholder.com/800x600
    image_path: https://via.placeholder.com/400x300
    alt: "placeholder image 1"
    title: "Image 1 title"
  - url: https://via.placeholder.com/800x600
    image_path: https://via.placeholder.com/400x300
    alt: "placeholder image 2"
    title: "Image 2 title"
  - url: https://via.placeholder.com/800x600
    image_path: https://via.placeholder.com/400x300
    alt: "placeholder image 3"
    title: "Image 3 title"
categories:
  - Layout
tags:
  - gallery
  - images
  - layout
---

This post demonstrates how to create an image gallery in your posts. The Minimal Mistakes theme makes it easy to create beautiful image galleries.

{% include gallery caption="This is a sample gallery with placeholder images." %}

## Single Image with Caption

Here's how to include a single image with caption:

{% include figure image_path="https://via.placeholder.com/800x400" alt="this is a placeholder image" caption="This is a figure caption." %}

## Text Between Images

You can mix text and images however you like. The gallery feature is perfect for:
- Photo collections
- Portfolio items
- Project screenshots
- Art galleries
