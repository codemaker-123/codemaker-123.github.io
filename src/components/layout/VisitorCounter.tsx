'use client';

import { useEffect, useState } from 'react';

const COUNTER_ENDPOINT = 'https://homepage-counter.ltt3290901.workers.dev/hit';

export default function VisitorCounter() {
  const [visits, setVisits] = useState<number | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    fetch(COUNTER_ENDPOINT, { cache: 'no-store', signal: controller.signal })
      .then(response => response.ok ? response.json() : Promise.reject(new Error('Unable to record visit')))
      .then((data: { count: number }) => setVisits(data.count))
      .catch(error => {
        if (error.name !== 'AbortError') setVisits(null);
      });

    return () => controller.abort();
  }, []);

  return (
    <span aria-label="Visits">
      Visits: {visits === null ? '—' : visits.toLocaleString()}
    </span>
  );
}
