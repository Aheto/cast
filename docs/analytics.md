# Telemetry Event Schema

```json
{
  "eventType": "question_attempt",
  "timestamp": "2026-01-05T04:12:00Z",
  "userId": "student-42",
  "context": {
    "chapterId": "chapter-1",
    "assessmentId": "quiz-1",
    "questionId": "q2"
  },
  "payload": {
    "attemptIndex": 2,
    "response": "cat",
    "correctAnswer": "cat",
    "isCorrect": true,
    "responseTimeMs": 3800
  }
}
