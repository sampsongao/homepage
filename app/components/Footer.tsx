export type FooterProps = {
  children: React.ReactNode;
};

export default function Footer(props: FooterProps) {
  return (
    <footer className="text-gray-800 dark:text-gray-200">
      <div className="flex flex-row align-center justify-center container p-4 pb-8">
        {props.children}
      </div>
    </footer>
  )
};
