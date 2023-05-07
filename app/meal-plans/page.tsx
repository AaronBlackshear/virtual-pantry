import { MealPlansPage } from '@/page_impls/MealPlansPage';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

export default function Home() {
  return (
    <MealPlansPage />
  )
}

export const getServerSideProps = withPageAuthRequired();