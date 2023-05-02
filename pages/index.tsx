import { getMealPlansUrl } from '@/lib/urls_app';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

export default function Home() {
  return null;
}

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps() {
    return {
      redirect: {
        permanent: true,
        destination: getMealPlansUrl()
      }
    };
  }
});