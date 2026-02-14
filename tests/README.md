# Test Architecture

Current project test directories are organized for enterprise-scale growth:

```text
tests/
  unit/        # Pure logic tests (services, utils, state)
  integration/ # Feature flow tests (form + service, provider + UI)
  e2e/         # End-to-end tests for core user journeys
```

Recommended initial coverage:
- `unit/features/contact/services/contact-inquiry.test.ts`
- `integration/features/contact/contact-form.test.tsx`
- `e2e/contact-inquiry.spec.ts`
