---
name: NVIDIA hosted model availability
description: NVIDIA's model catalog can list IDs that are not callable by the current account.
---

Use a real `/v1/chat/completions` request with the current account to verify a model before deploying it; do not rely on `/v1/models` or an old model card alone.

**Why:** A previously configured Abacus.AI model returned HTTP 410, and one catalog-listed replacement returned HTTP 404, while another active model returned HTTP 200.

**How to apply:** When changing the NVIDIA model, test authentication and a minimal completion first, then verify that the response contains only final text—not reasoning content—before updating the command and restarting the bot.