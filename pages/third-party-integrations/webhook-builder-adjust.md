---
type: recipe
directory: third-party-integrations
title: "Adjust Webhook Builder"
description: Use this simple tool to help construct a Branch webhook to postback data to the Adjust platform.
keywords: Contextual Deep Linking, Deep links, Deeplinks, Deep Linking, Deeplinking, Deferred Deep Linking, Deferred Deeplinking, Google App Indexing, Google App Invites, Apple Universal Links, Apple Spotlight Search, Facebook App Links, AppLinks, Deepviews, Deep views, Ad Measurement, third party ad measurement, ad network
hide_platform_selector: true
hide_section_selector: true
contents: hide
sections:
- guide
---

### Configuring your Branch & Adjust Webhooks

Use this webhook creation tool to create a postback URL, which you can then use to [create a new webhook in your Branch dashboard](https://dashboard.branch.io/#/webhook) to link your Branch and Adjust accounts.

{% prerequisite %}
- For this feature to work as expected, you should [integrate the Branch SDK]({{base.url}}/getting-started/sdk-integration-guide) into your app.
- If you want to deep link from your ads directly content, you should [configure deep link routing]({{base.url}}/getting-started/deep-link-routing).
{% endprerequisite %}

### Webhook builder

{% include webhook-builder-assets/webhook_builder_Adjust.html %}