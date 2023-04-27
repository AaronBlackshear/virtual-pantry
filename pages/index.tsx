import { withPageAuthRequired } from '@auth0/nextjs-auth0';

export default function Home() {
  return (
    <div>
      <h1 className="title-3">Index Page</h1>
    </div>
  )
}

export const getServerSideProps = withPageAuthRequired();
