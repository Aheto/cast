
This makes your schema transparent for contributors.

---

## ⚛️ Step 4: Instrument Frontend
In `src/telemetry/session.js`:

```js
export function emitEvent(evt) {
  fetch("/telemetry", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(evt)
  });
}

export function startSession(context) {
  emitEvent({
    eventType: "session_start",
    timestamp: new Date().toISOString(),
    context,
    payload: {}
  });
}

export function endSession(context, startTime) {
  const durationMs = performance.now() - startTime;
  emitEvent({
    eventType: "session_end",
    timestamp: new Date().toISOString(),
    context,
    payload: { durationMs }
  });
}
