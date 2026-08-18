'use client';

import { useEffect, useState } from 'react';

const COUNTER_ENDPOINT = 'https://homepage-counter.ltt3290901.workers.dev/hit';
const FALLBACK_BADGE = 'https://komarev.com/ghpvc/?username=codemaker-123&label=Visits&base=300';

export default function VisitorCounter() {
  const [visits, setVisits] = useState<number | null>(null);
  const [useFallback, setUseFallback] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 5000);

    fetch(COUNTER_ENDPOINT, { cache: 'no-store', signal: controller.signal })
      .then(response => response.ok ? response.json() : Promise.reject(new Error('Unable to record visit')))
      .then((data: { count: number }) => {
        if (typeof data.count !== 'number') throw new Error('Invalid visit count');
        setVisits(data.count);
      })
      .catch(error => {
        setUseFallback(true);
      })
      .finally(() => {
        window.clearTimeout(timeout);
      });

    return () => {
      window.clearTimeout(timeout);
      controller.abort();
    };
  }, []);

  if (useFallback) {
    return <img src={FALLBACK_BADGE} alt="Visits: 300 or more" className="h-5 w-auto" />;
  }

  return (
    <span aria-label="Visits">
      Visits: {visits === null ? '—' : visits.toLocaleString()}
    </span>
  );
}
