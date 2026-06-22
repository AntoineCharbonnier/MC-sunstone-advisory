#!/usr/bin/env node
'use strict';

// Corrects a garbled/mistyped attempt at a known email address, then emits the
// site's anti-bot markup (entity-encoded href + data-user/data-domain attrs,
// see website/previews/v2/version-v.html .contact-email).

const CANONICAL_EMAILS = ['marine@sunstoneadvisory.fr'];

function normalize(s) {
  return s.toLowerCase().replace(/\s+/g, '');
}

function multisetKey(s) {
  return [...s].sort().join('');
}

function levenshtein(a, b) {
  const m = a.length, n = b.length;
  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = a[i - 1] === b[j - 1]
        ? dp[i - 1][j - 1]
        : 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
    }
  }
  return dp[m][n];
}

// Sorted-letter distance catches scrambled order (the actual failure mode of
// fat-fingered typing); raw-string distance catches dropped/extra characters.
// Take whichever is smaller against each known address.
function findClosestEmail(input) {
  const cleaned = normalize(input);
  const cleanedKey = multisetKey(cleaned);
  let best = null;
  let bestScore = Infinity;
  for (const candidate of CANONICAL_EMAILS) {
    const score = Math.min(
      levenshtein(cleanedKey, multisetKey(candidate)),
      levenshtein(cleaned, candidate)
    );
    if (score < bestScore) {
      bestScore = score;
      best = candidate;
    }
  }
  return { match: best, distance: bestScore };
}

function toObfuscatedMarkup(email) {
  const [user, domain] = email.split('@');
  const mailto = `mailto:${email}`;
  const href = [...mailto].map((c) => `&#${c.codePointAt(0)};`).join('');
  return [
    '<a class="btn-outline-gold contact-email"',
    `   href="${href}"`,
    `   data-user="${user}"`,
    `   data-domain="${domain}"`,
    '   aria-label="Email Marine at Sunstone Advisory"></a>',
  ].join('\n');
}

const input = process.argv[2];
if (!input) {
  console.error('Usage: node fix-and-encode-email.js "<garbled-email>"');
  process.exit(1);
}

const { match, distance } = findClosestEmail(input);
console.log(`Input:      ${input}`);
console.log(`Corrected:  ${match}  (distance: ${distance})`);
console.log();
console.log(toObfuscatedMarkup(match));
