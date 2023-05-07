import classNames from "classnames";

type CalendarEventColors = 'green' | 'blue' | 'pink';

interface Props {
  children: React.ReactNode;
  color: CalendarEventColors;
}

export function CalendarEvent({ children, color }: Props) {
  const colorClasses = getColorClasses(color)

  return (
    <div className={classNames("p-2 rounded-xl text-body-small", colorClasses)}>{children}</div>
  )
}

function getColorClasses(color: CalendarEventColors): string {
  switch (color) {
    case 'green':
      return 'text-green-1 bg-green-11';

    case 'blue':
      return 'text-blue-3 bg-blue-11';

    case 'pink':
      return 'text-pink-3 bg-pink-11';
  }
}
