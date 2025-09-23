---
layout: single
title: "Video Post Example"
date: 2025-09-17
header:
  video:
    id: XsxDH4HcOWA
    provider: youtube
categories:
  - Layout
tags:
  - video
  - youtube
  - layout
toc: true
toc_sticky: true
---

# Video Post with Table of Contents

This post shows how to include videos and use a sticky table of contents. The table of contents on the right will stay visible as you scroll.

## YouTube Video

Below is an embedded YouTube video:

{% include video id="XsxDH4HcOWA" provider="youtube" %}

## Different Video Providers

You can embed videos from:
- YouTube
- Vimeo
- Google Drive
- Custom HTML5 videos

## Using the TOC

The table of contents on the right is automatically generated from your headings. It's perfect for:
- Long-form articles
- Documentation
- Tutorial posts
- Any content with multiple sections

### Deep Nesting

#### Level 4 Heading

The TOC will show nested headings up to the configured depth.

## Code Blocks with Syntax Highlighting

```ruby
def hello_world
  puts "Hello, Jekyll!"
end
```

```python
def fibonacci(n):
    if n <= 1:
        return n
    else:
        return fibonacci(n-1) + fibonacci(n-2)
```

## Blockquotes and Notices

> This is a standard blockquote. Perfect for quotes and citations.

**Notice:** You can also use notice boxes:

{: .notice--primary}
This is a primary notice box.

{: .notice--info}
This is an info notice box.

{: .notice--warning}
This is a warning notice box.

{: .notice--danger}
This is a danger notice box.
