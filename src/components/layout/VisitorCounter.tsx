'use client';

const COUNTER_BADGE_URL = 'https://komarev.com/ghpvc/?username=codemaker-123&label=Visits&base=300&style=flat&color=263759';

export default function VisitorCounter() {
  return (
    <img
      src={COUNTER_BADGE_URL}
      alt="Visits"
      className="h-5 w-auto"
      onError={(event) => {
        event.currentTarget.style.display = 'none';
      }}
    />
  );
}
