/**
 * CheckIcon component displays a checkmark icon.
 */
export default function CheckIcon(props: any) {
  return (
    <svg data-testid='check-icon' fill='none' viewBox='0 0 24 24' {...props}>
      <circle cx={12} cy={12} fill='#fff' opacity='0.2' r={12} />
      <path
        d='M7 13l3 3 7-7'
        stroke='#fff'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
      />
    </svg>
  );
}
