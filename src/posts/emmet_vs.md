---
slug: "/emmet-javascript-vscode"
title: "Enable Emmet support for JSX in VS Code"
date: "2019-07-02"
---

Emmet is already included in VS Code but a few steps are required to enable it's usage in vs code.

1. Go to settings: Command + ,

1. Go to the Workspace Settings tab.

1. Go to Extensions dropdown, and choose Emmet.

1. Click **Edit in settings.json**

1. Add the following line

```json
{
   "emmet.includeLanguages": {
      "javascript": "javascriptreact"
   }
}
```