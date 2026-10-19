# Research — AI-Era Web Patterns for bpoptima.com

B2B enterprise sites still mostly describe a product. AI-assisted tooling now makes it cheap for a small team to let a visitor *operate* one instead. I looked at three ways to apply that to BP Optima specifically, and prototyped the one that most directly proves the product's core claim.

---

## Idea 1 — Interactive Decision Replay (prototyped)

**Inspiration:** [Stripe's API documentation](https://docs.stripe.com/api) (live, editable, executable examples instead of static code blocks); Bret Victor's explorable explanations.

**What AI changed:** generating a realistic synthetic evidence document, running structured extraction, evaluating policy rules, and producing a reasoned recommendation can now all happen client-side, convincingly, without a real backend integration. A few years ago, a demo this specific would have needed real data pipes to not feel fake.

**Why it fits BP Optima:** GroundSet's entire pitch is transparency. The most direct way to prove transparency is to let a visitor replay one real decision themselves, at their own pace, rather than read a claim about explainability.

---

## Idea 2 — Living Architecture (not built)

**Inspiration:** [Stripe docs](https://docs.stripe.com/api)' three-pane pattern; [Vercel AI SDK docs](https://sdk.vercel.ai/docs), where the architecture itself is something you click through.

**What AI changed:** state-driven, clickable system diagrams are now roughly as cheap to build as a static SVG used to be — there's no longer a good excuse for a dead architecture image on a technical product's site.

**Why it fits BP Optima:** gives the CTO and engineer persona the same "operate it, don't just read it" experience Idea 1 gives the CRO — click "Evidence," watch "Rules" and "Audit" update live downstream.

---

## Idea 3 — Inferred, not selected, homepage context (not built)

**Inspiration:** B2B visitor-enrichment tools like [Clay](https://clay.com) or [Warmly](https://warmly.ai) — real-time company/role inference from referrer or email domain.

**What AI changed:** enrichment APIs plus LLM summarization make real-time "who is this, what do they likely care about" inference viable for a small team; this used to require a data team and a CDP.

**Mechanism, concretely:** referrer or landing-page email domain → lightweight company/industry lookup → the hero's example swaps (an insurer sees claims-fraud detection, a bank sees AML/credit approval) — no toggle, no "choose your persona" click. The visitor never has to self-identify for the site to already be speaking to them.

**Why it fits BP Optima:** a CRO doesn't want to be asked who they are — they want the site to already seem to understand their world before they've clicked anything. That reads as competence, not personalization theater.

---

## Why only one was built

I prototyped the Interactive Decision Replay because it's the only one of the three that *proves* the product rather than *improving how the product is discovered or communicated*. Given the time constraint, depth on the thing that actually builds trust beat breadth across three shallow demos.
