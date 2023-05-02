import { Avatar } from "@/components/Avatar"
import { ButtonLink } from "@/components/Button"

export function MealPlanList() {
  return (
    <div>
      <section className="space-y-6">
        {Array.from(Array(3)).map((_, ind) => (
          <MealPlanListCard key={ind} />
        ))}
      </section>
    </div>
  )
}

function MealPlanListCard() {
  return (
    <div className="drop-shadow-8dp bg-white p-6 rounded-3xl">
      <section className="flex justify-between items-center mb-2">
        <h4 className="subheadline text-gray-1">May 1-7, 2023</h4>

        <ButtonLink href="#" variant="secondary" size="sm" iconRight="arrowRight">
          View all
        </ButtonLink>
      </section>

      <section className="flex flex-col space-y-3">
        <div className="flex space-x-3">
          <Avatar theme="green" variant="initials" initials="BB" size="md" style="square" />

          <div className="flex flex-col justify-center items-start">
            <p className="body-bold text-gray-1">Breakfast Burritos</p>
            <p className="caption text-gray-6">Breakfast</p>
          </div>
        </div>
        <div className="flex space-x-3">
          <Avatar theme="blue" variant="initials" initials="TS" size="md" style="square" />

          <div className="flex flex-col justify-center items-start">
            <p className="body-bold text-gray-1">Turkey Sandwich</p>
          </div>
        </div>
        <div className="flex space-x-3">
          <Avatar theme="pink" variant="initials" initials="CF" size="md" style="square" />

          <div className="flex flex-col justify-center items-start">
            <p className="body-bold text-gray-1">Chicken Fried Steak with Mashed Potatoes</p>
            <p className="caption text-gray-6">Dinner</p>
          </div>
        </div>

        <p className="body-bold">+ 12 more meals</p>
      </section>
    </div>
  )
}
