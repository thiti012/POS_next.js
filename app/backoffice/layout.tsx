
export default function Home({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
    <div className='hold-trasition login-page'>{children}</div>
    </>
  );
}