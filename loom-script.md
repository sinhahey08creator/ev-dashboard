
BP Optima's pitch: companies record their operations, their customers, their money — but not the judgment behind a decision. I wanted the site to make that gap visible fast, not explain it in a paragraph.


I looked at three AI-era patterns that go beyond static B2B marketing pages:

1. Interactive Decision Replay — inspired by Stripe's live API docs and explorable explanations. AI now makes it cheap to generate a realistic evidence document, run extraction, evaluate rules, and produce a reasoned output entirely in the browser — so a visitor can operate a real workflow instead of reading about one.
2. Living Architecture — inspired by Stripe docs and the Vercel AI SDK docs. Same idea applied to the system diagram: click a node, watch the ones downstream update live, instead of a static SVG.
3. Inferred homepage context — inspired by B2B enrichment tools like Clay or Warmly. Referrer or email domain infers the visitor's industry, and the hero's example swaps automatically — an insurer sees claims-fraud, a bank sees AML — no "pick your persona" toggle.

I prototyped only #1.  it's the one of the three that proves the product rather than improving how it's discovered. Given the time constraint, depth on the thing that actually builds trust beat breadth across three shallow demos

i worked from the actual assignment email, and flag that a longer document going around elsewhere didn't match it — moving on quickly, not dwelling.


Move through evidence → extraction → rules → recommendation → human review at a normal pace, one sentence per screen:
- Evidence: this is just what was received, nothing interpreted yet.
- Extraction: structured fields, each with its own confidence — low confidence would route to a human before anything downstream runs.
- Rules: the model only supplies values; the threshold is the client's own policy, versioned.
- Recommendation: a direct function of the rule outcomes — reproducible, not a guess.
- Human review: GroundSet never removes the human from approval, only the guesswork before it.

Then the ledger step — the payoff. Do the tamper demo live: edit the threshold, show the chain visibly diverge from the sealed original. Say it plainly: this is the one thing a generic AI landing page can't fake — proof, not persuasion. And be precise about what it is: this is cryptographic verification, not AI — the AI-era part was making an executable demo like this buildable by one person in an afternoon in the first place.

defence
My prototype optimizes for trust over novelty. Primary stakeholder: the Chief Risk Officer — they need deterministic, explainable, auditable, and the replay demonstrates all three directly. Secondary: the CTO, since the mechanism itself is inspectable.

It sacrifices marketing breadth, investor storytelling, and feature discovery — proving one decision end-to-end builds more trust than showing ten disconnected capabilities.

 What I rejected, and why**
- Chatbot — implies discretionary AI judgment, which is the opposite of what BP Optima sells.
- Particles, glowing gradients, autoplay — visual novelty competes with perceived reliability, and enterprise buyers should control the pace themselves, not be presented to.
- A self-select persona toggle (CTO/CRO/Investor buttons) — considered it, rejected it as not actually AI-era; that pattern's existed since 2012. The inferred version in Idea 3 is the one that's genuinely new.

 Honest caveat + close**
If I had another day instead of another hour, I wouldn't add more animation — I'd connect the replay to a real append-only backend so the audit trail is verifiable across sessions, not only inside one browser tab. That's the line between what a prototype should prove and what the product actually is.

---
