import { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';

const stats = [
  { id: 1, name: 'Parts for ISUZU', value: 10000 },
  { id: 2, name: 'Years of experience', value: 20 },
  { id: 3, name: 'Daily Customers', value: 100 },
  { id: 4, name: 'Unique Parts Avail', value: 330 },
];

const Stats = () => {
  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className="mt-32 border-t border-gray-200">
      <div className="p-4 just bg-red-500 rounded-lg md:p-8">
        <dl className="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-4 sm:p-8">
          {stats.map((stat) => (
            <StatItem key={stat.id} stat={stat} formatter={numberWithCommas} />
          ))}
        </dl>
      </div>
    </div>
  );
};

const StatItem = ({ stat, formatter }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [reset, setReset] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(false);  // Reset visibility
          setReset((prev) => prev + 1);  // Force re-render to restart animation
          setTimeout(() => setIsVisible(true), 50);  // Delay to ensure animation reset
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={ref} className="flex flex-col items-center justify-center">
      {isVisible && (
        <CountUp
          key={reset}  // Use reset state to re-trigger the CountUp component
          start={0}
          end={stat.value}
          delay={0}
          duration={2}
          decimals={0}
          formatter={formatter}
        >
          {({ countUpRef }) => (
            <span
              className="mb-2 text-3xl font-extrabold text-white"
              data-from="0"
              data-to={100}
              ref={countUpRef}
            >
              {stat.value}
            </span>
          )}
        </CountUp>
      )}
      <dd className="text-2xl font-bold text-white">{stat.name}</dd>
    </div>
  );
};

export default Stats;
