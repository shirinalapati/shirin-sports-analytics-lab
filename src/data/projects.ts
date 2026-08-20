export type Sport = "soccer" | "basketball" | "hockey" | "baseball";

export type Project = {
  slug: string;
  title: string;
  dates: string;
  sport: Sport;
  featured?: boolean;
  blurb: string;
  detail: string;
  tags: string[];
  note?: string;
  href: string;
  hrefLabel: "live app" | "github";
};

export const projects: Project[] = [
  {
    slug: "mls-value-index",
    title: "mls value index",
    dates: "feb 2026 – present",
    sport: "soccer",
    featured: true,
    blurb:
      "which current mls players provide the most compensation-efficient, position-adjusted on-ball impact?",
    detail:
      "blends 2026 season-to-date asa goals added with a 2025 full-season prior, then compares reliability-adjusted sporting impact to 2026 mlspa guaranteed compensation. value surplus and a position-percentile undervaluation score surface elite value, strong value, and undervalued labels with explicit impact and confidence floors — so high surplus without enough sporting impact cannot be mislabeled. about, rankings, team views, player profiles, and a compare tool.",
    tags: ["r", "shiny", "sqlite", "asa"],
    note: "goalkeepers excluded pending a separate model",
    href: "https://undervalued-mls.shinyapps.io/mls-value-index/",
    hrefLabel: "live app",
  },
  {
    slug: "mls-keeperiq",
    title: "mls keeperiq",
    dates: "2026",
    sport: "soccer",
    featured: true,
    blurb:
      "complete on-field keeper value — shot-stopping, handling, claiming, sweeping, passing, and fielding in one unit.",
    detail:
      "uses american soccer analysis goals added components in a common goal-equivalent unit, then applies empirical-bayes reliability adjustment and ranks keepers on a minutes-weighted keeperiq percentile (50 ≈ league median). covers 2025 final, 2026 live with rank movement, a bayesian current talent blend, style archetypes, compare, and a scouting decision tool with office exports.",
    tags: ["next.js", "typescript", "python", "duckdb"],
    href: "https://mls-goalkeeping-iq.vercel.app/",
    hrefLabel: "live app",
  },
  {
    slug: "developmentiq",
    title: "developmentiq",
    dates: "may 2026 – jul 2026",
    sport: "basketball",
    featured: true,
    blurb:
      "which skill improvement would create the most value for this college basketball player on this team right now?",
    detail:
      "scores every player × skill combination with a development priority score that combines improvement opportunity, team need, role/minutes leverage, realism, and basketball impact. includes a development leverage leaderboard, team needs map, player profiles, and an improvement simulator across 102 teams and 900+ rotation players.",
    tags: ["react", "fastapi", "python", "sqlite"],
    note: "102 teams · 900+ rotation players",
    href: "https://college-basketball-player-development-tool.vercel.app/",
    hrefLabel: "live app",
  },
  {
    slug: "nba-undervalued",
    title: "nba undervalued players",
    dates: "jan 2026 – apr 2026",
    sport: "basketball",
    blurb:
      "ranks 2025–26 rotation players with a five-pillar undervalued player score — not raw production alone.",
    detail:
      "uvps blends offensive skill, defensive skill, holistic impact, role efficiency, and salary efficiency from public stats and salaries. inputs are winsorized and cross-sectionally normalized before weighting. searchable leaderboard, market views, and player profiles with pillar breakdowns. exploratory — not betting or contract advice.",
    tags: ["react", "typescript", "python", "recharts"],
    href: "https://2025-2026-nba-undervalued-players-a.vercel.app/",
    hrefLabel: "live app",
  },
  {
    slug: "nba-lineup",
    title: "nba lineup intelligence",
    dates: "jan 2026 – apr 2026",
    sport: "basketball",
    blurb:
      "every five-man lineup in 2025–26 — efficiency splits, minute floors, and an underrated-lineup score.",
    detail:
      "ingests league data into sqlite, exposes a fastapi service for lineups, filters, and a substitution simulator, and ships react and streamlit front ends so the same logic runs locally, on the api, and in the cloud.",
    tags: ["fastapi", "streamlit", "sqlite", "react"],
    href: "https://2026-nba-lineup-intelligence.streamlit.app/",
    hrefLabel: "live app",
  },
  {
    slug: "courtvision",
    title: "courtvision",
    dates: "jan 2026 – mar 2026",
    sport: "basketball",
    blurb:
      "march madness matchup intelligence — style scores and scouting-style paths through a 64-team field.",
    detail:
      "converts regular-season team metrics into normalized style scores, compares matchup-specific strengths and weaknesses, and generates explanations for why one team may have a cleaner tactical path. compare any two teams in the bracket.",
    tags: ["react", "fastapi", "sqlite", "python"],
    href: "https://2026-march-madness-ebon.vercel.app/",
    hrefLabel: "live app",
  },
  {
    slug: "nhl-xg",
    title: "nhl expected goals",
    dates: "jan 2026 – apr 2026",
    sport: "hockey",
    blurb:
      "an interpretable logistic xg model that separates shot quality from results.",
    detail:
      "sql window functions engineer shot context (rebound/rush, game state); python derives distance and angle. trained with a strict time-based split and evaluated with roc-auc, log loss, and brier. streamlit app with shot maps, leaderboards, and diagnostics.",
    tags: ["python", "sql", "streamlit", "sklearn"],
    href: "https://nhl-xg-model.streamlit.app/",
    hrefLabel: "live app",
  },
  {
    slug: "nhl-playback",
    title: "nhl game playback",
    dates: "oct 2025 – apr 2026",
    sport: "hockey",
    blurb:
      "replay-driven xg, momentum, and pressure modeling for every 2025–26 regular-season game.",
    detail:
      "an event-level playback engine simulates games in time so you can see when momentum shifts, how pressure sequences develop, and how shot quality accumulates. includes key-moment detection, cumulative threat curves, rolling pressure windows, and rink maps from public nhl pbp.",
    tags: ["python", "sqlite", "plotly", "streamlit"],
    href: "https://nhl-playback-analytics.streamlit.app/",
    hrefLabel: "live app",
  },
  {
    slug: "zone-entry",
    title: "zone entry analysis",
    dates: "nov 2025 – apr 2026",
    sport: "hockey",
    blurb:
      "inferred offensive-zone entries and post-entry shot generation — without tracking data.",
    detail:
      "nhl play-by-play from 2024–26, measuring shot timing, 5s/10s conversion, and a distance-based shot quality index. python + sqlite (ctes, window functions) with a streamlit dashboard for league, team, and player views.",
    tags: ["python", "sqlite", "streamlit"],
    href: "https://zone-entry-analysis.streamlit.app/",
    hrefLabel: "live app",
  },
  {
    slug: "projection-signal-lab",
    title: "projection signal lab",
    dates: "2026",
    sport: "baseball",
    featured: true,
    blurb:
      "which baseball metrics predict next-season performance — and which are better used to explain it?",
    detail:
      "an expanding-window projection study across hitting, pitching, baserunning, defense, and overall value. each metric gets a verdict — projection, diagnostic, or insufficient evidence — based on out-of-time validation against strong baselines (age, playing time, multi-year history, park). includes metric passports, a reliability map, feature audits, and a full glossary. stuff+ scores come from arsenal intelligence and are tested for incremental fip forecast value.",
    tags: ["react", "typescript", "python", "statcast"],
    href: "https://future-predictor-green.vercel.app/",
    hrefLabel: "live app",
  },
  {
    slug: "arsenal-intelligence",
    title: "arsenal intelligence",
    dates: "nov 2025 – mar 2026",
    sport: "baseball",
    blurb:
      "stuff+ and arsenal stuff+ from 2.16m statcast pitches — swing-and-miss from physical traits.",
    detail:
      "role-specific logistic models for starters and relievers, shap explainability, ranked leaderboards with 2023–2025 filters, and an interactive pitcher explorer. public statcast, built to be interpretable.",
    tags: ["python", "streamlit", "shap", "statcast"],
    href: "https://arsenalintelligence.streamlit.app/",
    hrefLabel: "live app",
  },
  {
    slug: "mlb-undervalued-pitchers",
    title: "mlb undervalued pitchers",
    dates: "jan 2026 – feb 2026",
    sport: "baseball",
    blurb:
      "an interpretable undervalued pitcher score across six indices for the 2025 season.",
    detail:
      "combines fangraphs data with dominance, command, run prevention, stuff quality, luck adjustment, and salary efficiency to surface pitching talent the market may be missing.",
    tags: ["react", "python", "fangraphs"],
    href: "https://2025-mlb-undervalued-pitchers.vercel.app/",
    hrefLabel: "live app",
  },
  {
    slug: "mlb-undervalued-hitters",
    title: "mlb undervalued hitters",
    dates: "oct 2025 – nov 2025",
    sport: "baseball",
    blurb:
      "350 hitters, 200+ pa, ranked by a custom undervalued-player formula for 2025.",
    detail:
      "a public table of basic and advanced stats plus a full leaderboard so fans can see who was quietly productive — and appreciate the ones everyone already knew about.",
    tags: ["python", "flask"],
    href: "https://salapati.pythonanywhere.com/",
    hrefLabel: "live app",
  },
  {
    slug: "mlb-lineup-intelligence",
    title: "mlb lineup intelligence",
    dates: "2026",
    sport: "baseball",
    blurb:
      "how much does batting order actually matter? a markov engine and 362,880-order optimizer.",
    detail:
      "across 3,790 team-games, the typical gap vs the best order of the same nine was 0.014 runs/game (~2.3 runs per 162). about 72% of lineups were already within 0.02 r/g of optimum — personnel usually dwarfs slotting. adjacent-hitter chemistry did not beat a talent-only baseline, so the optimizer does not use it.",
    tags: ["python", "markov", "research"],
    note: "github only — no live app",
    href: "https://github.com/shirinalapati/lineup-intelligence",
    hrefLabel: "github",
  },
  {
    slug: "pitcheriq",
    title: "pitcheriq",
    dates: "2025",
    sport: "baseball",
    blurb:
      "side-by-side mlb arsenal comparison with a custom usage-weighted stuff score.",
    detail:
      "browse starters and relievers across all 30 teams, inspect movement, location, usage, velocity, spin, and contact, and evaluate free-agent arms. fastapi + sqlite backend, react frontend, public 2025 statcast.",
    tags: ["react", "fastapi", "sqlite", "statcast"],
    href: "https://2025-pitcher-comparison.vercel.app/",
    hrefLabel: "live app",
  },
];

export const sportSections: { id: Sport; n: string }[] = [
  { id: "baseball", n: "01" },
  { id: "basketball", n: "02" },
  { id: "soccer", n: "03" },
  { id: "hockey", n: "04" },
];

export const socials = {
  github: "https://github.com/shirinalapati",
  linkedin: "https://linkedin.com/in/shirin-alapati-a26171356",
  x: "https://x.com/ShirinAnalytics",
};
